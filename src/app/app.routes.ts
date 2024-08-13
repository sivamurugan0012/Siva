import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    // {    path: '', component: MainComponent },
{ path: 'blog', component: BlogComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: '', component: AboutComponent }

];

