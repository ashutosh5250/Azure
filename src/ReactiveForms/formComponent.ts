import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
   selector:'app-root',
   templateUrl:"form.html",
   styles:`
   
  table, th, td {
    border: 1px solid black;
  }

  th, td {
    padding: 8px;
    text-align: left;
  }
   `,
   standalone:false
})
export class formClass{
   // profileGroup = new FormGroup({
   //    name:new FormControl(),
   //    password:new FormControl(),
   //    age:new FormControl() 
   // })
   // submit(){
   //    console.log(this.profileGroup.value)
   // }
// name = new FormControl('ashu');
// password = new FormControl('snehal');
// show(){
//    console.log(this.name.value,this.password.value)
// }
employeeProfile:any;
index:any = -1;
Employees:any[]=[];
constructor(private fb:FormBuilder) {
  this.newEmployee();
}
newEmployee() {
   this.employeeProfile = this.fb.group({
     name: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
     email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(50)])],
     phone: ['', Validators.compose([Validators.required, Validators.pattern('^(?:(?:\\+|0{0,2})91(\\s*[-]\\s*)?|[0]?)?[789]\\d{9}$')])],
     age: ['',Validators.compose([Validators.required,Validators.min(21)])]
   });
 }
AddEmployee(e:any){
  if(this.index==-1){
    this.Employees.push(e);
     this.newEmployee();
  }else{
    this.Employees[this.index] =e;
    this.index=-1;
    this.newEmployee();
  }
 
}
ViewEmployee(E:any,i:any){
  this.index=i;
    this.employeeProfile = this.fb.group({
     name: [E.name, Validators.compose([Validators.required, Validators.minLength(4)])],
     email: [E.email, Validators.compose([Validators.required, Validators.email, Validators.maxLength(50)])],
     phone: [E.phone, Validators.compose([Validators.required, Validators.pattern('^(?:(?:\\+|0{0,2})91(\\s*[-]\\s*)?|[0]?)?[789]\\d{9}$')])],
     age: [E.age,Validators.compose([Validators.required,Validators.min(21)])]
   });
}
DeleteEmployee(i:any){
   this.Employees.splice(i,1);
}
}
