import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../init-interfaces/layouts/base/base.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../../shared.module';
import { TituloAppComponent } from "../titulo-app/titulo-app.component";
import { forkJoin, Observable } from 'rxjs';
import { SistemaModuloCaminho } from '../../../../models/sistema-modulo-caminho';
import { SistemaModuloCaminhoService } from '../../../../services/sistemaModuloCaminho/sistema-modulo-caminho.service';

@Component({
  selector: 'app-sistema-modulo-caminho',
  standalone: true,
  imports: [BaseComponent, HttpClientModule, SharedModule, TituloAppComponent],
  providers: [
      SistemaModuloCaminhoService // Certifique-se de que o SistemaModuloCaminhoService está no array de providers
  ],
  templateUrl: './sistema-modulo-caminho.component.html',
  styleUrl: './sistema-modulo-caminho.component.css'
})
export class SistemaModuloCaminhoComponent implements OnInit{

  //variaveis
  listagem3:boolean  = true;
  listagem6:boolean  = false;
  listagem9:boolean  = false;
  listagem12:boolean = false;
  listagem15:boolean = false;
  listagem18:boolean = false;
  listagem21:boolean = false;

  formulario3:boolean  = false;
  formulario6:boolean  = false;
  formulario9:boolean  = false;
  formulario12:boolean = false;
  formulario15:boolean = false;
  formulario18:boolean = false;
  formulario21:boolean = false;

  novoBT3:boolean          = true;
  novoBT6:boolean          = false;
  novoBT9:boolean          = false;
  novoBT12:boolean         = false;
  novoBT15:boolean         = false;
  novoBT18:boolean         = false;
  novoBT21:boolean         = false;

  cancelarNovoBT3:boolean  = false;
  cancelarNovoBT6:boolean  = false;
  cancelarNovoBT9:boolean  = false;
  cancelarNovoBT12:boolean = false;
  cancelarNovoBT15:boolean = false;
  cancelarNovoBT18:boolean = false;
  cancelarNovoBT21:boolean = false;

  editarRG3:boolean        = false; 
  editarRG6:boolean        = false;
  editarRG9:boolean        = false;
  editarRG12:boolean       = false;
  editarRG15:boolean       = false;
  editarRG18:boolean       = false;
  editarRG21:boolean       = false;

  selecionaRG3:boolean     = false; 
  selecionaRG6:boolean     = false;
  selecionaRG9:boolean     = false;
  selecionaRG12:boolean    = false;
  selecionaRG15:boolean    = false;
  selecionaRG18:boolean    = false;
  selecionaRG21:boolean    = false;

  inserirBT3:boolean       = true;
  inserirBT6:boolean       = false;
  inserirBT9:boolean       = false;
  inserirBT12:boolean      = false;
  inserirBT15:boolean      = false;
  inserirBT18:boolean      = false;
  inserirBT21:boolean      = false;

  alterarBT3:boolean       = false;
  alterarBT6:boolean       = false;
  alterarBT9:boolean       = false;
  alterarBT12:boolean      = false;
  alterarBT15:boolean      = false;
  alterarBT18:boolean      = false;
  alterarBT21:boolean      = false;

  eliminarBT3:boolean      = false;
  eliminarBT6:boolean      = false;
  eliminarBT9:boolean      = false;
  eliminarBT12:boolean     = false;
  eliminarBT15:boolean     = false;
  eliminarBT18:boolean     = false;
  eliminarBT21:boolean     = false;

  mostraDialogConfirmaInsercao3:boolean  = false;
  mostraDialogConfirmaInsercao6:boolean  = false;
  mostraDialogConfirmaInsercao9:boolean  = false;
  mostraDialogConfirmaInsercao12:boolean = false;
  mostraDialogConfirmaInsercao15:boolean = false;
  mostraDialogConfirmaInsercao18:boolean = false;
  mostraDialogConfirmaInsercao21:boolean = false;

  mostraDialogConfirmaAlteracao3:boolean  = false;
  mostraDialogConfirmaAlteracao6:boolean  = false;
  mostraDialogConfirmaAlteracao9:boolean  = false;
  mostraDialogConfirmaAlteracao12:boolean = false;
  mostraDialogConfirmaAlteracao15:boolean = false;
  mostraDialogConfirmaAlteracao18:boolean = false;
  mostraDialogConfirmaAlteracao21:boolean = false;

  mostraDialogConfirmaEliminacao3:boolean  = false; 
  mostraDialogConfirmaEliminacao6:boolean  = false;
  mostraDialogConfirmaEliminacao9:boolean  = false;
  mostraDialogConfirmaEliminacao12:boolean = false;
  mostraDialogConfirmaEliminacao15:boolean = false;
  mostraDialogConfirmaEliminacao18:boolean = false;
  mostraDialogConfirmaEliminacao21:boolean = false; 

  mostraDialogImpossibilidadeEliminacao3:boolean  = false; 
  mostraDialogImpossibilidadeEliminacao6:boolean  = false;
  mostraDialogImpossibilidadeEliminacao9:boolean  = false;
  mostraDialogImpossibilidadeEliminacao12:boolean = false;
  mostraDialogImpossibilidadeEliminacao15:boolean = false;
  mostraDialogImpossibilidadeEliminacao18:boolean = false;
  mostraDialogImpossibilidadeEliminacao21:boolean = false;

  verificaOpcao3:boolean   = false;
  verificaOpcao6:boolean   = false;
  verificaOpcao9:boolean   = false;
  verificaOpcao12:boolean   = false;
  verificaOpcao15:boolean   = false;
  verificaOpcao18:boolean   = false;
  verificaOpcao21:boolean   = false;

