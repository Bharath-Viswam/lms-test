import { Component, OnInit } from '@angular/core';
import { StudentModel } from './studentaccess.model';
import { AccessService } from 'src/app/access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-stu-access',
  templateUrl: './adm-stu-access.component.html',
  styleUrls: ['./adm-stu-access.component.css']
})
export class AdmStuAccessComponent implements OnInit {

  studentls={
    stucouid:''
  }
  title:string='Enroll Students';
  students:StudentModel |any;
  nodata=false;
      date:string=new Date().toLocaleString().slice(0, 9);
  constructor(private accessService:AccessService,private router:Router) { }

  ngOnInit(): void {
    this.accessService.getstudetails().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
      // find any student is present to approve
     
      if (this.students.length === 0) {
        this.nodata=true;
     } else {
      this.nodata=false
    }
    });
  }
  // approve student
  approveStudent(student: any){
    student.studate=this.date;
    student.stucouid=this.studentls.stucouid;
    this.accessService.approveStudent(student).subscribe((data)=>{
       this.ngOnInit();
    });

  }
  // decline student
  declineStudent(student:any){
this.accessService.declineStudent(student._id)
.subscribe((data)=>{
    this.ngOnInit();
 });
  }

}
