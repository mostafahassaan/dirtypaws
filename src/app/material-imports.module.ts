import { NgModule }      from '@angular/core';
import {  
  MdCardModule,
  MdButtonModule,
  MdListModule,
  MdIconModule,
  MdToolbarModule
} from '@angular/material'

@NgModule({
  imports:      [
    MdCardModule, 
    MdButtonModule, 
    MdListModule, 
    MdIconModule, 
    MdToolbarModule
   ], 
   exports: [
    MdCardModule,
    MdButtonModule,
    MdListModule, 
    MdIconModule,
    MdToolbarModule
   ]
})
export class MaterialImportsModule { }