  opcaoEditar3:boolean   = false;
  opcaoEditar6:boolean   = false;
  opcaoEditar9:boolean   = false;
  opcaoEditar12:boolean   = false;
  opcaoEditar15:boolean   = false;
  opcaoEditar18:boolean   = false;
  opcaoEditar21:boolean   = false;

  opcaoAtribuirLink3:boolean   = false;
  opcaoAtribuirLink6:boolean   = false;
  opcaoAtribuirLink9:boolean   = false;
  opcaoAtribuirLink12:boolean   = false;
  opcaoAtribuirLink15:boolean   = false;
  opcaoAtribuirLink18:boolean   = false;
  opcaoAtribuirLink1:boolean   = false;

  mostraDialogAlterar3:boolean             = false;
  mostraDialogAlterar6:boolean             = false;
  mostraDialogAlterar9:boolean             = false;
  mostraDialogAlterar12:boolean            = false;
  mostraDialogAlterar15:boolean            = false;
  mostraDialogAlterar18:boolean            = false;
  mostraDialogAlterar21:boolean            = false;

  mostraDialogEliminar3:boolean            = false;
  mostraDialogEliminar6:boolean            = false;
  mostraDialogEliminar9:boolean            = false;
  mostraDialogEliminar12:boolean           = false;
  mostraDialogEliminar15:boolean           = false;
  mostraDialogEliminar18:boolean           = false;
  mostraDialogEliminar21:boolean           = false;

  titulo_smc:string                        = "SISTEMA, MÓDULO E CAMINHOS";
  titulo_smc3:string                       = "";

  titulo_smc6:string                       = "";
  titulo_smc6_novo_editar:string           = "";

  titulo_smc9:string                       = "";
  titulo_smc9_novo_editar:string           = "";

  titulo_smc12:string                      = "";
  titulo_smc12_novo_editar:string          = "";

  titulo_smc15:string                      = "";
  titulo_smc15_novo_editar:string          = "";

  titulo_smc18:string                      = "";
  titulo_smc18_novo_editar:string          = "";

  titulo_smc21:string                      = "";
  titulo_smc21_novo_editar:string          = "";

  mensagemImpossibilidadeEliminacao:string = "";

  bloqueio_link_opcao_selecionada:string   = null;     


  //objecto grupo
  sistemaModuloCaminhoSelecionado3! :SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado6! :SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado9! :SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado12!:SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado15!:SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado18!:SistemaModuloCaminho;
  sistemaModuloCaminhoSelecionado21!:SistemaModuloCaminho;

  sistemaModuloCaminho3  = new SistemaModuloCaminho();
  sistemaModuloCaminho6  = new SistemaModuloCaminho();
  sistemaModuloCaminho9  = new SistemaModuloCaminho();
  sistemaModuloCaminho12 = new SistemaModuloCaminho();
  sistemaModuloCaminho15 = new SistemaModuloCaminho();
  sistemaModuloCaminho18 = new SistemaModuloCaminho();
  sistemaModuloCaminho21 = new SistemaModuloCaminho();

  //listagem de sistemaModuloCaminho
  //sistemas, modulos, caminho refere-se à smc
  lista_de_smc3:SistemaModuloCaminho[]           = [];
  lista_de_smc_filtrada3:SistemaModuloCaminho[]  = [];

  lista_de_smc6:SistemaModuloCaminho[]           = [];
  lista_de_smc_filtrada6:SistemaModuloCaminho[]  = [];

  lista_de_smc9:SistemaModuloCaminho[]           = [];
  lista_de_smc_filtrada9:SistemaModuloCaminho[]  = [];

  lista_de_smc12:SistemaModuloCaminho[]          = [];
  lista_de_smc_filtrada12:SistemaModuloCaminho[] = [];

  lista_de_smc15:SistemaModuloCaminho[]          = [];
  lista_de_smc_filtrada15:SistemaModuloCaminho[] = [];

  lista_de_smc18:SistemaModuloCaminho[]          = [];
  lista_de_smc_filtrada18:SistemaModuloCaminho[] = [];

  lista_de_smc21:SistemaModuloCaminho[]          = [];
  lista_de_smc_filtrada21:SistemaModuloCaminho[] = [];

  botaoDesabilitado: boolean = true;

  //constructor
  //smcService = sistemaModuloCaminhoService
  constructor(private smcService:SistemaModuloCaminhoService) { 
    
  }
  
  
  //init
  ngOnInit(){
    console.log("-- Entrou no SistemaModuloCaminhoComponent --");
    this.func_seleciona_todos3(3, 'ROOT');    
  }  

  // configuração do formGroup
  formGroup = new FormGroup({
    abreviada: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    descricao: new FormControl(null, [Validators.required, Validators.minLength(3)])
  });

  //funções executoras
  // função inserir
  func_inserir3():void{
    this.smcService.api_inserir3(this.sistemaModuloCaminho3).subscribe(retorno_api =>{
      this.lista_de_smc3.push(retorno_api);      
      this.func_cancelar_novo_registro3();      
    });
  }

  logValue() {
    console.log("bloqueioLink = "+this.sistemaModuloCaminho6.bloqueioLink);
  }

  func_inserir6():void{
    this.smcService.api_inserir6(this.sistemaModuloCaminho6).subscribe(retorno_api =>{
      this.lista_de_smc6.push(retorno_api);      
      /*this.func_cancelar_novo_registro6();*/      
    });
  }



  //função para seleção todos
  func_seleciona_todos3(lenCodigo:number, codigoPai:string):void{
    this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
    subscribe(retorno_da_api => this.lista_de_smc3 = retorno_da_api);

    //atribuir lista_de_smc3 em lista_de_smc_filtrada3
    this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
  }


