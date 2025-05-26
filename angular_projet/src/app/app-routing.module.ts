import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'
import { ConceptionSimpleComponent } from './conception-simple/conception-simple.component';
import { ConceptionDetailleeComponent } from './conception-detaillee/conception-detaillee.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';
import { RecommandationComponent } from './recommandation/recommandation.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'conception_simple', component: ConceptionSimpleComponent },
  { path: 'conception_detaillee', component: ConceptionDetailleeComponent },
  { path: 'nous_contacter', component: NousContacterComponent },
  { path: 'recommandation', component: RecommandationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
