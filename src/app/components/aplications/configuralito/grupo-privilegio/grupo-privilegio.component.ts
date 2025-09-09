import { Component } from '@angular/core';
import { TituloAppComponent } from "../titulo-app/titulo-app.component";
import { BaseComponent } from '../../../init-interfaces/layouts/base/base.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SharedModule } from '../../../../shared.module';
import { catchError, forkJoin, Observable, tap, throwError } from 'rxjs';
import { Grupo } from '../../../../models/grupo';
import { GrupoPrivilegioService } from '../../../../services/grupo-privilegio/grupo-privilegio.service';
import { MenuService } from '../../../../services/menu/menu.service';
import { SistemaModuloCaminho } from '../../../../models/sistema-modulo-caminho';
import { GrupoPrivilegio } from '../../../../models/grupo-privilegio';
import { Menu } from '../../../../models/menu';

@Component({
  selector: 'app-grupo-privilegio',
  standalone: true,
  imports: [BaseComponent, HttpClientModule, SharedModule, TituloAppComponent],
  providers: [
    GrupoPrivilegioService, MenuService // Certifique-se de que o GrupoPrivilegioService está no array de providers
  ],
  templateUrl: './grupo-privilegio.component.html',
  styleUrl: './grupo-privilegio.component.css'
})
export class GrupoPrivilegioComponent {

  //variaveis 
  titulo_gp:string                = "PRIVILÉGIOS DE GRUPOS";
  titulo_privilegio:string        = "";
  listagem_grupo:boolean          = true;  
  listagem_sistema:boolean        = false;  
  listagem_item_sistema:boolean   = false;
  listagem_privilegio_item_sistema:boolean = false;

  formulario_item_sistema:boolean = false;
  formulario_privilegios:boolean  = false;
  novo_item_sistema:boolean       = true;
  seleciona_grupo:boolean         = false;    
  seleciona_sistema:boolean       = false;   
  seleciona_item_sistema:boolean  = false;
  cancelaNovoPrivilegio:boolean   = false;   
  cancelarTudo:boolean            = false;

  botaoNovoPrivilegio:boolean         = false; 
  botaoAlterarPrivilegio:boolean      = false; 
  botaoEliminarPrivilegio:boolean     = false;
  botaoCancelarNovoPrivilegio:boolean = false;   

  mostrarPrivilegios:boolean       = false;
  mostrarBotoesPrivilegios:boolean = false;

  mostraDialogConfirmaInsercao:boolean = false;


  //objecto grupo-privilegio
  grupoPrivilegioSelecionado!:GrupoPrivilegio;
  grupoPrivilegioInsert!:GrupoPrivilegio;
  grupoPrivilegio = new GrupoPrivilegio();

  //objecto grupo
  grupoSelecionado!:Grupo;
  grupo = new Grupo();

  //objecto sistema
  sistema = new SistemaModuloCaminho();
  sistemaItem = new SistemaModuloCaminho();
  sistemaSelecionado!:SistemaModuloCaminho;
  sistemaItemSelecionado!:SistemaModuloCaminho;
  sistemaItemComboBoxSelecionado = new SistemaModuloCaminho();

  itemSMCSelecionado = new SistemaModuloCaminho();
  sistemaModuloCaminhoPesquisado = new SistemaModuloCaminho();

  //listagem de grupo
  listaGrupos:Grupo[]         = [];   
  listaGruposFiltrada:Grupo[] = [];

  //listagem de sistemas
  listaSistemas:SistemaModuloCaminho[]             = [];
  listaItemSistemas:SistemaModuloCaminho[]         = [];      
  listaSistemasFiltrada:SistemaModuloCaminho[]     = [];
  listaItenSistemasFiltrada:SistemaModuloCaminho[] = [];

  listaItemSistemasPorGrupo:SistemaModuloCaminho[]         = []; 
  listaItemSistemasPorGrupoFiltrada:SistemaModuloCaminho[] = [];

