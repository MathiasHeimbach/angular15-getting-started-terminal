import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { EntityDefinitionService } from '@ngrx/data';
import { cakesEntityMetaData } from './store/cakes-entity-metadata';

import { CakesRoutingModule } from './cakes-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  {   path: '',   component: HomeComponent   }
];

@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CakesRoutingModule
  ]
})
export class CakesModule {
  constructor(entityDefinitionService: EntityDefinitionService) {
    entityDefinitionService.registerMetadataMap(cakesEntityMetaData);
  }
 }
