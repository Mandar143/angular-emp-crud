import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable()
export class EmployeeService {
  SERVER_URL:string;
  constructor(private http:HttpClient) {
  }

getAllEmployees() {
    this.SERVER_URL = "http://localhost:3000/user";
    return this.http.get(this.SERVER_URL,{
       headers:new HttpHeaders({
        'Content-Type':'application/json'
     })
   })
}

insertEmp(frm){
    this.SERVER_URL = "http://localhost:3000/user";
    return this.http.post(this.SERVER_URL,frm,{
       headers:new HttpHeaders({
        'Content-Type':'application/json'
     })
   })
  }

deleteEmp(_id:string){
  var id={
    "_id":_id
  }
  let options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    body: id,
  };
  return this.http.delete('http://localhost:3000/user', options);
}

editEmp(_id:string){
  var id={
    "_id":_id
  }
  this.SERVER_URL = "http://localhost:3000/user1";
    return this.http.post(this.SERVER_URL,id,{
       headers:new HttpHeaders({
        'Content-Type':'application/json'
     })
   })
}

updateEmp(frm){
  console.log(frm);
  this.SERVER_URL = "http://localhost:3000/user";
  return this.http.put(this.SERVER_URL,frm,{
     headers:new HttpHeaders({
      'Content-Type':'application/json'
   })
 })
}
}



