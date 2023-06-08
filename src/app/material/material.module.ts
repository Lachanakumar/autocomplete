import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
const listOfMaterialModule = [
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    listOfMaterialModule
  ],
  exports: [
    listOfMaterialModule
  ]
})
export class MaterialModule { }
