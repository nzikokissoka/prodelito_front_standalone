import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../../../init-interfaces/layouts/base/base.component';
import { Grupo } from '../../../../models/grupo';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { GrupoService } from '../../../../services/grupo/grupo.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../../shared.module';
import { TituloAppComponent } from "../titulo-app/titulo-app.component";
import { forkJoin, Observable } from 'rxjs';


@Component({
  selector: 'app-grupo',
  standalone: true,
  imports: [BaseComponent, HttpClientModule, SharedModule, TituloAppComponent],
  providers: [
    GrupoService // Certifique-se de que o GrupoService está no array de providers
  ],
  templateUrl: './grupo.component.html',
  styleUrl: './grupo.component.css'
})
export class GrupoComponent implements OnInit{

  // variaveis
  listagem:boolean     = true;
  formulario:boolean   = false;

  novoBT:boolean         = true;
  cancelarNovoBT:boolean = false;
  editarRG:boolean       = false; 

  inserirBT:boolean      = true;
  alterarBT:boolean      = false;
  eliminarBT:boolean     = false; 
  
  titulo:string          = "LISTAGEM DE GRUPOS";
  mensagemImpossibilidadeEliminacao:string = "";

  mostraDialogConfirmaInsercao:boolean   = false;
  mostraDialogConfirmaAlteracao:boolean  = false;
  mostraDialogConfirmaEliminacao:boolean = false;
  mostraDialogImpossibilidadeEliminacao:boolean = false;
  mostraDialogAlterar:boolean            = false;
  mostraDialogEliminar:boolean           = false;

  //objecto grupo
  grupoSelecionado!:Grupo;
  grupo = new Grupo();

  //listagem de grupo
  listaGrupos:Grupo[]                       = [];
  listaGrupos_OrderByIdDesc:Grupo[]         = [];
  listaGruposFiltrada:Grupo[]               = [];
  listaGrupos_OrderByIdDescFiltrada:Grupo[] = [];

  
  // configuração do formGroup
  formGroup = new FormGroup({
    nome: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    visibilidade: new FormControl(null, [Validators.required, Validators.minLength(1)])
  });


  //constructor
  constructor(private grupoService:GrupoService) { }

  //init
  ngOnInit(){
    console.log('GrupoComponent carregado!'); // Verifica se o componente inicializou
    this.func_seleciona_todos_orderby_id_desc(); 
    this.func_seleciona_todos();    
  }


  

  
  //funcões auxiliares

    //função para seleção todos
    func_seleciona_todos():void{
      this.grupoService.api_seleciona_todos().
      subscribe(retorno_da_api => this.listaGrupos = retorno_da_api);

      this.listaGruposFiltrada = [...this.listaGrupos];
    }

    //função para seleção todos organizando com id descedente
    func_seleciona_todos_orderby_id_desc():void{
      
      //atribuir o resultado da api em listaGrupos
      this.grupoService.api_seleciona_todos_orderby_id_desc().
      subscribe(retorno_da_api => this.listaGrupos_OrderByIdDesc = retorno_da_api);

      //copia a listaGrupos e atribui na listaGruposFiltrada
      this.listaGrupos_OrderByIdDescFiltrada = [...this.listaGrupos_OrderByIdDesc];

    }


    


    //função novo registro
    func_novo_registro():void{
      
      this.listagem       = false;
      this.formulario     = true;

      this.novoBT         = false;
      this.cancelarNovoBT = true;
      this.editarRG       = false; 
      
      this.inserirBT      = true;
      this.alterarBT      = false;
      this.eliminarBT     = false;

      this.titulo         = "NOVO GRUPO";

    }

    func_cancelar_novo_registro():void{
      
      this.listagem       = true;
      this.formulario     = false;

      this.novoBT         = true;
      this.cancelarNovoBT = false;
      this.editarRG       = false; 

      this.inserirBT      = true;
      this.alterarBT      = false;
      this.eliminarBT     = false; 

      this.titulo         = "LISTAGEM DE GRUPOS";
      this.mensagemImpossibilidadeEliminacao = "";

      this.mostraDialogAlterar  = false;
      this.mostraDialogEliminar = false;
      
      this.grupo            = new Grupo();
      this.grupoSelecionado = new Grupo(); 
      
      this.func_seleciona_todos();
      this.func_seleciona_todos_orderby_id_desc();
      
    }

    // função que verifica botão inserir
    func_verifica_botao_inserir_disabled():boolean{       
      let resultado = true;
  
      if(this.grupo.nome != null && this.grupo.nome != '' && this.grupo.nome.length >= 3 && this.grupo.visibilidade.length != 0){
        resultado = false;
      }
      return resultado;
    }

    // função para selecionar provincia por id
    func_seleciona_registo_por_id(id:number):void{        
      this.grupo = this.listaGrupos_OrderByIdDesc[id];
      
      this.listagem       = true;
      this.formulario     = false;

      this.novoBT         = false;
      this.cancelarNovoBT = true;
      this.editarRG       = true;
      
      this.inserirBT      = false;
      this.alterarBT      = true;
      this.eliminarBT     = true;
    }