  //listagem de privilegios de grupo
  listaGrupoPrivilegio:GrupoPrivilegio[]           = [];
  listaGrupoPrivilegioFiltrado:GrupoPrivilegio[]   = [];

  //constructor
  constructor(private grupoPrivilegioService:GrupoPrivilegioService, private menuService:MenuService) { }


  //init
  ngOnInit(){
    this.func_seleciona_todos_grupos();    
  }  

  //função para seleção todos
  func_seleciona_todos_grupos():void{
    
    this.grupoPrivilegioService.api_seleciona_todos_grupos().subscribe({

      next: (retorno_da_api: any[]) => {
        this.listaGrupos = retorno_da_api;
        this.listaGruposFiltrada = [...this.listaGrupos];
      }, 

      error: (erro) => {
        console.error('GrupoPrivilegio - Erro ao carregar grupos:', erro);
      }

    });
    
  }


  func_cancelar_tudo():void{

    this.titulo_privilegio       = "";
    
    this.listagem_grupo          = true;  
    this.listagem_sistema        = false;  
    this.listagem_item_sistema   = false;
    this.listagem_privilegio_item_sistema = false;

    this.formulario_item_sistema = false;
    this.formulario_privilegios  = false;
    this.novo_item_sistema       = true;
    this.seleciona_grupo         = false;    
    this.seleciona_sistema       = false;   
    this.seleciona_item_sistema  = false; 
    this.cancelaNovoPrivilegio   = false;   
    this.cancelarTudo            = false;

    this.mostrarPrivilegios       = false;
    this.mostrarBotoesPrivilegios = false;

    this.botaoNovoPrivilegio         = false; 
    this.botaoAlterarPrivilegio      = false; 
    this.botaoEliminarPrivilegio     = false;
    this.botaoCancelarNovoPrivilegio = false;

    this.mostraDialogConfirmaInsercao = false;

    //objecto grupo-privilegio  
    this.grupoPrivilegio = new GrupoPrivilegio();
    this.grupoPrivilegioSelecionado = this.grupoPrivilegio;

    //objecto grupo
    this.grupo = new Grupo();
    this.grupoSelecionado = this.grupo;
    
    //objecto sistema
    this.sistema = new SistemaModuloCaminho();
    this.sistemaItem = this.sistema;
    this.sistemaSelecionado = this.sistema;
    this.sistemaItemSelecionado = this.sistema;
    this.sistemaItemComboBoxSelecionado = this.sistema;

    this.sistemaModuloCaminhoPesquisado = new SistemaModuloCaminho();

    //listagem de grupo
    this.listaGrupos         = [];   
    this.listaGruposFiltrada = this.listaGrupos;

    //listagem de grupo
    this.listaSistemas = [];
    this.listaItemSistemas = [];      
    this.listaSistemasFiltrada = [];
    this.listaItenSistemasFiltrada = [];

    //listagem de privilegios de grupo
    this.listaGrupoPrivilegio          = [];
    this.listaGrupoPrivilegioFiltrado  = [];

    this.func_seleciona_todos_grupos();  

  }


  func_cancelar_de_retorno():void{

    this.titulo_privilegio       = "";
    
    this.listagem_grupo          = false;  
    this.listagem_sistema        = true;  
    this.listagem_item_sistema   = false;
    this.listagem_privilegio_item_sistema = false;

    this.sistemaItemComboBoxSelecionado = this.sistema;

    this.sistemaModuloCaminhoPesquisado = new SistemaModuloCaminho();

    this.func_cancela_novo_privilegio();

  }


