//app-routing.module.ts
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentViewComponent } from './components/student-view/student-view.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

const appRoutes: Routes = [
  { path: 'add', component: StudentAddComponent },
  { path: 'view/:id', component: StudentViewComponent },
  { path: 'list', component: StudentListComponent },  
  { path: 'register', component: SignUpComponent  },  
  { path: 'login', component: LogInComponent  },  
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component : PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

