import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommenderComponent } from './recommender/recommender.component';

const routes: Routes = [{path: "recommender", component: RecommenderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
