import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { MisionComponent } from './mision/mision.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'mision', component: MisionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
