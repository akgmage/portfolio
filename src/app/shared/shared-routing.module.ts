import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { ResumeComponent } from '../resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // conditionally show three different components
    children: [
      { path: '', component: HomeComponent }, // show biography by default
      { path: 'about', component: AboutComponent },
      {
        path: 'resume',
        component: ResumeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
