import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //url da api
  private url:string  = "http://localhost:8080/menu";

  constructor(private http:HttpClient) { }

  /*
    API DE CONTAGEM:   100 ---
    API DE SELECT ONE: 200 ---
    API DE SELECT ALL: 300 ---
  */



  ///------ API DE CONTAGEM:  100 --------------------
  ///-- FIM API DE CONTAGEM:  100 --------------------




  ///------ API DE SELECT ONE:  200 ------------------
  ///-- FIM API DE SELECT ONE:  200 ------------------


  

  ///------ API DE SELECT ALL:  300 ------------------

    //find all ------------------------
    api301_para_func301_FindAll_PorId():Observable<Menu[]>{
        return this.http.get<Menu[]>(this.url);
    }

    

    
  ///-- FIM API DE SELECT ALL:  300 ------------------



  ///---------- API DE INSERÇÃO: 400 -----------------

    //insert one ------------------------
    api400_para_func400_inserir(menu:Menu):Observable<Menu>{
      return this.http.post<Menu>(this.url, menu);
    }




  ///------ FIM API DE INSERÇÃO: 400 -----------------
  



  ///---------- API DE ALTERAÇÃO: 500 ----------------
  
    //alter one ------------------------
    api500_para_func500_alteracao(menu:Menu):Observable<Menu>{
      return this.http.post<Menu>(this.url, menu);
    }



  ///------ FIM API DE ALTERAÇÃO: 500 ----------------



  ///---------- API DE ELIMINAÇÃO: 600 ---------------
     
    //delete one------------------------
    api600_para_func600_eliminar(id:number):Observable<void>{
      return this.http.delete<void>(this.url+"/"+id);
    }




  ///------ FIM API DE ELIMINAÇÃO: 600 ---------------


}
