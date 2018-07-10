import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule, MatTableModule,  MatTable,  MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';

import { AppComponent } from './app.component';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    HttpModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MaterialModule
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
