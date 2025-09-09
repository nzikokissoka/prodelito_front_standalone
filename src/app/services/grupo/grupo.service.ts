import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../../models/grupo'; 


@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  // url da api
  private url:string                                  = "http://localhost:8080/grupo";
  private url_listar_um:string                        = "http://localhost:8080/grupo/listar_um";
  private url_orderby_id_desc:string                  = "http://localhost:8080/grupo/listar_todos_by_id_desc";
  private url_orderby_nome:string                     = "http://localhost:8080/grupo/listar_todos_by_nome";
  private url_conta_todos_registos:string             = "http://localhost:8080/grupo/conta_todos_registos";
  private url_conta_registos_por_nome:string          = "http://localhost:8080/grupo/conta_registos_por_nome";
  private url_conta_registos_por_visibilidade:string  = "http://localhost:8080/grupo/conta_registos_por_visibilidade";
  private url_conta_grupos_em_grupoPrivilegios:string = "http://localhost:8080/grupo/conta_grupos_em_grupoPrivilegios";
  private url_conta_grupos_em_menus:string            = "http://localhost:8080/grupo/conta_grupos_em_menus";
  
  //constructor
  constructor(private http:HttpClient){}

  
  //api de contagem
  api_conta_todos_registos(): Observable<number>{
    return this.http.get<number>(this.url_conta_todos_registos);
  }

  api_conta_registos_por_nome(nome:string): Observable<number>{
    return this.http.get<number>(this.url_conta_registos_por_nome+"/"+nome);
  }

  api_conta_registos_por_visibilidade(visibilidade:string): Observable<number>{
    return this.http.get<number>(this.url_conta_registos_por_visibilidade+"/"+visibilidade);
  }


  api_conta_grupos_em_grupoPrivilegios(grupoID:number): Observable<number>{
    return this.http.get<number>(this.url_conta_grupos_em_grupoPrivilegios+"/"+grupoID);
  }

  api_conta_grupos_em_menus(grupoID:number): Observable<number>{
    return this.http.get<number>(this.url_conta_grupos_em_menus+"/"+grupoID);
  }





  //api de selecção um
  api_api_seleciona_um(id:number): Observable<Grupo>{
    return this.http.get<Grupo>(this.url_listar_um+"/"+id);
  }


  //api de selecção todos
  api_seleciona_todos(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.url);
  }

  api_seleciona_todos_orderby_id_desc(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.url_orderby_id_desc);
  }

  api_seleciona_todos_orderby_nome(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.url_orderby_nome);
  }

  //api de inserção
  api_inserir(grupo:Grupo): Observable<Grupo>{
    return this.http.post<Grupo>(this.url, grupo);
  }

  //api de alteração
  api_alteracao(grupo:Grupo): Observable<Grupo>{
    return this.http.put<Grupo>(this.url, grupo);
  }

  //api de eliminação
  api_eliminacao(id:number): Observable<void>{
    return this.http.delete<void>(this.url+"/"+id);
  }

  

}
