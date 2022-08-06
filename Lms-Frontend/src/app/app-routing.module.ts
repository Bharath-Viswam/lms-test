
import { Feedbacks2Component } from './student/courses/course2/feedbacks2/feedbacks2.component';
import { Feedbacks1Component } from './student/courses/course1/feedbacks1/feedbacks1.component';
import { Exams2Component } from './student/courses/course2/exams2/exams2.component';
import { Exams1Component } from './student/courses/course1/exams1/exams1.component';
import { Feedbacks4Component } from './student/courses/course4/feedbacks4/feedbacks4.component';
import { Feedbacks3Component } from './student/courses/course3/feedbacks3/feedbacks3.component';
import { Lrngmaterials4Component } from './student/courses/course4/lrngmaterials4/lrngmaterials4.component';
import { Lrngmaterials3Component } from './student/courses/course3/lrngmaterials3/lrngmaterials3.component';
import { Lrngmaterials2Component } from './student/courses/course2/lrngmaterials2/lrngmaterials2.component';
import { Lrngmaterials1Component } from './student/courses/course1/lrngmaterials1/lrngmaterials1.component';
import { Exams4Component } from './student/courses/course4/exams4/exams4.component';
import { Exams3Component } from './student/courses/course3/exams3/exams3.component';
import { Course4Component } from './student/courses/course4/course4.component';
import { Course3Component } from './student/courses/course3/course3.component';
import { Course2Component } from './student/courses/course2/course2.component';
import { Course1Component } from './student/courses/course1/course1.component';

import { Exam2Component } from './student/exam/exam2/exam2.component';

import { Exam1Component } from './student/exam/exam1/exam1.component';
import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { ExamComponent } from './student/exam/exam.component';
import { StudentComponent } from './student/student/student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TrainerLoginComponent } from './login/trainer-login/trainer-login.component';
import { StudentSignupComponent } from './signup/student-signup/student-signup.component';
import { TrainerSignupComponent } from './signup/trainer-signup/trainer-signup.component';
import { AdmStuAccessComponent } from './admin/adm-stu-access/adm-stu-access.component';
import { AdmTraAccessComponent } from './admin/adm-tra-access/adm-tra-access.component';
import { AdmTarainerComponent } from './admin/adm-tarainer/adm-tarainer.component';
import { AdmStudentComponent } from './admin/adm-student/adm-student.component';
import { AuthGuard } from './auth.guard';
import { UpdateStuComponent } from './admin/update-stu/update-stu.component';
import { UpdateTraComponent } from './admin/update-tra/update-tra.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminTraFsdComponent } from './admin/admin-tra-fsd/admin-tra-fsd.component';
import { AdminTraCsaComponent } from './admin/admin-tra-csa/admin-tra-csa.component';
import { AdminStuFsd02Component } from './admin/admin-stu-fsd02/admin-stu-fsd02.component';
import { AdminStuDsa01Component } from './admin/admin-stu-dsa01/admin-stu-dsa01.component';
import { AdminStuDsa02Component } from './admin/admin-stu-dsa02/admin-stu-dsa02.component';
import { AdminStuCsa1Component } from './admin/admin-stu-csa1/admin-stu-csa1.component';
import { AdminStuCsa2Component } from './admin/admin-stu-csa2/admin-stu-csa2.component';
// import { AdminMainComponent } from './admin/admin-main/admin-main.component';
// import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { TrainerhomeComponent } from './trainer/trainerhome/trainerhome.component';
import { FsdcourseComponent } from './trainer/fsdcourse/fsdcourse.component';