  //função para seleção todos sistemas
  func_seleciona_todos_sistemas_ordenar_por_codigo(lenCodigo:number, codigoPai:string):void{

    this.grupoPrivilegioService.api_para_func_listar_todos_ordenar_por_codigo(lenCodigo, codigoPai).subscribe({

     next: (retorno_da_api: any[]) => {
        this.listaSistemas = retorno_da_api;
        this.listaSistemasFiltrada = [...this.listaSistemas]; 
      }, 

      error: (erro) => {
        console.error('GrupoPrivilegio - Erro ao carregar sistemas:', erro);
      }

    });

  }



  //seleção de sistemas
  func_seleciona_sistemas(grupoSelecionado:Grupo):void{

    this.grupo = grupoSelecionado;

    this.listagem_grupo          = false;  
    this.listagem_sistema        = true;  
    this.listagem_item_sistema   = false;
    this.listagem_privilegio_item_sistema = false;

    this.formulario_item_sistema = false;
    this.novo_item_sistema       = true;
    this.seleciona_grupo         = false;    
    this.seleciona_sistema       = false;   
    this.seleciona_item_sistema  = false; 
    this.cancelaNovoPrivilegio   = false;
    this.cancelarTudo            = true;

    this.func_seleciona_todos_sistemas_ordenar_por_codigo(3, 'ROOT');    

  }


  //função para seleção todos sistemas
  func_seleciona_todos_item_sistema(sistemas:SistemaModuloCaminho):void{

    this.sistema = sistemas;

    this.listagem_grupo          = false;  
    this.listagem_sistema        = false;  
    this.listagem_item_sistema   = true;
    this.listagem_privilegio_item_sistema = true;

    this.formulario_item_sistema = false;
    this.novo_item_sistema       = true;
    this.seleciona_grupo         = false;    
    this.seleciona_sistema       = false;   
    this.seleciona_item_sistema  = false; 
    this.cancelaNovoPrivilegio   = false;
    this.cancelarTudo            = true;

    //alimentação das listagens de itens de sistemas
    this.grupoPrivilegioService.api_para_func_listar_todos_ordenar_por_caminho_not_null(this.sistema.codigo).subscribe({

      next: (retorno_da_api: any[]) => {
        this.listaItemSistemas = retorno_da_api;
        this.listaItenSistemasFiltrada = [...this.listaItemSistemas]; 
      }, 

      error: (erro) => {
        console.error('GrupoPrivilegio - Erro ao carregar Ítens de Sistemas:', erro);
      }

    });  
    
    
    //pegar o registo de listaGrupoPrivilegio
    this.func_listar_grupo_privilegio_por_codigo_grupo(this.sistema.codigo, this.grupo.id).subscribe({

      next: (retorno_da_api: any[]) => {
        this.listaGrupoPrivilegio = retorno_da_api;
        this.listaGrupoPrivilegioFiltrado = [...this.listaGrupoPrivilegio];
      }, 

      error: (erro) => {
        console.error('listaGrupoPrivilegio - Erro ao carregar Itens:', erro);
      }

    });



    
  }


  //função para seleção todos sistemas
  func_seleciona_privilegios_item_sistema(sistemas:SistemaModuloCaminho):void{

  }


  func_novo_privilegio():void{
    
    let smc:SistemaModuloCaminho          = null;
    
    this.titulo_privilegio                = "Novo privilégio";
    this.novo_item_sistema                = false;
    this.cancelaNovoPrivilegio            = true;
    this.listagem_privilegio_item_sistema = false;
    this.formulario_privilegios           = true;

    this.grupoPrivilegio = new GrupoPrivilegio();
    this.grupoPrivilegioSelecionado = this.grupoPrivilegio;

    this.botaoNovoPrivilegio         = true; 
    this.botaoAlterarPrivilegio      = false; 
    this.botaoEliminarPrivilegio     = false;
    this.botaoCancelarNovoPrivilegio = true;

    //pegar o registo de SistemaModuloCaminho
    this.func_pegar_registo_sistema_modulo_caminho(this.sistema.id).subscribe({
           
      next: (sistemaModuloCaminho: SistemaModuloCaminho) => {

        this.grupoPrivilegioService.api_para_func_listar_itens_por_grupo_codigo(sistemaModuloCaminho.codigo, this.grupo.id).subscribe({

          next: (retorno_da_api: any[]) => {
            this.listaItemSistemasPorGrupo = retorno_da_api;
            this.listaItemSistemasPorGrupoFiltrada = [...this.listaItemSistemasPorGrupo];
          }, 
    
          error: (erro) => {
            console.error('SistemaModuloCaminho - Erro ao carregar Itens:', erro);
          }

        });        

      },
      
      error: (erro) => {
        console.log("SistemaModuloCaminho - Erro no carregamento do registo de SistemaModuloCaminho");
      }

    });


  }
  

