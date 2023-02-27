import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{
  path:'',
  loadChildren: () => import("./cakes/cakes.module").then(_ => _.CakesModule)
}]

// create for.routing and export //
 @NgModule({
  imports: [ 
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}