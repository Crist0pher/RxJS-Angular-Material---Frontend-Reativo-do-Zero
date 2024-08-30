import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MaterialModule } from './Material/Material.module';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DatepikerComponent } from './datepiker/datepiker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [							
    AppComponent,
      ButtonsIconsComponent,
      FormFieldInputComponent,
      ProgressSpinnerComponent,
      TabsComponent,
      DatepikerComponent,
      SnackbarComponent,
   ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
