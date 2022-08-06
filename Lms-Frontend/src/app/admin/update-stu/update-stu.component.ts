import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../adm-stu-access/studentaccess.model';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stu',
  templateUrl: './update-stu.component.html',
  styleUrls: ['./update-stu.component.css']
})
export class UpdateStuComponent implements OnInit {
  image:string='../../../assets/images/ba8.jpg';
  constructor(private authService:AuthService,private router:Router) { }

  studentItem = new StudentModel('','','','','','','','','',true);

  ngOnInit(): void {
    console.log('initialisation');
    let studenttId=localStorage.getItem("editStudentId");
    this.authService.getStudentUpdate(studenttId).subscribe((data)=>{
      this.studentItem=JSON.parse(JSON.stringify(data));
    })
  }
  editStudentprof(){
    this.authService.editStudent(this.studentItem );
    alert('Student profile sucessfully updated');
    // this.router.navigate(["stuhome"]);
  }
}
