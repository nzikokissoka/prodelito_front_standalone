import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SistemaModuloCaminho } from '../../models/sistema-modulo-caminho';



@Injectable({
  providedIn: 'root'
})
export class SistemaModuloCaminhoService { //sistemaModuloCaminho/nivel3

  //url da api
  private url:string                                    = "http://localhost:8080/sistemaModuloCaminho";
  private url_conta_todos_registos_por_codigo:string    = "http://localhost:8080/sistemaModuloCaminho/conta_todos_registos_por_codigo";
  private url_conta_todos_registos_por_descricao:string = "http://localhost:8080/sistemaModuloCaminho/conta_todos_registos_por_descricao";
    
  private url_conta_uso_smc_em_menu:string = "http://localhost:8080/sistemaModuloCaminho/conta_uso_smc_em_menu";
  private url_conta_uso_smc_em_grupo_privilegio:string = "http://localhost:8080/sistemaModuloCaminho/conta_uso_smc_em_grupo_privilegio";
    
  private url_seleciona_todos_por_null_codigopai_e_lenCodigopai3:string = "http://localhost:8080/sistemaModuloCaminho/por_null_codigopai_e_lenCodigopai";
  private url_seleciona_todos_ordenar_por_id_desc:string  = "http://localhost:8080/sistemaModuloCaminho/ordenar_por_id_desc";
  private url_seleciona_todos_ordenar_por_id_desc6:string = "http://localhost:8080/sistemaModuloCaminho/ordenar_por_id_desc6";
  private url_pega_parte_titulo_pagina_string:string = "http://localhost:8080/sistemaModuloCaminho/pega_parte_titulo_string";
  private url_alteracao:string = "http://localhost:8080/sistemaModuloCaminho/alteracao";
  private url_eliminacao:string = "http://localhost:8080/sistemaModuloCaminho/eliminacao";
  private url_eliminacao_por_codigo:string = "http://localhost:8080/sistemaModuloCaminho/eliminacao_por_codigo";
    

  //constructor
  constructor(private http:HttpClient){}

  //api de contagem
  api_conta_todos_registos(): Observable<number>{
    return this.http.get<number>(this.url);
  }


  api_conta_uso_smc_em_menu(smcID:number): Observable<number>{ // smcID = sistemaModuloCaminho Id
    return this.http.get<number>(this.url_conta_uso_smc_em_menu+"/"+smcID);
  }

  api_conta_uso_smc_em_grupo_privilegio(smcID:number): Observable<number>{
    return this.http.get<number>(this.url_conta_uso_smc_em_grupo_privilegio+"/"+smcID);
  }


/*api_conta_grupos_em_grupoPrivilegios(grupoID:number): Observable<number>{
    return this.http.get<number>(this.url_conta_grupos_em_grupoPrivilegios+"/"+grupoID);
  }

  api_conta_grupos_em_menus(grupoID:number): Observable<number>{
    return this.http.get<number>(this.url_conta_grupos_em_menus+"/"+grupoID);
  }*/


  //api de selecção todos
  api_seleciona_todos3(): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_seleciona_todos_por_null_codigopai_e_lenCodigopai3);
  }

  //para len = 3,6,9,12,15,18,21
  api_seleciona_todos3_ordenar_por_id_desc(lenCodigo:number, codigoPai:string): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_seleciona_todos_ordenar_por_id_desc+"/"+lenCodigo+"/"+codigoPai);
  }

  api_seleciona_todos_ordenar_por_id_desc6(codigoPai3:string): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_seleciona_todos_ordenar_por_id_desc6+"/"+codigoPai3);
  }


  //api pega parte do titulo da pagina
  /*api_pega_parte_titulo_pagina_string(codigoPai:string): Observable<string>{
    return this.http.get<string>(this.url_pega_parte_titulo_pagina_string+"/"+codigoPai);
  }*/

  

    /*api_seleciona_todos6(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }

    api_seleciona_todos9(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }

    api_seleciona_todos12(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }

    api_seleciona_todos15(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }

    api_seleciona_todos18(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }

    api_seleciona_todos21(): Observable<SistemaModuloCaminho[]>{
      return this.http.get<SistemaModuloCaminho[]>(this.url);
    }*/

    
    //api de inserção
    api_inserir3(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel3", sistemaModuloCaminho);
    }

    api_inserir6(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel6", sistemaModuloCaminho);
    }

    api_inserir9(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel9", sistemaModuloCaminho);
    }

    api_inserir12(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel12", sistemaModuloCaminho);
    }

    api_inserir15(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel15", sistemaModuloCaminho);
    }

    api_inserir18(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel18", sistemaModuloCaminho);
    }

    api_inserir21(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.post<SistemaModuloCaminho>(this.url+"/nivel21", sistemaModuloCaminho);
    }


    
    
    
    //api de alteração
    api_alteracao(sistemaModuloCaminho:SistemaModuloCaminho): Observable<SistemaModuloCaminho>{
      return this.http.put<SistemaModuloCaminho>(this.url_alteracao, sistemaModuloCaminho);
    }


    //api de eliminação
    api_eliminacao(id:number): Observable<void>{
      return this.http.delete<void>(this.url_eliminacao+"/"+id);
    }

    /*api_eliminacao_por_codigo(sistemaModuloCaminho:SistemaModuloCaminho): Observable<void>{
      return this.http.delete<void>(this.url_eliminacao_por_codigo, sistemaModuloCaminho);
    }*/

    api_eliminacao_por_codigo(id:number): Observable<any>{
      return this.http.delete<any>(this.url_eliminacao_por_codigo+"/"+id);
    }

    
}
