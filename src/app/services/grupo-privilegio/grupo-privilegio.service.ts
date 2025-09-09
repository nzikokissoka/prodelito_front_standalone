import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { Observable } from 'rxjs';
import { SistemaModuloCaminho } from '../../models/sistema-modulo-caminho';
import { GrupoPrivilegio } from '../../models/grupo-privilegio';

@Injectable({
  providedIn: 'root'
})
export class GrupoPrivilegioService {

  //url da api
  /*private url:string                                              = "http://localhost:8080/grupoPrivilegio"; 
  private url_insert:string                                       = "http://localhost:8080/grupoPrivilegio/insert"; 
  private url_listar_grupo_privilegio_por_codigo_e_grupoId:string = "http://localhost:8080/grupoPrivilegio/listar_grupo_privilegio_por_codigo_e_grupoId";

  private url_pega_objecto_registo_sistema_modulo_caminho:string  = "http://localhost:8080/sistemaModuloCaminho/pega_objecto_registo_sistema_modulo_caminho";

  private url_listar_todos_grupos:string                     = "http://localhost:8080/grupo/listar";
  private url_listar_todos_order_por_codigo:string           = "http://localhost:8080/sistemaModuloCaminho/ordenar_por_codigo";
  private url_listar_todos_order_por_caminho_not_null:string = "http://localhost:8080/sistemaModuloCaminho/ordenar_por_caminho_not_null";
  private url_listar_por_grupo_codigo:string                 = "http://localhost:8080/sistemaModuloCaminho/listar_por_grupo_codigo";
  private url_pegar_registo_sistema_modulo_caminho:string    = "http://localhost:8080/sistemaModuloCaminho/pega_registo_sistema_modulo_caminho";
  private url_pegar_um_objecto_smc:string                    = "http://localhost:8080/sistemaModuloCaminho/pegar_um_objecto";*/
  

  private url:string                                              = "http://localhost:8081/grupoPrivilegio";
  private url_insert:string                                       = this.url+"/insert"; 
  private url_listar_grupo_privilegio_por_codigo_e_grupoId:string = this.url+"/listar_grupo_privilegio_por_codigo_e_grupoId";

  private url_pega_objecto_registo_sistema_modulo_caminho:string  = this.url+"/pega_objecto_registo_sistema_modulo_caminho";

  private url_grupo:string = "http://localhost:8081/grupo";
  private url_sistemaModuloCaminho:string = "http://localhost:8081/sistemaModuloCaminho";

  private url_listar_todos_grupos:string                     = this.url_grupo+"/listar";
  private url_listar_todos_order_por_codigo:string           = this.url_sistemaModuloCaminho+"/ordenar_por_codigo";
  private url_listar_todos_order_por_caminho_not_null:string = this.url_sistemaModuloCaminho+"/ordenar_por_caminho_not_null";
  private url_listar_por_grupo_codigo:string                 = this.url_sistemaModuloCaminho+"/listar_por_grupo_codigo";
  private url_pegar_registo_sistema_modulo_caminho:string    = this.url_sistemaModuloCaminho+"/pega_registo_sistema_modulo_caminho";
  private url_pegar_um_objecto_smc:string                    = this.url_sistemaModuloCaminho+"/pegar_um_objecto";


  //constructor
  constructor(private http:HttpClient) { }

 
  //api de selecção todos grupos
  //api de selecção todos sistemas ordenando por codigo
  api_para_func_pegar_registo_sistema_modulo_caminho(id:number): Observable<SistemaModuloCaminho>{
    return this.http.get<SistemaModuloCaminho>(this.url_pegar_registo_sistema_modulo_caminho+"/"+id);
  }

  api_seleciona_todos_grupos(): Observable<Grupo[]>{
    return this.http.get<Grupo[]>(this.url_listar_todos_grupos);
  }

  //api de selecção todos sistemas ordenando por codigo
  api_para_func_listar_todos_ordenar_por_codigo(lenCodigo:number, codigoPai:string): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_listar_todos_order_por_codigo+"/"+lenCodigo+"/"+codigoPai);
  }

  //api de selecção todos sistemas ordenando por caminho not null
  api_para_func_listar_todos_ordenar_por_caminho_not_null(codigo:string): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_listar_todos_order_por_caminho_not_null+"/"+codigo);
  }

  //api de selecção todos sistemas ordenando por codigo
  api_para_func_listar_grupo_privilegio_por_smc_grupo(codigo:string, grupoId:number): Observable<GrupoPrivilegio[]>{
    return this.http.get<GrupoPrivilegio[]>(this.url_listar_por_grupo_codigo+"/"+grupoId+"/"+codigo);
  }

  //api de selecção todos itens ordenando por codigo
  api_para_func_listar_itens_por_grupo_codigo(codigo:string, grupoId:number): Observable<SistemaModuloCaminho[]>{
    return this.http.get<SistemaModuloCaminho[]>(this.url_listar_por_grupo_codigo+"/"+grupoId+"/"+codigo);
  }


  //api de selecção todos grupos privilegios por codigo e grupoId
  api_para_func_listar_grupo_privilegio_por_codigo_grupo(codigo:string, grupoId:number): Observable<GrupoPrivilegio[]>{
    return this.http.get<GrupoPrivilegio[]>(this.url_listar_grupo_privilegio_por_codigo_e_grupoId+"/"+codigo+"/"+grupoId);
  }



  


  //pegar um objecto smc
  api_para_func_pegar_objecto_smc(smcID:number, grupoID:number): Observable<SistemaModuloCaminho>{
    return this.http.get<SistemaModuloCaminho>(this.url_pegar_um_objecto_smc+"/"+smcID+"/"+grupoID);
  }

  //pegar objecto smc por codigo
  api_para_pega_objecto_smc_por_codigo(codigo:string):Observable<SistemaModuloCaminho>{
    return this.http.get<SistemaModuloCaminho>(this.url_pega_objecto_registo_sistema_modulo_caminho+"/"+codigo);
  }






  //api de inserção
  api_para_func_inserir(grupoPrivilegio:GrupoPrivilegio): Observable<GrupoPrivilegio>{
    return this.http.post<GrupoPrivilegio>(this.url_insert, grupoPrivilegio);
  }

  //api de alteração
  api_para_func_alterar(grupoPrivilegio:GrupoPrivilegio): Observable<GrupoPrivilegio>{
    return this.http.put<GrupoPrivilegio>(this.url, grupoPrivilegio);
  }

  //api de eliminação
  api_para_func_eliminar(id:number): Observable<void>{
    return this.http.delete<void>(this.url+"/"+id);
  } 

  

}
