import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearnRxjsComponent } from './components/learn-rxjs/learn-rxjs.component';
import { OperatorsComponent } from './components/operators/operators.component';


export const routes: Routes = [
  { path: '', component: LearnRxjsComponent },
  { path: 'operators', component: OperatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}