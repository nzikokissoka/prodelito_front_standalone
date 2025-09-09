import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';

//Modulos com importações de modulos que poderão ser compartilhados com outros módulos do sistema
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, 
    ButtonModule, 
        InputTextModule, 
        InputTextareaModule,
        InputMaskModule,
        PasswordModule,
        RadioButtonModule,
        DividerModule, FieldsetModule, PanelModule, TabViewModule,
        ToolbarModule, ConfirmDialogModule, DialogModule, DynamicDialogModule,
        SidebarModule, FileUploadModule, MenubarModule, PanelMenuModule, 
        TieredMenuModule, InputNumberModule, TableModule, AutoFocusModule,
        CalendarModule, CheckboxModule, DropdownModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, HttpClientModule, 
    ButtonModule, 
    InputTextModule, 
    InputTextareaModule,
    InputMaskModule,
    PasswordModule,
    RadioButtonModule,
    DividerModule, FieldsetModule, PanelModule, TabViewModule,
    ToolbarModule, ConfirmDialogModule, DialogModule, DynamicDialogModule,
    SidebarModule, FileUploadModule, MenubarModule, PanelMenuModule, 
    TieredMenuModule, InputNumberModule, TableModule, AutoFocusModule,
    CalendarModule, CheckboxModule, DropdownModule] // Permite reutilização
})
export class SharedModule { }
