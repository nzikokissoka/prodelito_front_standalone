import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemaModuloCaminhoComponent } from './components/aplications/configuralito/sistema-modulo-caminho/sistema-modulo-caminho.component';
import { GrupoPrivilegioComponent } from './components/aplications/configuralito/grupo-privilegio/grupo-privilegio.component';

export const routes: Routes = [
    
    /*{path: ''  , redirectTo: 'login', pathMatch: 'full'}, 
    {path: 'login'          , component: LoginComponent},*/ 

    /*{path: ''  , redirectTo: 'dashboard-actividade-dia', pathMatch: 'full'},
    {path: 'dashboard-actividade-dia', component: DashboardActividadeDiaComponent}*/

    /*{path: ''  , redirectTo: 'grupo', pathMatch: 'full'},
    {path: 'grupo', component: GrupoComponent}

    {path: ''  , redirectTo: 'grupo-privilegio', pathMatch: 'full'},
    {path: 'grupo-privilegio', component: GrupoPrivilegioComponent}

    {path: ''  , redirectTo: 'sistema-modulo-caminho', pathMatch: 'full'},
    {path: 'sistema-modulo-caminho', component: SistemaModuloCaminhoComponent}*/

    {path: ''  , redirectTo: 'grupo-privilegio', pathMatch: 'full'},
    {path: 'grupo-privilegio', component: GrupoPrivilegioComponent}

    
    
];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)], // forRoot() configura as rotas principais da aplicação
    exports: [RouterModule] //Exporta o RouterModule para ser usado em toda a aplicação
})

export class AppRoutingModule { }
