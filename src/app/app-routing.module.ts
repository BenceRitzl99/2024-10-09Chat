import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"Chat", component:ContentComponent},
  {path:"", component:LoginComponent},
  {path:"**", component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