  func_seleciona_todos(lenCodigo:number, codigoPai:string):void{
    
    if(lenCodigo == 3){
      
      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc3 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];

    } else if(lenCodigo == 6){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc6 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    } else if(lenCodigo == 9){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc9 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    } else if(lenCodigo == 12){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc12 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    } else if(lenCodigo == 15){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc15 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    } else if(lenCodigo == 18){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc18 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    } else if(lenCodigo == 21){

      this.smcService.api_seleciona_todos3_ordenar_por_id_desc(lenCodigo, codigoPai).
      subscribe(retorno_da_api => this.lista_de_smc21 = retorno_da_api);
      this.lista_de_smc_filtrada3 = [...this.lista_de_smc3];
      
    }


  }




  // função que verifica botão inserir
  func_verifica_botao_inserir_disabled_padrao(sistemaModuloCaminho:SistemaModuloCaminho):boolean{

    let resultado = true;
    let codigoPai = sistemaModuloCaminho.codigoPai;
    let tamanhoCodigoPai = sistemaModuloCaminho.codigoPai.length;
   
    //verificar tamanho do codigo
    //para len = 3
    if(codigoPai == "ROOT"){ 

      if(this.sistemaModuloCaminho3.abreviada != null && this.sistemaModuloCaminho3.abreviada != '' && this.sistemaModuloCaminho3.abreviada.length >= 3 && 
         this.sistemaModuloCaminho3.descricao != null && this.sistemaModuloCaminho3.descricao != '' && this.sistemaModuloCaminho3.descricao.length >= 3){
        resultado = false;
      }

    } else if(codigoPai != "ROOT"){ 

      //para len = 6
      if(tamanhoCodigoPai == 3){

        if(this.sistemaModuloCaminho6.descricao != null && this.sistemaModuloCaminho6.descricao != '' && this.sistemaModuloCaminho6.descricao.length >= 3 && 
           this.sistemaModuloCaminho6.icone     != null && this.sistemaModuloCaminho6.icone     != '' && this.sistemaModuloCaminho6.icone.length >= 3){
          resultado = false;
        }      
      
      //para len = 9
      } else if(tamanhoCodigoPai == 6){

        if(this.sistemaModuloCaminho9.descricao != null && this.sistemaModuloCaminho9.descricao != '' && this.sistemaModuloCaminho9.descricao.length >= 3 && 
           this.sistemaModuloCaminho9.icone     != null && this.sistemaModuloCaminho9.icone     != '' && this.sistemaModuloCaminho9.icone.length >= 3){
          resultado = false; 
        }

      //para len = 12
      } else if(tamanhoCodigoPai == 9){

        if(this.sistemaModuloCaminho12.descricao != null && this.sistemaModuloCaminho12.descricao != '' && this.sistemaModuloCaminho12.descricao.length >= 3 && 
           this.sistemaModuloCaminho12.icone     != null && this.sistemaModuloCaminho12.icone     != '' && this.sistemaModuloCaminho12.icone.length >= 3){
          resultado = false;
        }

      //para len = 15
      } else if(tamanhoCodigoPai == 12){

        if(this.sistemaModuloCaminho15.descricao != null && this.sistemaModuloCaminho15.descricao != '' && this.sistemaModuloCaminho15.descricao.length >= 3 && 
           this.sistemaModuloCaminho15.icone     != null && this.sistemaModuloCaminho15.icone     != '' && this.sistemaModuloCaminho15.icone.length >= 3){
          resultado = false;
        }

      //para len = 18
      } else if(tamanhoCodigoPai == 15){

        if(this.sistemaModuloCaminho18.descricao != null && this.sistemaModuloCaminho18.descricao != '' && this.sistemaModuloCaminho18.descricao.length >= 3 && 
           this.sistemaModuloCaminho18.icone     != null && this.sistemaModuloCaminho18.icone     != '' && this.sistemaModuloCaminho18.icone.length >= 3){
          resultado = false;
        }

      //para len = 21
      } else if(tamanhoCodigoPai == 18){

        if(this.sistemaModuloCaminho21.descricao != null && this.sistemaModuloCaminho21.descricao != '' && this.sistemaModuloCaminho21.descricao.length >= 3 && 
           this.sistemaModuloCaminho21.icone     != null && this.sistemaModuloCaminho21.icone     != '' && this.sistemaModuloCaminho21.icone.length >= 3){
          resultado = false;
        }

      }

    }

    return resultado;

  }



  func_verifica_botao_inserir_disabled_padrao2(sistemaModuloCaminho:SistemaModuloCaminho):boolean{       
    
    let resultado = true;

    if(sistemaModuloCaminho.descricao != null && sistemaModuloCaminho.descricao != '' && sistemaModuloCaminho.descricao.length >= 3 && 
       sistemaModuloCaminho.icone     != null && sistemaModuloCaminho.icone     != '' && sistemaModuloCaminho.icone.length >= 3){
      resultado = false;
    }

    return resultado;

  }



  func_verifica_botao_inserir_disabled():boolean{       
    let resultado = true;

    if(this.sistemaModuloCaminho3.abreviada != null && this.sistemaModuloCaminho3.abreviada != '' && this.sistemaModuloCaminho3.abreviada.length >= 3 && 
       this.sistemaModuloCaminho3.descricao != null && this.sistemaModuloCaminho3.descricao != '' && this.sistemaModuloCaminho3.descricao.length >= 3){
      resultado = false;
    }
    return resultado;
  }


  func_verifica_botao_inserir_disabled6():boolean{       
    let resultado = true;

    if(this.sistemaModuloCaminho6.descricao != null && this.sistemaModuloCaminho6.descricao != '' && this.sistemaModuloCaminho6.descricao.length >= 3 && 
       this.sistemaModuloCaminho6.icone     != null && this.sistemaModuloCaminho6.icone     != '' && this.sistemaModuloCaminho6.icone.length >= 3){
      resultado = false;
    }
    return resultado;
  }


  





  func_atribuir_registo_por_objecto3(sistemaModuloCaminhoSelecionado3:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho3 = sistemaModuloCaminhoSelecionado3;
  }

  func_atribuir_registo_por_objecto6(sistemaModuloCaminhoSelecionado6:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho6 = sistemaModuloCaminhoSelecionado6;
  }
  
  func_seleciona_registo_por_objecto3(sistemaModuloCaminhoSelecionado3:SistemaModuloCaminho):void{        
        this.sistemaModuloCaminho3 = sistemaModuloCaminhoSelecionado3;
        
        this.titulo_smc3 = "Alterar/Eliminar sistema";
        
        this.listagem3  = true;
        this.listagem6  = false;
        this.listagem9  = false;
        this.listagem12 = false;
        this.listagem15 = false;
        this.listagem18 = false;
        this.listagem21 = false;

        this.formulario3  = true;
        this.formulario6 = false;
        this.formulario9 = false;
        this.formulario12 = false;
        this.formulario15 = false;
        this.formulario18 = false;
        this.formulario21 = false;

        this.novoBT3          = false;
        this.novoBT6          = false;
        this.novoBT9          = false;
        this.novoBT12         = false;
        this.novoBT15         = false;
        this.novoBT18         = false;
        this.novoBT21         = false;

        this.cancelarNovoBT3  = true;
        this.cancelarNovoBT6  = false;
        this.cancelarNovoBT9  = false;
        this.cancelarNovoBT12 = false;
        this.cancelarNovoBT15 = false;
        this.cancelarNovoBT18 = false;
        this.cancelarNovoBT21 = false;

        this.editarRG3        = true; 
        this.editarRG6        = false;
        this.editarRG9        = false;
        this.editarRG12       = false;
        this.editarRG15       = false;
        this.editarRG18       = false;
        this.editarRG21       = false;

        this.selecionaRG3     = false; 
        this.selecionaRG6     = false;
        this.selecionaRG9     = false;
        this.selecionaRG12    = false;
        this.selecionaRG15    = false;
        this.selecionaRG18    = false;
        this.selecionaRG21    = false;

        this.inserirBT3       = false;
        this.inserirBT6       = false;
        this.inserirBT9       = false;
        this.inserirBT12      = false;
        this.inserirBT15      = false;
        this.inserirBT18      = false;
        this.inserirBT21      = false;

        this.alterarBT3       = true;
        this.alterarBT6       = false;
        this.alterarBT9       = false;
        this.alterarBT12      = false;
        this.alterarBT15      = false;
        this.alterarBT18      = false;
        this.alterarBT21      = false;

        this.eliminarBT3      = true;
        this.eliminarBT6      = false;
        this.eliminarBT9      = false;
        this.eliminarBT12     = false;
        this.eliminarBT15     = false;
        this.eliminarBT18     = false;
        this.eliminarBT21     = false;
  
  }

  


  //funcões auxiliares

  func_cancelar_novo_registro3():void{

    this.titulo_smc3 = "";
    
    this.listagem3  = true;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6 = false;
    this.formulario9 = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = true;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = true;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho3  = new SistemaModuloCaminho();
    this.sistemaModuloCaminho6  = new SistemaModuloCaminho();
    this.sistemaModuloCaminho9  = new SistemaModuloCaminho();
    this.sistemaModuloCaminho12 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho15 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho18 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho();

    this.sistemaModuloCaminhoSelecionado3  = new SistemaModuloCaminho(); 
    this.sistemaModuloCaminhoSelecionado6  = new SistemaModuloCaminho();   
    this.sistemaModuloCaminhoSelecionado9  = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado12 = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado15 = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado18 = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado21 = new SistemaModuloCaminho();

    this.lista_de_smc6           = [];
    this.lista_de_smc9           = [];
    this.lista_de_smc12          = [];
    this.lista_de_smc15          = [];
    this.lista_de_smc18          = [];
    this.lista_de_smc21          = [];

    this.lista_de_smc_filtrada6  = [];
    this.lista_de_smc_filtrada9  = [];
    this.lista_de_smc_filtrada12 = [];
    this.lista_de_smc_filtrada15 = [];
    this.lista_de_smc_filtrada18 = [];
    this.lista_de_smc_filtrada21 = [];

    this.func_seleciona_todos(3, 'ROOT');     

  }

  func_novo_registro3():void{
    
    this.titulo_smc3 = "Novo sistema";

    this.listagem3  = true;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = true;
    this.formulario6 = false;
    this.formulario9 = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = true;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

  }


  

  func_verifica_uso_de_sistemaModuloCaminhoId3(sistemaModuloCaminho:SistemaModuloCaminho):void{

  }



  //---------------------------------------------
  // para módulos nível 1 - Len 6
  func_chamar_registos_nivel6():void{
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;

    this.listagem3  = false;
    this.listagem6  = true;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6 = false;
    this.formulario9 = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = true;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = true;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(6, this.sistemaModuloCaminho3.codigo); 
    

  }


  func_novo_registro6():void{
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc6_novo_editar = "Novo módulo do sistema "+this.titulo_smc6;
    this.sistemaModuloCaminho6 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho3.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = true;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6 = true;
    this.formulario9 = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = true;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = true;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    //this.func_seleciona_todos6();   

  }


  func_seleciona_registo_por_objecto6(sistemaModuloCaminhoSelecionado6:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho6 = sistemaModuloCaminhoSelecionado6;
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc6_novo_editar = "Alterar/Eliminar módulo do sistema "+this.titulo_smc6;
    
    this.listagem3  = false;
    this.listagem6  = true;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = true;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = true;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = true;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = true;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = true;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

  }




  func_cancelar_novo_registro6():void{

    this.titulo_smc6 = "";
    this.titulo_smc6_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = true;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = true;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho6 = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado6 = new SistemaModuloCaminho();

    this.func_seleciona_todos(6, this.sistemaModuloCaminho3.codigo);    

  }


  func_cancelar_de_retorno6():void{

    this.titulo_smc6_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = true;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = true;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = true;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho6 = new SistemaModuloCaminho();
    this.sistemaModuloCaminhoSelecionado6 = new SistemaModuloCaminho();

    this.func_seleciona_todos(6, this.sistemaModuloCaminho3.codigo);    

  }






  //---------------------------------------------
  // para módulos nível 2 - Len 9
  func_chamar_registos_nivel9():void{
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc9 = this.sistemaModuloCaminho6.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = true;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = true;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = true; //console.log("cancelarNovoBT6 = "+this.cancelarNovoBT6);
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(9, this.sistemaModuloCaminho6.codigo);     

  }



  func_novo_registro9():void{
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc9 = this.sistemaModuloCaminho6.descricao;
    this.titulo_smc9_novo_editar = "Novo módulo em "+this.titulo_smc6+">"+this.titulo_smc9;
    this.sistemaModuloCaminho9 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho6.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = true;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6 = false;
    this.formulario9 = true;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = true;
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = true;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;   

  }


  func_cancelar_de_retorno9():void{

    this.titulo_smc9_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = true;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = true;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = true;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho9 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho6.codigo, null, null, null, null, null);
    this.sistemaModuloCaminhoSelecionado9 = this.sistemaModuloCaminho9;

    this.sistemaModuloCaminho12 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho15 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho18 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho();

    this.func_seleciona_todos(9, this.sistemaModuloCaminho6.codigo);    

  }


  func_atribuir_registo_por_objecto9(sistemaModuloCaminhoSelecionado9:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho9 = sistemaModuloCaminhoSelecionado9;
  }

  func_seleciona_registo_por_objecto9(sistemaModuloCaminhoSelecionado9:SistemaModuloCaminho):void{        
    
    this.sistemaModuloCaminho9 = sistemaModuloCaminhoSelecionado9;
    
    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc9 = this.sistemaModuloCaminho6.descricao;
    this.titulo_smc9_novo_editar = "Alterar/Eliminar módulo "+
                                   this.sistemaModuloCaminho3.abreviada+"/"+
                                   this.sistemaModuloCaminho6.descricao+"/"+
                                   this.sistemaModuloCaminho9.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = true;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = true;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = true;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = true;
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = true;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = true;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

  }


  func_verifica_botao_inserir_disabled9():boolean{       
    let resultado = true;

    if(this.sistemaModuloCaminho9.descricao != null && this.sistemaModuloCaminho9.descricao != '' && this.sistemaModuloCaminho9.descricao.length >= 3 && 
       this.sistemaModuloCaminho9.icone     != null && this.sistemaModuloCaminho9.icone     != '' && this.sistemaModuloCaminho9.icone.length >= 3){
      resultado = false;
    }
    return resultado;
  }


  func_inserir9():void{
    this.smcService.api_inserir9(this.sistemaModuloCaminho9).subscribe(retorno_api =>{
      this.lista_de_smc9.push(retorno_api);      
      this.func_cancelar_de_retorno9();      
    });
  }







  //---------------------------------------------
  // para módulos nível 3 - Len 12
  func_chamar_registos_nivel12():void{

    this.titulo_smc6 = this.sistemaModuloCaminho3.abreviada;
    this.titulo_smc9 = this.sistemaModuloCaminho6.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = true;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = true;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false; //console.log("cancelarNovoBT6 = "+this.cancelarNovoBT6);
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(12, this.sistemaModuloCaminho9.codigo);  

  }


  func_cancelar_de_retorno12():void{

    this.titulo_smc12_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = true;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = true;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho12 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho9.codigo, null, null, null, null, null);
    this.sistemaModuloCaminhoSelecionado12 = this.sistemaModuloCaminho12;

    this.sistemaModuloCaminho15 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho18 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho();

    this.func_seleciona_todos(12, this.sistemaModuloCaminho9.codigo);

  }



  func_atribuir_registo_por_objecto12(sistemaModuloCaminhoSelecionado12:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho12 = sistemaModuloCaminhoSelecionado12;
  }


  func_novo_registro12():void{
    
    this.titulo_smc12_novo_editar = "Novo módulo em "+this.sistemaModuloCaminho3.abreviada+">"+
                                                      this.sistemaModuloCaminho6.descricao+">"+
                                                      this.sistemaModuloCaminho9.descricao;
    this.sistemaModuloCaminho12 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho9.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = true;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = true;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = true;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;   

  }


  func_inserir12():void{
    this.smcService.api_inserir12(this.sistemaModuloCaminho12).subscribe(retorno_api =>{
      this.lista_de_smc12.push(retorno_api);      
      this.func_cancelar_de_retorno12();      
    });
  }


  func_seleciona_registo_por_objecto12(sistemaModuloCaminhoSelecionado12:SistemaModuloCaminho):void{

    this.sistemaModuloCaminho12 = sistemaModuloCaminhoSelecionado12;

    this.titulo_smc12_novo_editar = "Alterar/Eliminar módulo "+
                                   this.sistemaModuloCaminho3.abreviada+">"+
                                   this.sistemaModuloCaminho6.descricao+">"+
                                   this.sistemaModuloCaminho9.descricao+">"+
                                   this.sistemaModuloCaminho12.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = true;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = true;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = true;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = true;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = true;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = true;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

  }





