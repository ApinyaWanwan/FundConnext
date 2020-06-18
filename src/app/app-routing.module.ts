import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchClientComponent } from './search-client/search-client.component';
import { InvesterDetailComponent } from './invester-detail/invester-detail.component';

const routes: Routes = [
  { path: '', component: SearchClientComponent },
  { path: 'invester-detail/:clientId', component: InvesterDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