  func_cancela_novo_privilegio():void{
    this.titulo_privilegio                = "";
    this.novo_item_sistema                = true;
    this.cancelaNovoPrivilegio            = false;
    this.listagem_privilegio_item_sistema = true;
    this.formulario_privilegios           = false;

    this.sistemaItemComboBoxSelecionado   = this.sistema;

    this.botaoNovoPrivilegio         = false; 
    this.botaoAlterarPrivilegio      = false; 
    this.botaoEliminarPrivilegio     = false;
    this.botaoCancelarNovoPrivilegio = false;

    this.mostrarPrivilegios         = false;
    this.mostrarBotoesPrivilegios   = false;
    this.grupoPrivilegio            = new GrupoPrivilegio(null, null, null, null, null, null, null, null, null, null, null, this.grupo.id, this.sistema.id);
    this.grupoPrivilegioSelecionado = this.grupoPrivilegio;

  }

  func_editar_privilegio(grupoPrivilegio:GrupoPrivilegio):void{
    this.titulo_privilegio                = "Alterar/Eliminar privilégios";
    this.novo_item_sistema                = false;
    this.cancelaNovoPrivilegio            = true;
    this.listagem_privilegio_item_sistema = false;
    this.formulario_privilegios           = true;
  }


  func_item_sistema_selecionado(event:any):void{

    if(this.grupoPrivilegio.sistema_modulo_caminho_id.toString() == 'none'){
      
      let sistemaModuloCaminhoId = this.grupoPrivilegio.sistema_modulo_caminho_id;
      let grupoId = this.grupo.id;

      this.mostrarPrivilegios       = false;
      this.mostrarBotoesPrivilegios = false;
      this.grupoPrivilegio = new GrupoPrivilegio(null, null, null, null, null, null, null, null, null, null, null, grupoId, sistemaModuloCaminhoId);
      //this.grupoPrivilegio = new GrupoPrivilegio(null, null, null, null, null, null, null, null, null, null, null, this.grupo.id, this.sistema.id);
      console.log("sistemaItemComboBoxSelecionado none = "+this.grupoPrivilegio.sistema_modulo_caminho_id);

    } else {

      this.mostrarPrivilegios       = true;
      this.mostrarBotoesPrivilegios = false;
      console.log("sistemaItemComboBoxSelecionado not none = "+this.grupoPrivilegio.sistema_modulo_caminho_id);

      let grupoId                  = this.grupo.id;
      let codigo                   = this.sistema.codigo;
      
      console.log("grupoId = "+grupoId);
      console.log("codigo  = "+codigo);
      
      
      /*let sistemaModuloCaminhoId   = this.grupoPrivilegio.sistema_modulo_caminho_id;
      let grupoId                  = this.grupo.id;
      let smcPesq:SistemaModuloCaminho | null = null;

      console.log("sistemaModuloCaminhoId = "+sistemaModuloCaminhoId);
      console.log("grupoId = "+grupoId)
      console.log("sistema = "+this.sistema.id+", "+this.sistema.codigo+", "+this.sistema.codigoPai)
      

      //pegar o objecto sistemaModuloCaminho
      this.func_pegar_um_objecto_smc(this.grupoPrivilegio.sistema_modulo_caminho_id, this.grupo.id).subscribe({

        next: (retorno_da_api: SistemaModuloCaminho) => {
          smcPesq = retorno_da_api;          
        }, 
  
        error: (erro) => {
          console.error('sistemaModuloCaminhoPesq - Erro na pesquisa', erro);
        }

      });

      this.grupoPrivilegio = new GrupoPrivilegio(null, smcPesq.codigo, smcPesq.codigoPai, null, null, null, null, null, null, null, null, grupoId, sistemaModuloCaminhoId);

      this.mostrarPrivilegios       = true;
      this.mostrarBotoesPrivilegios = false;
      console.log("sistemaItemComboBoxSelecionado not none = "+this.grupoPrivilegio.sistema_modulo_caminho_id);*/

    }

  }
  

