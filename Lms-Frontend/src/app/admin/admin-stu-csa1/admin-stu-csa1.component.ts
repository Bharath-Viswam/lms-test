import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../adm-stu-access/studentaccess.model';
import { AccessService } from 'src/app/access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-stu-csa1',
  templateUrl: './admin-stu-csa1.component.html',
  styleUrls: ['./admin-stu-csa1.component.css']
})
export class AdminStuCsa1Component implements OnInit {
  students:StudentModel |any;
  nodata=false;
  constructor(private accessService :AccessService ,private router:Router) { }

  ngOnInit(): void {
      
    this.accessService.aprovedStuListcsa01().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
  
    
      if (this.students.length === 0) {
        this.nodata=true;
     } else {
      this.nodata=false
    }
   
      }) 
  }
  // delete student
deleteStudent(student:any){
  this.accessService.deleteStudent(student._id)
  .subscribe((data)=>{
    this.students =this.students.filter((p: any)=>p!== student);
    this.ngOnInit();
   });
}
// edit student
editStudent(student:any){
localStorage.setItem("editStudentId",student._id.toString())
this.router.navigate(['stuudt']);
}
}

  
