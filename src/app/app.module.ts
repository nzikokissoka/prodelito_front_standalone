import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
//import { PrincipalComponent } from "./principal/principal.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GrupoService } from "./services/grupo/grupo.service"; 

@NgModule({
    declarations: [],

    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ], 

    providers: [GrupoService],
    bootstrap: []
    
})

export class AppModule{

}