  func_verifica_grupo_privilegio(event:any):boolean{

    let resultado = false;

    /*console.log("this.grupoPrivilegio.novo      = "+this.grupoPrivilegio.novo);
    console.log("this.grupoPrivilegio.copiar    = "+this.grupoPrivilegio.copiar);
    console.log("this.grupoPrivilegio.pesquisar = "+this.grupoPrivilegio.pesquisar);
    console.log("this.grupoPrivilegio.salvar    = "+this.grupoPrivilegio.salvar);
    console.log("this.grupoPrivilegio.editar    = "+this.grupoPrivilegio.editar);
    console.log("this.grupoPrivilegio.deletar   = "+this.grupoPrivilegio.deletar);*/

    if(this.grupoPrivilegio.novo   == 1 || this.grupoPrivilegio.copiar == 1 || this.grupoPrivilegio.pesquisar == 1 ||
       this.grupoPrivilegio.salvar == 1 || this.grupoPrivilegio.editar == 1 || this.grupoPrivilegio.deletar == 1){

       resultado = true;                 

    } else resultado = false;

    if(resultado == false){
      console.log('Resultado False = '+resultado)
    } else {
      console.log('Resultado True = '+resultado)
    }

    return resultado;

  }


  func_pega_todos_grupos_privilegios(menu:any):void{

    //pegar o registo de listaGrupoPrivilegio
    this.func_listar_grupo_privilegio_por_codigo_grupo(menu.codigo, menu.grupo_id).subscribe({

      next: (retorno_da_api: any[]) => {
        this.listaGrupoPrivilegio = retorno_da_api;
        this.listaGrupoPrivilegioFiltrado = [...this.listaGrupoPrivilegio];
      }, 

      error: (erro) => {
        console.error('listaGrupoPrivilegio - Erro ao carregar Itens:', erro);
      }

    });

  }



  //funções que retornam Observable
  func_pegar_registo_sistema_modulo_caminho(id: number): Observable<SistemaModuloCaminho> {    
   return this.grupoPrivilegioService.api_para_func_pegar_registo_sistema_modulo_caminho(id);
  }

  func_pegar_um_objecto_smc(smcID:number, grupoID:number): Observable<SistemaModuloCaminho> {
    return this.grupoPrivilegioService.api_para_func_pegar_objecto_smc(smcID, grupoID);
  }

  func_listar_grupo_privilegio_por_codigo_grupo(codigo:string, grupoID:number): Observable<GrupoPrivilegio[]> {
    return this.grupoPrivilegioService.api_para_func_listar_grupo_privilegio_por_codigo_grupo(codigo, grupoID);
  }



  //funções de uso do Observable
  func_usa_observable_pega_sistema_modulo_caminho(id:number):void{

    this.func_pegar_registo_sistema_modulo_caminho(id).subscribe({

      next: (retorno_da_api) => {
        this.sistemaModuloCaminhoPesquisado = retorno_da_api;          
      }, 

      error: (erro) => {
        console.error('func_usa_observable_pega_sistema_modulo_caminho - Erro na pesquisa do registro SistemaModuloCaminho', erro);
      }      

    });        

  }