    func_seleciona_registo_por_objecto(grupoSelecionado:Grupo):void{        
      this.grupo          = grupoSelecionado;
      
      this.listagem       = false;
      this.formulario     = true;

      this.novoBT         = false;
      this.cancelarNovoBT = true;
      this.editarRG       = true;
      
      this.inserirBT      = false;
      this.alterarBT      = true;
      this.eliminarBT     = true;

      this.titulo         = "ALTERAR GRUPO";

    }

    //selecção de registro
    func_selecionaRegistro(event: any){
      //this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
      //this.teste = event.data.name;
      
    }

    //função que conta quanto um determinado grupo existe dentro de grupoPrivilegios
    func_conta_grupos_em_grupoPrivilegio(grupo:number):Observable<number>{
      return this.grupoService.api_conta_grupos_em_grupoPrivilegios(grupo);
    }

    //função que conta quanto um determinado grupo existe dentro de menus
    func_conta_grupos_em_menus(grupo:number):Observable<number>{
      return this.grupoService.api_conta_grupos_em_menus(grupo);
    }



    //funções executoras

    //mostra dialog
    func_mostraDialogAlterar():void {
      this.mostraDialogAlterar = true;
      //console.log("mostraDialogAlterar = "+this.mostraDialogAlterar);
    }

    func_mostraDialogEliminar():void {
      this.mostraDialogEliminar = true;
    }

    // função inserir
    func_inserir():void{
      this.grupoService.api_inserir(this.grupo).subscribe(retorno_api =>{
        this.listaGrupos_OrderByIdDesc.push(retorno_api);
        this.listaGrupos.push(retorno_api);
        this.func_cancelar_novo_registro();
        this.func_seleciona_todos_orderby_id_desc();
      });
    }

    // função alterar
    func_alterar():void{
      
      this.grupoService.api_alteracao(this.grupo).subscribe(retorno_api =>{
        
        this.listaGrupos_OrderByIdDesc = this.listaGrupos_OrderByIdDesc.map(
          grupo => grupo.id == retorno_api.id ? retorno_api : grupo
        );

        this.listaGrupos = this.listaGrupos.map(
          grupo => grupo.id == retorno_api.id ? retorno_api : grupo
        );

        this.func_cancelar_novo_registro();
        this.func_seleciona_todos_orderby_id_desc();

      });

    }


    // função para verificar o uso de grupoId, criar o conteudo de mensagemImpossibilidadeEliminacao
    // e ativar o dialog mostraDialogImpossibilidadeEliminacao
    func_verifica_uso_de_grupoId(grupo: any):void{
      
      //criar o conteúdo da variável mensagemImpossibilidadeEliminacao
      // Combina as duas chamadas assíncronas
      forkJoin({

        grupos_em_grupoPrivilegio:this.func_conta_grupos_em_grupoPrivilegio(grupo.id),
        grupos_em_menus:this.func_conta_grupos_em_menus(grupo.id)

      }).subscribe(
        (resultados_api) => {

          const grupos_em_grupoPrivilegio = resultados_api.grupos_em_grupoPrivilegio;
          const grupos_em_menus = resultados_api.grupos_em_menus;

          //verificação dos dois valores
          if(grupos_em_grupoPrivilegio != 0 && grupos_em_menus != 0){
            this.mensagemImpossibilidadeEliminacao = "O grupo {{grupo.nome}} está em uso nas tabelas: Grupo Privilégios e Menus";
            this.mostraDialogImpossibilidadeEliminacao = true;
          } else if(grupos_em_grupoPrivilegio != 0 && grupos_em_menus == 0){
            this.mensagemImpossibilidadeEliminacao = "O grupo {{grupo.nome}} está em uso nas tabela: Grupo Privilégios";
            this.mostraDialogImpossibilidadeEliminacao = true;
          } else if(grupos_em_grupoPrivilegio == 0 && grupos_em_menus != 0){
            this.mensagemImpossibilidadeEliminacao = "O grupo {{grupo.nome}} está em uso nas tabela: Menus";
            this.mostraDialogImpossibilidadeEliminacao = true;
          } else{
            this.mensagemImpossibilidadeEliminacao = "";
            this.mostraDialogEliminar = true;
          }

        }, 

        (erro_resultados_api) => {
          console.error('Erro ao verificar vínculos em func_eliminar:', erro_resultados_api);
        }
      );

    }


    // função eliminar
    func_eliminar():void{

      this.grupoService.api_eliminacao(this.grupo.id).subscribe(

        (retorno_api) => {

          // filtra as listas para remover o grupo eliminado
          this.listaGrupos_OrderByIdDesc = this.listaGrupos_OrderByIdDesc.filter(
            (item) => item.id !== this.grupo.id
          );

          this.listaGrupos = this.listaGrupos.filter(
            (item) => item.id !== this.grupo.id
          );
    
          this.func_cancelar_novo_registro();
          this.func_seleciona_todos_orderby_id_desc();

        },

        (erro_api) => {
          // Trata erros da API
          console.error('Erro da API ao eliminar o grupo:', erro_api);          
        }

      );

    }



}

