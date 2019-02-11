import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SummaryComponent} from './component/summary/summary.component';
import {KeyManagementComponent} from './component/key-management/key-management.component';

const routes: Routes = [
  {path: '', redirectTo: 'summary', pathMatch: 'full'},
  {path: 'summary', component: SummaryComponent},
  {path: 'key', component: KeyManagementComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
