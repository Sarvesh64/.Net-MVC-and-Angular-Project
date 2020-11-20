import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:55659/api";
readonly PhotoUrl = "http://localhost:55659/Photos/";
  constructor(private Http:HttpClient) { }
//For Department
  getDepList():Observable<any[]>{
    return this.Http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.Http.post(this.APIUrl+'/Department', val);
  }

  updateDepartment(val:any){
    return this.Http.put(this.APIUrl+'/Department', val);
  }

  deleteDepartment(val:any){
    return this.Http.delete(this.APIUrl+'/Department/' + val);
  }

//For Employee
  getEmpList():Observable<any[]>{
    return this.Http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.Http.post(this.APIUrl+'/Employee', val);
  }

  updateEmployee(val:any){
    return this.Http.put(this.APIUrl+'/Employee', val);
  }

  deleteEmployee(val:any){
    return this.Http.delete(this.APIUrl+'/Employee/' + val);
  }

  UploadPhoto(val:any){
    return this.Http.post(this.APIUrl + '/Employee/SaveFile', val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.Http.get<any[]>(this.APIUrl + '/Employee/GetAllDepartmentNames');
  }
}
