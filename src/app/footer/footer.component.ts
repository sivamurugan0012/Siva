import { Component, ElementRef, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as THREE from 'three';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html', // Assuming you have an HTML template
  styleUrls: ['./footer.component.scss']  // Assuming you have styles for the component
})
export class FooterComponent implements OnDestroy {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;

  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  sphere: THREE.Mesh | null = null;
  animationFrameId: number = 0;

  geometry!: THREE.SphereGeometry; // Declare geometry property
  material!: THREE.MeshBasicMaterial; // Declare material property
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.initThree();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.cancelAnimationFrame();
    this.ngZone.runOutsideAngular(() => {
      if (this.renderer && this.renderer.domElement) {
        this.rendererContainer.nativeElement.removeChild(
          this.renderer.domElement
        );
      }
    });
  }

  initThree() {
    try {
      // Attempt to create the 3D context
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);

      this.geometry = new THREE.SphereGeometry(1, 32, 32);
      this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.sphere = new THREE.Mesh(this.geometry, this.material);

      this.scene.add(this.sphere);
      this.camera.position.z = 5;

      this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('resize', this.onResize.bind(this));
        this.animate();
      });
    } catch (error) {
      console.error('Error creating 3D context:', error);
    }
  }

  onResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(): void {
    // Track animation frame ID for cancellation
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.sphere) { // Check if sphere exists before accessing its properties
      this.sphere.rotation.x += 0.01;
      this.sphere.rotation.y += 0.01;
    }

    this.renderer.render(this.scene, this.camera);
  }

  cancelAnimationFrame() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = 0;
    }
  }
}