  async func_usa_observable_pega_sistema_modulo_caminho2(id:number){

    try {

      this.sistemaModuloCaminhoPesquisado = await this.grupoPrivilegioService
      .api_para_func_pegar_registo_sistema_modulo_caminho(this.grupoPrivilegio.sistema_modulo_caminho_id)
      .toPromise();

      if (!this.sistemaModuloCaminhoPesquisado) {
        console.log("sistemaModuloCaminhoPesquisado2222 = NULOOOOO");
      } else {
        console.log("sistemaModuloCaminhoPesquisado.codigo2222 = " + this.sistemaModuloCaminhoPesquisado.codigo);
      }
      
    } catch (error) {

      console.error('Erro na pesquisa:', error);
      
    }

  }









  // função inserir
  func_inserir():void{

    //console.log("this.grupoPrivilegio.novo_i      = "+this.grupoPrivilegio.novo);
    let copiar = this.grupoPrivilegio.copiar;
    /*console.log("this.grupoPrivilegio.copiar_no_insert    = "+this.grupoPrivilegio.copiar);
    console.log("this.grupoPrivilegio.pesquisar_no_insert = "+this.grupoPrivilegio.pesquisar);
    console.log("this.grupoPrivilegio.salvar_no_insert    = "+this.grupoPrivilegio.salvar);
    console.log("this.grupoPrivilegio.editar_no_insert    = "+this.grupoPrivilegio.editar);
    console.log("this.grupoPrivilegio.deletar_no_insert   = "+this.grupoPrivilegio.deletar);*/

    if(!this.grupoPrivilegio){
      console.log("this.grupoPrivilegio = nulooooo");
    } else {
      console.log("Copiar = "+this.grupoPrivilegio.copiar);
    console.log("Pesquisar =  "+this.grupoPrivilegio.pesquisar);
    console.log("Salvar = "+this.grupoPrivilegio.salvar);
    console.log("Editar= "+this.grupoPrivilegio.editar);
    console.log("Deletar = "+this.grupoPrivilegio.deletar);

    }

    


    //cria objecto SistemaModuloCaminho
    this.grupoPrivilegioService.api_para_func_pegar_registo_sistema_modulo_caminho(this.grupoPrivilegio.sistema_modulo_caminho_id).subscribe({

      next: (retorno_da_api) => {
        
        //criação do objecto grupoPrivilegioInsert
        this.grupoPrivilegioInsert = new GrupoPrivilegio(null, 
          retorno_da_api.codigo,
          retorno_da_api.codigoPai, 
          copiar,
          this.grupoPrivilegio.deletar,
          this.grupoPrivilegio.editar, 
          this.grupoPrivilegio.novo, 
          this.grupoPrivilegio.pesquisar, 
          this.grupoPrivilegio.salvar, 
          this.grupoPrivilegio.tempo_ativado, 
          this.grupoPrivilegio.visibilidade, 
          this.grupoPrivilegio.grupo_id, 
          this.grupoPrivilegio.sistema_modulo_caminho_id
        );

        console.log("this.this.grupoPrivilegioInsert.id_i2   = "+this.grupoPrivilegioInsert.id);
            console.log("this.this.grupoPrivilegioInsert.codigo_i2   = "+this.grupoPrivilegioInsert.codigo);
            console.log("this.this.grupoPrivilegioInsert.codigo_pai_i2   = "+this.grupoPrivilegioInsert.codigo_pai);
            console.log("this.this.grupoPrivilegioInsert.copiar_i   = "+this.grupoPrivilegioInsert.copiar);
            console.log("this.this.grupoPrivilegioInsert.pesquisar_i = "+this.grupoPrivilegioInsert.pesquisar);
            console.log("this.this.grupoPrivilegioInsert.salvar_i    = "+this.grupoPrivilegioInsert.salvar);
            console.log("this.this.grupoPrivilegioInsert.editar_i    = "+this.grupoPrivilegioInsert.editar);
            console.log("this.this.grupoPrivilegioInsert.deletar_i   = "+this.grupoPrivilegioInsert.deletar);
            console.log("this.this.grupoPrivilegioInsert.grupo_id_i2   = "+this.grupoPrivilegioInsert.grupo_id);
            console.log("this.this.grupoPrivilegioInsert.smc_i2   = "+this.grupoPrivilegioInsert.sistema_modulo_caminho_id);

        //inserir grupoPrivilegioInsert na base de dados
        this.grupoPrivilegioService.api_para_func_inserir(this.grupoPrivilegioInsert).subscribe({

          next:(retorno_da_api) => {

            /*console.log("this.retorno_da_api.id_i2   = "+retorno_da_api.id);
            console.log("this.retorno_da_api.codigo_i2   = "+retorno_da_api.codigo);
            console.log("this.retorno_da_api.codigo_pai_i2   = "+retorno_da_api.codigo_pai);
            console.log("this.retorno_da_api.copiar_i   = "+retorno_da_api.copiar);
            console.log("this.retorno_da_api.pesquisar_i = "+retorno_da_api.pesquisar);
            console.log("this.retorno_da_api.salvar_i    = "+retorno_da_api.salvar);
            console.log("this.retorno_da_api.editar_i    = "+retorno_da_api.editar);
            console.log("this.retorno_da_api.deletar_i   = "+retorno_da_api.deletar);
            console.log("this.retorno_da_api.grupo_id_i2   = "+retorno_da_api.grupo_id);
            console.log("this.retorno_da_api.smc_i2   = "+retorno_da_api.sistema_modulo_caminho_id);*/

            
            
          },
          error: (erro) => {
            console.error('func_inserir - grupoPrivilegio - Erro na inserção', erro);
          } 

        });
        
        
        
        //isnserir na base dados grupoPrivilegioInsert
        


        /*
        //pegar o registo de listaGrupoPrivilegio
        this.func_listar_grupo_privilegio_por_codigo_grupo(grupoPrivilegioInsert.codigo, grupoPrivilegioInsert.grupo_id).subscribe({

          next: (retorno_da_api: any[]) => {
            this.listaGrupoPrivilegio = retorno_da_api;
            this.listaGrupoPrivilegioFiltrado = [...this.listaGrupoPrivilegio];
          }, 

          error: (erro) => {
            console.error('listaGrupoPrivilegio - Erro ao carregar Itens:', erro);
          }

        });*/


      }, 

      error: (erro) => {
        console.error('func_usa_observable_pega_sistema_modulo_caminho - Erro na pesquisa do registro SistemaModuloCaminho', erro);
      }

    });

    



    

    
    
    
    //console.log("this.itemSMCSelecionado.codigo  = "+this.itemSMCSelecionado.codigo);
    
    /*
    //verificar nulidade do objecto grupoPrivilegio
    if(!this.grupoPrivilegio){

      console.error('GrupoPrivilegio - func_inserir(): Dados do grupo inválidos');

    } else {

      this.grupoPrivilegioService.api_para_func_inserir(this.grupoPrivilegio).subscribe({

        next: (retorno_api: GrupoPrivilegio) => {

          // Atualiza as listas de forma imutável
          this.func_listar_grupo_privilegio_por_codigo_grupo(this.sistema.codigo, this.grupo.id).subscribe({

            next: (retorno_da_api: any[]) => {
              this.listaGrupoPrivilegio = retorno_da_api;
              this.listaGrupoPrivilegioFiltrado = [...this.listaGrupoPrivilegio];
            },       
            error: (erro) => {
              console.error('listaGrupoPrivilegio - Erro ao carregar Itens:', erro);
            }
      
          });

        },

        error: (erro: HttpErrorResponse) => {
          
        }


      });

    }*/

  }





}