import { TrainerexamsComponent } from './trainer/trainerexams/trainerexams.component';
import { TrainerfeedbackComponent } from './trainer/trainerfeedback/trainerfeedback.component';
import { TrainerlearningmaterialsComponent } from './trainer/trainerlearningmaterials/trainerlearningmaterials.component';
import { HtmlcssvideosComponent } from './trainer/htmlcssvideos/htmlcssvideos.component';
import { JsvideosComponent } from './trainer/jsvideos/jsvideos.component';
import { AngvideoComponent } from './trainer/angvideo/angvideo.component';
import { MateriallistComponent } from './trainer/materiallist/materiallist.component';
import { WelcomeComponent } from './student/courses/course1/welcome/welcome.component';
import { QuestionComponent } from './student/courses/course1/question/question.component';
// import { ExamheaderComponent } from './student/courses/course1/examheader/examheader.component';
import { DSAcourseComponent } from './trainer/dsacourse/dsacourse.component';
import { LearningmaterialComponent } from './trainer/dsacourse/learningmaterial/learningmaterial.component';
import { AdddsalearningmaterialComponent } from './trainer/dsacourse/adddsalearningmaterial/adddsalearningmaterial.component';
import { CSAcourseComponent } from './trainer/csacourse/csacourse.component';
import { LearnigmaterialComponent } from './trainer/csacourse/learnigmaterial/learnigmaterial.component';
import { AddcsalearningmaterialComponent } from './trainer/csacourse/addcsalearningmaterial/addcsalearningmaterial.component';
import { Welcome1Component } from './student/courses/course1/welcome1/welcome1.component';
import { Question1Component } from './student/courses/course1/question1/question1.component';
import { Question2Component } from './student/courses/course1/question2/question2.component';
import { Welcome2Component } from './student/courses/course1/welcome2/welcome2.component';

import { StudentAuthGuard } from './student-auth.guard';
import { TrainerAuthGuard } from './trainer-auth.guard';
import { Welcome1dsComponent } from './student/courses/course3/welcome1ds/welcome1ds.component';
import { Welcome2dsComponent } from './student/courses/course3/welcome2ds/welcome2ds.component';
import { Welcome3dsComponent } from './student/courses/course3/welcome3ds/welcome3ds.component';
import { Question1dsComponent } from './student/courses/course3/question1ds/question1ds.component';
import { Question2dsComponent } from './student/courses/course3/question2ds/question2ds.component';
import { Question3dsComponent } from './student/courses/course3/question3ds/question3ds.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'adlogin',component:AdminLoginComponent},
{path:'stulogin',component:StudentLoginComponent},
{path:'tralogin',component:TrainerLoginComponent},
{path:'stureg',component:StudentSignupComponent},
{path:'trareg',component:TrainerSignupComponent},
{path:'stuaccess',canActivate:[AuthGuard],component:AdmStuAccessComponent},
{path:'traaccess',canActivate:[AuthGuard],component:AdmTraAccessComponent},
{path:'trahome',canActivate:[AuthGuard],component:AdmTarainerComponent},
{path:'stuhome',canActivate:[AuthGuard],component:AdmStudentComponent},
{path:'stuudt',canActivate:[AuthGuard],component:UpdateStuComponent},
{path:'traudt',canActivate:[AuthGuard],component:UpdateTraComponent},
{path:'student/stuexams',canActivate:[StudentAuthGuard], component:ExamComponent},
{path:'student/stuexams/exam1',canActivate:[StudentAuthGuard],component:Exam1Component},
{path:'student/stuexams/exam2',canActivate:[StudentAuthGuard],component:Exam2Component},
{path:'student/stufeedbacks',canActivate:[StudentAuthGuard],component:FeedbackComponent},
{path:'student',component:StudentComponent},
{path:'student/lrngmaterials',canActivate:[StudentAuthGuard],component:LearningMaterialsComponent},
{path:'courses',component:CoursesComponent},
// admin
{path:'admfsd',canActivate:[AuthGuard],component:AdminTraFsdComponent},
{path:'admcsa',canActivate:[AuthGuard],component:AdminTraCsaComponent},
{path:'adstfsd2',canActivate:[AuthGuard],component:AdminStuFsd02Component},
{path:'adstdsa1',canActivate:[AuthGuard],component:AdminStuDsa01Component},
{path:'adstdsa2',canActivate:[AuthGuard],component:AdminStuDsa02Component},
{path:'adstcsa1',canActivate:[AuthGuard],component:AdminStuCsa1Component},
{path:'adstcsa2',canActivate:[AuthGuard],component:AdminStuCsa2Component},
// student
{path:'student/course1',canActivate:[StudentAuthGuard],component:Course1Component},
{path:'student/course2',canActivate:[StudentAuthGuard],component:Course2Component},
{path:'student/course3',canActivate:[StudentAuthGuard],component:Course3Component,children:[{
  path:'feedbacks3',canActivate:[StudentAuthGuard],component:Feedbacks3Component
}]},
{path:'student/course4',canActivate:[StudentAuthGuard],component:Course4Component},
{path:'student/course1/exam1',canActivate:[StudentAuthGuard],component:Exams1Component},
{path:'student/course2/exam2',canActivate:[StudentAuthGuard],component:Exams2Component},
{path:'student/course3/exam3',canActivate:[StudentAuthGuard],component:Exams3Component},
{path:'student/course4/exam4',canActivate:[StudentAuthGuard],component:Exams4Component},
{path:'student/course1/lrngmaterials1',canActivate:[StudentAuthGuard],component:Lrngmaterials1Component},
{path:'student/course2/lrngmaterials2',canActivate:[StudentAuthGuard],component:Lrngmaterials2Component},
{path:'student/course3/lrngmaterials3',canActivate:[StudentAuthGuard],component:Lrngmaterials3Component},
{path:'student/course4/lrngmaterials4',canActivate:[StudentAuthGuard],component:Lrngmaterials4Component},
{path:'student/course1/feedbacks1',canActivate:[StudentAuthGuard],component:Feedbacks1Component},
{path:'student/course2/feedbacks2',canActivate:[StudentAuthGuard],component:Feedbacks2Component},
{path:'student/course3/feedbacks3',canActivate:[StudentAuthGuard],component:Feedbacks3Component},
{path:'student/course4/feedbacks4',canActivate:[StudentAuthGuard],component:Feedbacks4Component},
//  {path:'admhome',component:AdminMainComponent}
// {path:'admhome',component:AdminMainComponent},
{path:'trainer/trainerhome',component:TrainerhomeComponent},
{path:'trainer/fsdcourse',canActivate:[TrainerAuthGuard],component:FsdcourseComponent},
{path:'trainer/trainerlearningmaterials',canActivate:[TrainerAuthGuard],component:TrainerlearningmaterialsComponent},
{path:'trainer/trainerexams',canActivate:[TrainerAuthGuard],component:TrainerexamsComponent},
{path:'trainer/trainerfeedback',canActivate:[TrainerAuthGuard],component:TrainerfeedbackComponent},
{path:'trainer/htmlcssvideos',component:HtmlcssvideosComponent},
{path:'trainer/jsvideos',component:JsvideosComponent},
{path:'trainer/angvideo',component:AngvideoComponent},
{path:'trainer/materiallist',canActivate:[TrainerAuthGuard],component:MateriallistComponent},
{path:'student/exam/welcome',canActivate:[TrainerAuthGuard],component:WelcomeComponent},
{path:'student/exam/question',canActivate:[TrainerAuthGuard],component:QuestionComponent},
// {path:'student/exam/examheader',component:ExamheaderComponent},

