import { Component, OnInit,OnChanges } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {
  employeeData:any;
  employeeData1:any;
  name:string;
  salary:string;
  id1:string;
  
  constructor(private emp:EmployeeService) {
    this.ngOnChanges();
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.emp.getAllEmployees().subscribe(res=>{
      console.log(res);
      this.employeeData=res;
    },err=>{
      console.log(err);
    })
  }

  alogin(frm:any){
    if(frm._id!=null){
      console.log(frm);
      this.emp.updateEmp(frm).subscribe(res=>{
        console.log(res);
        this.name="";
        this.salary="";
        this.id1="";
        this.ngOnChanges();
      },
      err=>{
        console.log(err);
      })
    }
    else{
      this.emp.insertEmp(frm).subscribe(res=>{
        console.log(res);
        this.name="";
        this.salary="";
        this.id1="";
        this.ngOnChanges();
      },
      err=>{
        console.log(err);
      })
    }
    
  }

  deleteRow(_id:string){
    console.log(_id);
    this.emp.deleteEmp(_id).subscribe(res=>{
      console.log(res);
      this.name="";
      this.salary="";
      this.id1="";
      this.ngOnChanges();
    },
    err=>{
      console.log(err);
    })
  }
  
  editRow(_id:string){
    this.emp.editEmp(_id).subscribe(res1=>{
      console.log(res1);
      //this.employeeData1=res1;
      this.name=res1['name'];
      this.salary=res1['salary'];
      this.id1=res1['_id'];
    //  console.log(this.docs);
      //this.ngOnChanges();
    },
    err=>{
      console.log(err);
    }) 
  }

}
