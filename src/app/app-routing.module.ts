import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ConceptionSimpleComponent } from './conception-simple/conception-simple.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: '', component: ConceptionSimpleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
