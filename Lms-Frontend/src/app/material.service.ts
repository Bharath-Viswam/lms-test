import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public http:HttpClient) { }
  // getMaterials(){
   
  //   return this.http.get('http://localhost:3000/materials');
  // }
  Addmaterial(formdata:FormData){
    return this.http.post<any>('http://localhost:3000/traineraddmaterial',formdata)
    .subscribe(
      (res)=>console.log(res)
      
    );
  }
    // get the materials
    getMaterial(){
      return this.http.get('http://localhost:3000/materials');
    }

    // add material dsa
    Addmaterialdsa(formdata:FormData){
      return this.http.post<any>('http://localhost:3000/trainerdsaaddmaterial',formdata)
    .subscribe(
      (res)=>console.log(res)
      
    );
    }
    // get dsa material
    getMaterialdsa(){
      return this.http.get('http://localhost:3000/materialsdsa');
    }
    // add csd material
    Addmaterialcsa(formdata:FormData){
      return this.http.post<any>('http://localhost:3000/trainercsaaddmaterial',formdata)
    .subscribe(
      (res)=>console.log(res)
      
    );

    }
     // get csa material
     getMaterialcsa(){
      return this.http.get('http://localhost:3000/materialscsa');
     }
}