{path:'trainerdsa',canActivate:[TrainerAuthGuard],component:DSAcourseComponent},
{path:'learmatedsa',canActivate:[TrainerAuthGuard],component:LearningmaterialComponent},
{path:'adddsalearmat',canActivate:[TrainerAuthGuard],component:AdddsalearningmaterialComponent},
{path:'trainercsa',canActivate:[TrainerAuthGuard],component:CSAcourseComponent},
{path:'learmatcsa',canActivate:[TrainerAuthGuard],component:LearnigmaterialComponent},
{path:'addcsalearmat',canActivate:[TrainerAuthGuard],component:AddcsalearningmaterialComponent},


{path:'trainerdsa',component:DSAcourseComponent},
{path:'learmatedsa',component:LearningmaterialComponent},
{path:'adddsalearmat',component:AdddsalearningmaterialComponent},
{path:'trainercsa',component:CSAcourseComponent},
{path:'learmatcsa',component:LearnigmaterialComponent},
{path:'addcsalearmat',component:AddcsalearningmaterialComponent},
{path:'student/exam/welcome1',component:Welcome1Component},
{path:'student/exam/welcome2',component:Welcome2Component},
{path:'student/exam/question1',component:Question1Component},
{path:'student/exam/question2',component:Question2Component},
{path:'student/exam/question2',component:Question2Component},
{path:'student/exam/welcome1ds',component:Welcome1dsComponent},
{path:'student/exam/welcome2ds',component:Welcome2dsComponent},
{path:'student/exam/welcome3ds',component:Welcome3dsComponent},
{path:'student/exam/question1ds',component:Question1dsComponent},
{path:'student/exam/question2ds',component:Question2dsComponent},
{path:'student/exam/question3ds',component:Question3dsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