//---------------------------------------------
// para módulos nível 3 - Len 15
  func_chamar_registos_nivel15():void{

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = true;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = true;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false; //console.log("cancelarNovoBT6 = "+this.cancelarNovoBT6);
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(15, this.sistemaModuloCaminho12.codigo);

  }


  func_cancelar_de_retorno15():void{

    this.titulo_smc15_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = true;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = true;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho15 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho12.codigo, null, null, null, null, null);
    this.sistemaModuloCaminhoSelecionado15 = this.sistemaModuloCaminho15;
    
    this.sistemaModuloCaminho18 = new SistemaModuloCaminho();
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho();

    this.func_seleciona_todos(15, this.sistemaModuloCaminho12.codigo);

  }



  func_novo_registro15():void{

    this.titulo_smc15_novo_editar = "Novo módulo em "+this.sistemaModuloCaminho3.abreviada+">"+
                                                      this.sistemaModuloCaminho6.descricao+">"+
                                                      this.sistemaModuloCaminho9.descricao+">"+
                                                      this.sistemaModuloCaminho12.descricao;
    this.sistemaModuloCaminho15 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho12.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = true;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = true;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = true;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false; 

  }


  func_atribuir_registo_por_objecto15(sistemaModuloCaminhoSelecionado15:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho15 = sistemaModuloCaminhoSelecionado15;
  }


  func_inserir15():void{
    this.smcService.api_inserir15(this.sistemaModuloCaminho15).subscribe(retorno_api =>{
      this.lista_de_smc15.push(retorno_api);      
      this.func_cancelar_de_retorno15();      
    });
  }


  func_seleciona_registo_por_objecto15(sistemaModuloCaminhoSelecionado15:SistemaModuloCaminho):void{

    this.sistemaModuloCaminho15 = sistemaModuloCaminhoSelecionado15;

    this.titulo_smc15_novo_editar = "Alterar/Eliminar módulo "+
                                   this.sistemaModuloCaminho3.abreviada+">"+
                                   this.sistemaModuloCaminho6.descricao+">"+
                                   this.sistemaModuloCaminho9.descricao+">"+
                                   this.sistemaModuloCaminho12.descricao+">"+
                                   this.sistemaModuloCaminho15.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = true;
    this.listagem18 = false;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = true;
    this.formulario18 = false;
    this.formulario21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = true;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = true;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = true;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = true;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

  }





  //---------------------------------------------
  // para módulos nível 4 - Len 18
  func_chamar_registos_nivel18():void{

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = true;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = true;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false; //console.log("cancelarNovoBT6 = "+this.cancelarNovoBT6);
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(18, this.sistemaModuloCaminho15.codigo);

  }


  func_cancelar_de_retorno18():void{

    this.titulo_smc18_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = true;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = true;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = false;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho18 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho15.codigo, null, null, null, null, null);
    this.sistemaModuloCaminhoSelecionado18 = this.sistemaModuloCaminho18;
    
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho();

    this.func_seleciona_todos(18, this.sistemaModuloCaminho15.codigo);

  }


  func_novo_registro18():void{

    this.titulo_smc18_novo_editar = "Novo módulo em "+this.sistemaModuloCaminho3.abreviada+">"+
                                                      this.sistemaModuloCaminho6.descricao+">"+
                                                      this.sistemaModuloCaminho9.descricao+">"+
                                                      this.sistemaModuloCaminho12.descricao+">"+
                                                      this.sistemaModuloCaminho15.descricao;
    this.sistemaModuloCaminho18 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho15.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = true;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = true;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = true;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false; 

  }


  func_atribuir_registo_por_objecto18(sistemaModuloCaminhoSelecionado18:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho18 = sistemaModuloCaminhoSelecionado18;
  }


  func_inserir18():void{
    this.smcService.api_inserir18(this.sistemaModuloCaminho18).subscribe(retorno_api =>{
      this.lista_de_smc18.push(retorno_api);      
      this.func_cancelar_de_retorno18();      
    });
  }



  func_seleciona_registo_por_objecto18(sistemaModuloCaminhoSelecionado18:SistemaModuloCaminho):void{

    this.sistemaModuloCaminho18 = sistemaModuloCaminhoSelecionado18;

    this.titulo_smc18_novo_editar = "Alterar/Eliminar módulo "+
                                   this.sistemaModuloCaminho3.abreviada+">"+
                                   this.sistemaModuloCaminho6.descricao+">"+
                                   this.sistemaModuloCaminho9.descricao+">"+
                                   this.sistemaModuloCaminho12.descricao+">"+
                                   this.sistemaModuloCaminho15.descricao+">"+
                                   this.sistemaModuloCaminho18.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = true;
    this.listagem21 = false;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = true;
    this.formulario21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = true;
    this.editarRG21       = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = true;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = false;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = true;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = true;
    this.eliminarBT21     = false;

  }

  











  //---------------------------------------------
  // para módulos nível 5 - Len 21
  func_chamar_registos_nivel21():void{

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = true;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = true;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false; 
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;

    this.func_seleciona_todos(21, this.sistemaModuloCaminho18.codigo);

  }


  func_novo_registro21():void{

    this.titulo_smc21_novo_editar = "Novo módulo em "+this.sistemaModuloCaminho3.abreviada+">"+
                                                      this.sistemaModuloCaminho6.descricao+">"+
                                                      this.sistemaModuloCaminho9.descricao+">"+
                                                      this.sistemaModuloCaminho12.descricao+">"+
                                                      this.sistemaModuloCaminho15.descricao+">"+
                                                      this.sistemaModuloCaminho18.descricao;
    this.sistemaModuloCaminho21 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho18.codigo, null, null, null, null, null);

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = true;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = true;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = true;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = true;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false; 

  }



  func_cancelar_de_retorno21():void{

    this.titulo_smc21_novo_editar = "";
    
    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = true;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = false;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = true;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = false;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = false;

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = false;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = false;    

    this.sistemaModuloCaminho21 = new SistemaModuloCaminho(null, null, null, this.sistemaModuloCaminho18.codigo, null, null, null, null, null);
    this.sistemaModuloCaminhoSelecionado21 = this.sistemaModuloCaminho21;
    
    this.func_seleciona_todos(21, this.sistemaModuloCaminho18.codigo);

  }



  func_atribuir_registo_por_objecto21(sistemaModuloCaminhoSelecionado21:SistemaModuloCaminho):void{        
    this.sistemaModuloCaminho21 = sistemaModuloCaminhoSelecionado21;
  }


  func_inserir21():void{
    this.smcService.api_inserir21(this.sistemaModuloCaminho21).subscribe(retorno_api =>{
      this.lista_de_smc21.push(retorno_api);      
      this.func_cancelar_de_retorno21();      
    });
  }


  func_seleciona_registo_por_objecto21(sistemaModuloCaminhoSelecionado21:SistemaModuloCaminho):void{

    this.sistemaModuloCaminho21 = sistemaModuloCaminhoSelecionado21;

    this.titulo_smc21_novo_editar = "Alterar/Eliminar módulo "+
                                   this.sistemaModuloCaminho3.abreviada+">"+
                                   this.sistemaModuloCaminho6.descricao+">"+
                                   this.sistemaModuloCaminho9.descricao+">"+
                                   this.sistemaModuloCaminho12.descricao+">"+
                                   this.sistemaModuloCaminho15.descricao+">"+
                                   this.sistemaModuloCaminho18.descricao+">"+
                                   this.sistemaModuloCaminho21.descricao;

    this.listagem3  = false;
    this.listagem6  = false;
    this.listagem9  = false;
    this.listagem12 = false;
    this.listagem15 = false;
    this.listagem18 = false;
    this.listagem21 = true;

    this.formulario3  = false;
    this.formulario6  = false;
    this.formulario9  = false;
    this.formulario12 = false;
    this.formulario15 = false;
    this.formulario18 = false;
    this.formulario21 = true;

    this.editarRG3        = false; 
    this.editarRG6        = false;
    this.editarRG9        = false;
    this.editarRG12       = false;
    this.editarRG15       = false;
    this.editarRG18       = false;
    this.editarRG21       = true;

    this.novoBT3          = false;
    this.novoBT6          = false;
    this.novoBT9          = false;
    this.novoBT12         = false;
    this.novoBT15         = false;
    this.novoBT18         = false;
    this.novoBT21         = false;

    this.cancelarNovoBT3  = false;
    this.cancelarNovoBT6  = false;
    this.cancelarNovoBT9  = false;
    this.cancelarNovoBT12 = false;
    this.cancelarNovoBT15 = false;
    this.cancelarNovoBT18 = true;
    this.cancelarNovoBT21 = true;    

    this.selecionaRG3     = false; 
    this.selecionaRG6     = false;
    this.selecionaRG9     = false;
    this.selecionaRG12    = false;
    this.selecionaRG15    = false;
    this.selecionaRG18    = false;
    this.selecionaRG21    = false;

    this.inserirBT3       = false;
    this.inserirBT6       = false;
    this.inserirBT9       = false;
    this.inserirBT12      = false;
    this.inserirBT15      = false;
    this.inserirBT18      = false;
    this.inserirBT21      = false;

    this.alterarBT3       = false;
    this.alterarBT6       = false;
    this.alterarBT9       = false;
    this.alterarBT12      = false;
    this.alterarBT15      = false;
    this.alterarBT18      = false;
    this.alterarBT21      = true;

    this.eliminarBT3      = false;
    this.eliminarBT6      = false;
    this.eliminarBT9      = false;
    this.eliminarBT12     = false;
    this.eliminarBT15     = false;
    this.eliminarBT18     = false;
    this.eliminarBT21     = true;

  }



  // alterações --------------------------------------------------------
  func_alterar3():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho3).subscribe(retorno_api =>{

      this.lista_de_smc3 = this.lista_de_smc3.map(
        sistemaModuloCaminho3 => sistemaModuloCaminho3.id == retorno_api.id ? retorno_api : sistemaModuloCaminho3
      );

      this.func_cancelar_novo_registro3(); 

    });

  }


  func_alterar6():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho6).subscribe(retorno_api =>{

      this.lista_de_smc6 = this.lista_de_smc6.map(
        sistemaModuloCaminho6 => sistemaModuloCaminho6.id == retorno_api.id ? retorno_api : sistemaModuloCaminho6
      );

      this.func_cancelar_de_retorno6();

    });

  }

  func_alterar9():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho9).subscribe(retorno_api =>{

      this.lista_de_smc9 = this.lista_de_smc9.map(
        sistemaModuloCaminho9 => sistemaModuloCaminho9.id == retorno_api.id ? retorno_api : sistemaModuloCaminho9
      );

      this.func_cancelar_de_retorno9();

    });

  }


  func_alterar12():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho12).subscribe(retorno_api =>{

      this.lista_de_smc12 = this.lista_de_smc12.map(
        sistemaModuloCaminho12 => sistemaModuloCaminho12.id == retorno_api.id ? retorno_api : sistemaModuloCaminho12
      );

      this.func_cancelar_de_retorno12();

    });

  }


  func_alterar15():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho15).subscribe(retorno_api =>{

      this.lista_de_smc15 = this.lista_de_smc15.map(
        sistemaModuloCaminho15 => sistemaModuloCaminho15.id == retorno_api.id ? retorno_api : sistemaModuloCaminho15
      );

      this.func_cancelar_de_retorno15();

    });

  }


  func_alterar18():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho18).subscribe(retorno_api =>{

      this.lista_de_smc18 = this.lista_de_smc18.map(
        sistemaModuloCaminho18 => sistemaModuloCaminho18.id == retorno_api.id ? retorno_api : sistemaModuloCaminho18
      );

      this.func_cancelar_de_retorno18();

    });

  }


  func_alterar21():void{

    this.smcService.api_alteracao(this.sistemaModuloCaminho21).subscribe(retorno_api =>{

      this.lista_de_smc21 = this.lista_de_smc21.map(
        sistemaModuloCaminho21 => sistemaModuloCaminho21.id == retorno_api.id ? retorno_api : sistemaModuloCaminho21
      );

      this.func_cancelar_de_retorno21();

    });

  }



  /// Eliminações ---------------------------------------------------

  //função que conta quanto um determinado grupo existe dentro de menus
  func_conta_conta_uso_smc_em_menu(smcID:number):Observable<number>{
    return this.smcService.api_conta_uso_smc_em_menu(smcID);
  }
  
  //função que conta quanto um determinado grupo existe dentro de grupoPrivilegios
  func_conta_conta_uso_smc_em_grupo_privilegio(smcID:number):Observable<number>{
    return this.smcService.api_conta_uso_smc_em_grupo_privilegio(smcID);
  }
  
  // função para verificar o uso de smcId, criar o conteudo de mensagemImpossibilidadeEliminacao
  // e ativar o dialog mostraDialogImpossibilidadeEliminacao
  func_verifica_uso_de_smcID(sistemaModuloCaminho: any):void{
    
      //criar o conteúdo da variável mensagemImpossibilidadeEliminacao
      // Combina as duas chamadas assíncronas
      forkJoin({

        smc_em_grupoPrivilegio:this.func_conta_conta_uso_smc_em_grupo_privilegio(sistemaModuloCaminho.id),
        smc_em_menus:this.func_conta_conta_uso_smc_em_menu(sistemaModuloCaminho.id)        

      }).subscribe({
        
          next: (resultados_api) => {

            const smc_em_grupoPrivilegio = resultados_api.smc_em_grupoPrivilegio; 
            const smc_em_menus = resultados_api.smc_em_menus;

            const mensagemBase = `O item '${sistemaModuloCaminho.descricao}' está em uso nas tabelas:`;

            const emAmbos      = smc_em_grupoPrivilegio !== 0 && smc_em_menus !== 0;
            const soPrivilegio = smc_em_grupoPrivilegio !== 0 && smc_em_menus === 0;
            const soMenus      = smc_em_grupoPrivilegio === 0 && smc_em_menus !== 0;

            // verifica se o tamanho do código está em um dos casos esperados
            const tamanhosValidos = [3, 6, 9, 12, 15, 18, 21];
            const suffix = sistemaModuloCaminho.codigo.length.toString();
            
            if (!tamanhosValidos.includes(sistemaModuloCaminho.codigo.length)) {

              console.error('Tamanho de código não suportado:', sistemaModuloCaminho.codigo.length);
              return;

            } else {

              if (emAmbos) {
                this.mensagemImpossibilidadeEliminacao = `${mensagemBase} Grupo Privilégios e Menus`;
              } else if (soPrivilegio) {
                this.mensagemImpossibilidadeEliminacao = `${mensagemBase} Grupo Privilégios`;
              } else if (soMenus) {
                this.mensagemImpossibilidadeEliminacao = `${mensagemBase} Menus`;
              } else {
                this.mensagemImpossibilidadeEliminacao = "";
              }

              // Define as flags de diálogo conforme o caso
              if (emAmbos || soPrivilegio || soMenus) {
                (this as any)[`mostraDialogImpossibilidadeEliminacao${suffix}`] = true;
              } else {
                (this as any)[`mostraDialogEliminar${suffix}`] = true;
              }


            }

          }, 
          error: (err) => {
            console.error('Erro ao verificar uso do SMC:', err);
            // Adicione tratamento de erro adequado para o usuário
          }

      }        
      
    );

  }


  func_eliminar(sistemaModuloCaminho: any):void{
    
    //pega o tamanho do codigo
    let lenCodigo = sistemaModuloCaminho.codigo.length;
    let smcID = sistemaModuloCaminho.id;
    
    //verifica lenCodigo
    switch(lenCodigo){

      case 3:

          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc3 = this.lista_de_smc3.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_novo_registro3(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });

          break;


      case 6:
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc6 = this.lista_de_smc6.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_novo_registro6(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;


      case 9:
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc9 = this.lista_de_smc9.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_de_retorno9(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;


      case 12:
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc12 = this.lista_de_smc12.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_de_retorno12(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;


      case 15:
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc15 = this.lista_de_smc15.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_de_retorno15(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;


      case 18:
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc18 = this.lista_de_smc18.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_de_retorno18(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;


      case 21: 
          this.smcService.api_eliminacao_por_codigo(smcID)
          .subscribe({

            next: (retorno_api) => {

              // Verifica se a exclusão foi bem-sucedida
              if(retorno_api.sucesso == true){
                
                this.lista_de_smc21 = this.lista_de_smc21.filter(
                  (item) => item.id !== smcID
                );

                this.func_cancelar_de_retorno21(); 
                console.log("Sucesso na eliminação de Sistema-Modulo-Caminho:", retorno_api.mensagem);

              } else if(retorno_api.sucesso == false){
                console.error('Falha na eliminação de Sistema-Modulo-Caminho:', retorno_api.mensagem);
              }

            },
            error: (erro_api) => {
              console.error("Erro na eliminação de Sistema-Modulo-Caminho:", erro_api);
            }

          });
          break;

    }

  }


  





}







