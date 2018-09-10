import { Component, OnInit } from '@angular/core';
import { Emp } from '../models/emp';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.scss'],
  providers:[EmployeeService]
})
export class EmpComponent implements OnInit {

  employee:Emp | any;
  EmpForm:FormGroup;
  oldEmp:Emp | any;
  employeeData:any;
  

  constructor(private EmpDetails: FormBuilder,private employeeSerive:EmployeeService) { }

  ngOnInit() {
    this.employeeSerive.getAllEmployees().subscribe(res=>{
      console.log(res);
      this.employeeData=res;
    },err=>{
      console.log(err);
    })


    const newEmp = new Emp();
        newEmp.clear();
        this.employee = newEmp;
        this.oldEmp = Object.assign({}, newEmp);
        //this.mrdnForm1();
    this.createForm();
  }

  editRow(_id:string){
    this.employeeSerive.editEmp(_id).subscribe(res=>{
      console.log(res);
      this.employee = res;
      this.oldEmp = Object.assign({}, res);
      this.createForm();
    },
    err=>{
      console.log(err);
    }) 
  }

  deleteRow(_id:string){
    console.log(_id);
    this.employeeSerive.deleteEmp(_id).subscribe(res=>{
      console.log(res);
      this.createForm();
    },
    err=>{
      console.log(err);
    })
  }


  createForm(){
    this.EmpForm=this.EmpDetails.group({
      empName:[this.employee.name,Validators.required],
      empSal:[this.employee.salary,Validators.required],
      _id:[this.employee._id]
    })
  }

  onSubmit(){
    console.log(this.EmpForm.value)
    if(this.EmpForm.valid){
      console.log(this.EmpForm.value);
      this.employeeSerive.insertEmp(this.EmpForm.value).subscribe(res=>{
        console.log(res);
      
       });
    }
  }

}
