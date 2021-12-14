import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommenderComponent } from './recommender/recommender.component';
import { FinancialComponent } from './financial/financial.component';

const routes: Routes = [{path: "recommender", component: RecommenderComponent}, {path: "financial", component: FinancialComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
