import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AppRoutingModule } from './app-routing.module';
// import { StudentAuthGuard } from './student-auth.guard';

import { AppComponent } from './app.component';
import { ExamComponent } from './student/exam/exam.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
// import { LoginComponent } from './student/login/login.component';
import { SignupComponent } from './student/signup/signup.component';
import { StudentComponent } from './student/student/student.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TrainerLoginComponent } from './login/trainer-login/trainer-login.component';
import { StudentSignupComponent } from './signup/student-signup/student-signup.component';
import { TrainerSignupComponent } from './signup/trainer-signup/trainer-signup.component';
import { AdmNavComponent } from './admin/adm-nav/adm-nav.component';
import { AdmStuAccessComponent } from './admin/adm-stu-access/adm-stu-access.component';
import { AdmTraAccessComponent } from './admin/adm-tra-access/adm-tra-access.component';
import { AdmStudentComponent } from './admin/adm-student/adm-student.component';
import { AdmTarainerComponent } from './admin/adm-tarainer/adm-tarainer.component';
import { UpdateStuComponent } from './admin/update-stu/update-stu.component';
import { UpdateTraComponent } from './admin/update-tra/update-tra.component';
import { AdminTraNavComponent } from './admin/admin-tra-nav/admin-tra-nav.component';
import { AdminTraFsdComponent } from './admin/admin-tra-fsd/admin-tra-fsd.component';
import { AdminTraCsaComponent } from './admin/admin-tra-csa/admin-tra-csa.component';
import { AdminStuNavComponent } from './admin/admin-stu-nav/admin-stu-nav.component';
import { AdminStuFsd02Component } from './admin/admin-stu-fsd02/admin-stu-fsd02.component';
import { AdminStuDsa01Component } from './admin/admin-stu-dsa01/admin-stu-dsa01.component';
import { AdminStuDsa02Component } from './admin/admin-stu-dsa02/admin-stu-dsa02.component';
import { AdminStuCsa1Component } from './admin/admin-stu-csa1/admin-stu-csa1.component';
import { AdminStuCsa2Component } from './admin/admin-stu-csa2/admin-stu-csa2.component';
import { Course1Component } from './student/courses/course1/course1.component';
import { Course2Component } from './student/courses/course2/course2.component';
import { Course3Component } from './student/courses/course3/course3.component';
import { Course4Component } from './student/courses/course4/course4.component';
import { Lrngmaterials1Component } from './student/courses/course1/lrngmaterials1/lrngmaterials1.component';
import { Exams1Component } from './student/courses/course1/exams1/exams1.component';
import { Feedbacks1Component } from './student/courses/course1/feedbacks1/feedbacks1.component';
import { Lrngmaterials2Component } from './student/courses/course2/lrngmaterials2/lrngmaterials2.component';
import { Exams2Component } from './student/courses/course2/exams2/exams2.component';
import { Feedbacks2Component } from './student/courses/course2/feedbacks2/feedbacks2.component';
import { Lrngmaterials3Component } from './student/courses/course3/lrngmaterials3/lrngmaterials3.component';
import { Exams3Component } from './student/courses/course3/exams3/exams3.component';
import { Feedbacks3Component } from './student/courses/course3/feedbacks3/feedbacks3.component';
import { Lrngmaterials4Component } from './student/courses/course4/lrngmaterials4/lrngmaterials4.component';
import { Exams4Component } from './student/courses/course4/exams4/exams4.component';
import { Feedbacks4Component } from './student/courses/course4/feedbacks4/feedbacks4.component';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { TrainerhomeComponent } from './trainer/trainerhome/trainerhome.component';
import { FsdcourseComponent } from './trainer/fsdcourse/fsdcourse.component';

