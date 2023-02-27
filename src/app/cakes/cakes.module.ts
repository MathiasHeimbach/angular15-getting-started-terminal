import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EntityDefinitionService } from '@ngrx/data';
import { cakesEntityMetaData } from './store/cakes-entity-metadata';

import { CakesRoutingModule } from './cakes-routing.module';


const routes: Routes = [
  {   path: '',   component: HomeComponent   }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CakesRoutingModule
  ]
})
export class CakesModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(cakesEntityMetaData);
  }
 }
