import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { library } from '@fortawesome/fontawesome-svg-core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
// import { faLinkedin, faSkype, faFacebook } from '@fortawesome/free-brands-svg-icons';


// library.add(faLinkedin, faSkype, faFacebook);
import  Hammer from 'hammerjs'; 
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  @ViewChild('viewport') viewport!: ElementRef<any>; // Reference to the viewport element

  canScroll = true;
  scrollController: any;


  constructor() {}

  @HostListener('document:mousewheel', ['$event'])
  @HostListener('document:DOMMouseScroll', ['$event'])
  handleMouseWheelEvent(event: any) {
    if (!document.querySelector('.outer-nav')?.classList.contains('is-vis')) {
      event.preventDefault();

      const delta = (event.wheelDelta) ? -event.wheelDelta : event.detail * 20;

      if (delta > 50 && this.canScroll) {
        this.canScroll = false;
        clearTimeout(this.scrollController);
        this.scrollController = setTimeout(() => {
          this.canScroll = true;
        }, 800);
        this.updateHelper(1);
      } else if (delta < -50 && this.canScroll) {
        this.canScroll = false;
        clearTimeout(this.scrollController);
        this.scrollController = setTimeout(() => {
          this.canScroll = true;
        }, 800);
        this.updateHelper(-1);
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    if (!document.querySelector('.outer-nav')?.classList.contains('is-vis')) {
      event.preventDefault();
      this.updateHelper(event);
    }
  }

  // updateHelper(param: any) {
  //   const curActive = document.querySelector('.side-nav .is-active') as HTMLElement;
  //   const curPos = Array.from(curActive.parentElement.children).indexOf(curActive);
  //   const lastItem = document.querySelectorAll('.side-nav li').length - 1;
  //   let nextPos = 0;

  //   if (param.type === 'swipeup' || param.keyCode === 40 || param > 0) {
  //     nextPos = curPos !== lastItem ? curPos + 1 : 0;
  //   } else if (param.type === 'swipedown' || param.keyCode === 38 || param < 0) {
  //     nextPos = curPos !== 0 ? curPos - 1 : lastItem;
  //   }

  //   this.updateNavs(nextPos);
  //   this.updateContent(curPos, nextPos, lastItem);
  // }

  // updateNavs(nextPos: number) {
  //   document.querySelectorAll('.side-nav, .outer-nav').forEach(element => {
  //     element.children.forEach(child => {
  //       child.classList.remove('is-active');
  //     });
  //     element.children[nextPos].classList.add('is-active');
  //   });
  // }

  // updateContent(curPos: number, nextPos: number, lastItem: number) {
  //   const mainContent = document.querySelector('.main-content') as HTMLElement;
  //   mainContent.querySelectorAll('.section--is-active').forEach(element => {
  //     element.classList.remove('section--is-active');
  //   });
  //   mainContent.children[nextPos].classList.add('section--is-active');
  //   mainContent.querySelectorAll('.section').forEach(element => {
  //     element.classList.remove('section--next', 'section--prev');
  //   });

  //   if ((curPos === lastItem && nextPos === 0) || (curPos === 0 && nextPos === lastItem)) {
  //     mainContent.querySelectorAll('.section').forEach(element => {
  //       element.classList.remove('section--next', 'section--prev');
  //     });
  //   } else if (curPos < nextPos) {
  //     mainContent.children[curPos].classList.add('section--next');
  //   } else {
  //     mainContent.children[curPos].classList.add('section--prev');
  //   }

  //   const headerCta = document.querySelector('.header--cta') as HTMLElement;
  //   if (nextPos !== 0 && nextPos !== lastItem) {
  //     headerCta.classList.add('is-active');
  //   } else {
  //     headerCta.classList.remove('is-active');
  //   }
  // }

  outerNav() {
    document.querySelector('.header--nav-toggle')?.addEventListener('click', () => {
      const perspective = document.querySelector('.perspective') as HTMLElement;
      perspective.classList.add('perspective--modalview') ;
      setTimeout(() => {
        perspective.classList.add('effect-rotate-left--animate');
      }, 25);
      document.querySelectorAll('.outer-nav, .outer-nav li, .outer-nav--return').forEach(element => {
        element.classList.add('is-vis');
      });
    });

    document.querySelectorAll('.outer-nav--return, .outer-nav li').forEach(element => {
      element.addEventListener('click', () => {
        const perspective = document.querySelector('.perspective') as HTMLElement;
        perspective.classList.remove('effect-rotate-left--animate');
        setTimeout(() => {
          perspective.classList.remove('perspective--modalview');
        }, 400);
        document.querySelectorAll('.outer-nav, .outer-nav li, .outer-nav--return').forEach(innerElement => {
          innerElement.classList.remove('is-vis');
        });
      });
    });
  }
  workSlider() {
    document.querySelectorAll('.slider--prev, .slider--next').forEach(element => {
      element.addEventListener('click', () => {
        const items = Array.from(document.querySelectorAll('.slider .slider--item'));
        const totalWorks = items.length;
  
        // Find the current positions
        const curLeftPos = items.findIndex(item => item.classList.contains('slider--item-left'));
        const curCenterPos = items.findIndex(item => item.classList.contains('slider--item-center'));
        const curRightPos = items.findIndex(item => item.classList.contains('slider--item-right'));
  
        // Get the slider container
        const slider = document.querySelector('.slider') as HTMLElement;
        if (slider) {
          slider.style.opacity = '0';
        }
  
        setTimeout(() => {
          // Reset all classes
          items.forEach(item => {
            item.classList.remove('slider--item-left', 'slider--item-center', 'slider--item-right');
          });
  
          if (element.classList.contains('slider--next')) {
            // Move forward
            const newLeftPos = (curLeftPos + 1) % totalWorks;
            const newCenterPos = (curCenterPos + 1) % totalWorks;
            const newRightPos = (curRightPos + 1) % totalWorks;
  
            items[newLeftPos].classList.add('slider--item-left');
            items[newCenterPos].classList.add('slider--item-center');
            items[newRightPos].classList.add('slider--item-right');
          } else {
            // Move backward
            const newLeftPos = (curLeftPos - 1 + totalWorks) % totalWorks;
            const newCenterPos = (curCenterPos - 1 + totalWorks) % totalWorks;
            const newRightPos = (curRightPos - 1 + totalWorks) % totalWorks;
  
            items[newLeftPos].classList.add('slider--item-left');
            items[newCenterPos].classList.add('slider--item-center');
            items[newRightPos].classList.add('slider--item-right');
          }
  
          if (slider) {
            slider.style.opacity = '1';
          }
        }, 400);
      });
    });
  }
  
  
  transitionLabels() {
    document.querySelectorAll('.work-request--information input').forEach(element => {
      element.addEventListener('focusout', () => {
        const inputElement = element as HTMLInputElement;
        if (inputElement.value === '') {
          element.classList.remove('has-value');
        } else {
          element.classList.add('has-value');
        }
        window.scrollTo(0, 0);
      });
    });
  }

  ngOnInit(): void {
    this.outerNav();
    this.workSlider();
    this.transitionLabels();
    this.setupMouseWheelListener();
    this.setupClickListener();
    this.setupSwipeListener();
    this.setupKeyListener();
  }

  setupMouseWheelListener() {
    document.addEventListener('mousewheel', (e) => this.handleMouseWheel(e));
    document.addEventListener('DOMMouseScroll', (e) => this.handleMouseWheel(e));
  }

  handleMouseWheel(e: any) {
const     outernav = document.querySelector('.outer-nav');
    if (!outernav?.classList.contains('is-vis')) {
      e.preventDefault();

      const delta = (e.wheelDelta) ? -e.wheelDelta : e.detail * 20;

      if (delta > 50 && this.canScroll) {
        this.canScroll = false;
        clearTimeout(this.scrollController);
        this.scrollController = setTimeout(() => {
          this.canScroll = true;
        }, 800);
        this.updateHelper(1);
      } else if (delta < -50 && this.canScroll) {
        this.canScroll = false;
        clearTimeout(this.scrollController);
        this.scrollController = setTimeout(() => {
          this.canScroll = true;
        }, 800);
        this.updateHelper(-1);
      }
    }
  }

  setupClickListener() {
    const sideNavItems = document.querySelectorAll('.side-nav li, .outer-nav li');
    sideNavItems.forEach(item => {
      item.addEventListener('click', () => this.handleClick(item));
    });

    document.querySelector('.cta')?.addEventListener('click', () => this.handleCtaClick());
  }

  handleClick(item: any) {
    if (!item.classList.contains('is-active')) {
      const curActive = item.parentNode.querySelector('.is-active');
      const curPos = Array.from(item.parentNode.children).indexOf(curActive);
      const nextPos = Array.from(item.parentNode.children).indexOf(item);
      const lastItem = item.parentNode.children.length - 1;
      this.updateNavs(nextPos);
      this.updateContent(curPos, nextPos, lastItem);
    }
  }

  handleCtaClick() {
    const curActive = document.querySelector('.side-nav .is-active');
    const sidenav = document.querySelector('.side-nav')
    if(sidenav && curActive){
    const curPos = Array.from(sidenav.children).indexOf(curActive);
    const lastItem = sidenav.children.length - 1;
    const nextPos = lastItem;
    this.updateNavs(lastItem);
    this.updateContent(curPos, nextPos, lastItem);}
  }

  setupSwipeListener() {
    const mc = new Hammer(this.viewport.nativeElement);
    mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    mc.on('swipeup swipedown', (e) => this.updateHelper(e));
  }

  setupKeyListener() {
    document.addEventListener('keyup', (e) => this.handleKeyUp(e));
  }

  handleKeyUp(e: any) {
    if (!document.querySelector('.outer-nav')?.classList.contains('is-vis')) {
      e.preventDefault();
      this.updateHelper(e);
    }
  }

  updateHelper(param: any) {
    const curActive = document.querySelector('.side-nav .is-active');
    const sidenav = document.querySelector('.side-nav');
    
    if (sidenav) {
      const sidenavChildren = Array.from(sidenav.children);
      const curPos = sidenavChildren.indexOf(curActive as HTMLElement);
      const lastItem = sidenavChildren.length - 1;
      let nextPos = 0;
    
      if (param.type === 'swipeup' || param.keyCode === 40 || param > 0) {
        if (curPos < lastItem) {
          nextPos = curPos + 1;
          this.updateNavs(nextPos);
          this.updateContent(curPos, nextPos, lastItem);
        }
      } else if (param.type === 'swipedown' || param.keyCode === 38 || param < 0) {
        if (curPos > 0) {
          nextPos = curPos - 1;
          this.updateNavs(nextPos);
          this.updateContent(curPos, nextPos, lastItem);
        }
      }
    }
    
     }

  updateNavs(nextPos: number) {
    document.querySelectorAll('.side-nav, .outer-nav').forEach(element => {
      const elementChildren = element.children;
      Array.from(elementChildren).forEach(child => {
        child.classList.remove('is-active');
      });
    });

    document.querySelector('.side-nav')?.children[nextPos].classList.add('is-active');
    document.querySelector('.outer-nav')?.children[nextPos].classList.add('is-active');
  }

  updateContent(curPos: number, nextPos: number, lastItem: number) {
    document.querySelectorAll('.main-content').forEach(content => {
     const contentChildren = content?.children;
     console.log(content?.children,"content")
      if (contentChildren) {
        console.log("ehllo")
        Array.from(contentChildren).forEach((child: any) => {
          child.classList.remove('section--is-active');
        });
      }
    });

    document.querySelector('.main-content')?.children[nextPos].classList.add('section--is-active');
    document.querySelectorAll('.main-content .section').forEach(section => {
      const sectionChildren = section?.children;
      if (sectionChildren) {
        Array.from(sectionChildren).forEach((child: any) => {
          child.classList.remove('section--next', 'section--prev');
        });
      }
    });

    if ((curPos === lastItem && nextPos === 0) || (curPos === 0 && nextPos === lastItem)) {
      document.querySelectorAll('.main-content .section').forEach(section => {
        const sectionChildren = section?.children;
        if (sectionChildren) {
          Array.from(sectionChildren).forEach((child: any) => {
            child.classList.remove('section--next', 'section--prev');
          });
        }
      });
    } else if (curPos < nextPos) {
      document.querySelector('.main-content')?.children[curPos].children[0].classList.add('section--next');
    } else {
      document.querySelector('.main-content')?.children[curPos].children[0].classList.add('section--prev');
    }

    if (nextPos !== 0 && nextPos !== lastItem) {
      document.querySelector('.header--cta')?.classList.add('is-active');
    } else {
      document.querySelector('.header--cta')?.classList.remove('is-active');
    }
  }
  
}