import { TrainerexamsComponent } from './trainer/trainerexams/trainerexams.component';
import { TrainerfeedbackComponent } from './trainer/trainerfeedback/trainerfeedback.component';
import { TrainerlearningmaterialsComponent } from './trainer/trainerlearningmaterials/trainerlearningmaterials.component';
import { JsvideosComponent } from './trainer/jsvideos/jsvideos.component';
import { AngvideoComponent } from './trainer/angvideo/angvideo.component';
import { HtmlcssvideosComponent } from './trainer/htmlcssvideos/htmlcssvideos.component';
import { MateriallistComponent } from './trainer/materiallist/materiallist.component';
import { WelcomeComponent } from './student/courses/course1/welcome/welcome.component';
import { QuestionComponent } from './student/courses/course1/question/question.component';
// import { ExamheaderComponent } from './student/courses/course1/examheader/examheader.component';
import { DSAcourseComponent } from './trainer/dsacourse/dsacourse.component';
import { LearningmaterialComponent } from './trainer/dsacourse/learningmaterial/learningmaterial.component';
import { AdddsalearningmaterialComponent } from './trainer/dsacourse/adddsalearningmaterial/adddsalearningmaterial.component';
import { CSAcourseComponent } from './trainer/csacourse/csacourse.component';
import { AddcsalearningmaterialComponent } from './trainer/csacourse/addcsalearningmaterial/addcsalearningmaterial.component';
import { LearnigmaterialComponent } from './trainer/csacourse/learnigmaterial/learnigmaterial.component';
import { Welcome1Component } from './student/courses/course1/welcome1/welcome1.component';
import { Question1Component } from './student/courses/course1/question1/question1.component';
import { Question2Component } from './student/courses/course1/question2/question2.component';
import { Welcome2Component } from './student/courses/course1/welcome2/welcome2.component';
import { Question1dsComponent } from './student/courses/course3/question1ds/question1ds.component';
import { Welcome1dsComponent } from './student/courses/course3/welcome1ds/welcome1ds.component';
import { Welcome2dsComponent } from './student/courses/course3/welcome2ds/welcome2ds.component';
import { Welcome3dsComponent } from './student/courses/course3/welcome3ds/welcome3ds.component';
import { Question2dsComponent } from './student/courses/course3/question2ds/question2ds.component';
import { Question3dsComponent } from './student/courses/course3/question3ds/question3ds.component';





@NgModule({
  declarations: [
    AppComponent,
    ExamComponent,
    FeedbackComponent,
    LearningMaterialsComponent,
    // LoginComponent,
    SignupComponent,
    StudentComponent,
    HomeComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    TrainerLoginComponent,
    StudentSignupComponent,
    TrainerSignupComponent,
    AdmNavComponent,
    AdmStuAccessComponent,
    AdmTraAccessComponent,
    AdmStudentComponent,
    AdmTarainerComponent,
    UpdateStuComponent,
    UpdateTraComponent,
    AdminTraNavComponent,
    AdminTraFsdComponent,
    AdminStuDsa01Component,
    AdminStuDsa02Component,
    AdminStuCsa1Component,
    AdminStuCsa2Component,
    Course1Component,
    Course2Component,
    Course4Component,
    Exams1Component,
    Lrngmaterials2Component,
    Exams2Component,
    Feedbacks2Component,
    Lrngmaterials3Component,
    Exams3Component,
    Feedbacks3Component,
    Lrngmaterials4Component,
    Exams4Component,
    Feedbacks4Component,
    AdminStuNavComponent,
    AdminStuFsd02Component,
    AdminTraCsaComponent,
    AdminMainComponent,
    TrainerhomeComponent,
    FsdcourseComponent,
    Course3Component,
    TrainerexamsComponent,
    TrainerfeedbackComponent,
    TrainerlearningmaterialsComponent,
    JsvideosComponent,
    AngvideoComponent,
    HtmlcssvideosComponent,
    MateriallistComponent,
    WelcomeComponent,
    QuestionComponent,
    
    Lrngmaterials1Component,
    Feedbacks1Component,
    DSAcourseComponent,
    LearningmaterialComponent,
    AdddsalearningmaterialComponent,
    CSAcourseComponent,
    AddcsalearningmaterialComponent,
    LearnigmaterialComponent,
    Welcome1Component,
    Question1Component,
    Question2Component,
    Welcome2Component,
   
    Question1dsComponent,
    Welcome1dsComponent,
    Welcome2dsComponent,
    Welcome3dsComponent,
    Question2dsComponent,
    Question3dsComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   
  
  ],
  providers: [AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
