import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Material/Material.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


import { AppComponent } from './app.component';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { DatepikerComponent } from './datepiker/datepiker.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SnackbarMsnComponent } from './snackbar/snackbar-msn/snackbar-msn.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { DialogModalComponent } from './dialog/dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [								
    AppComponent,
      ButtonsIconsComponent,
      FormFieldInputComponent,
      ProgressSpinnerComponent,
      TabsComponent,
      DatepikerComponent,
      SnackbarComponent,
      SnackbarMsnComponent,
      DialogComponent,
      DialogModalComponent,
   ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
