import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent  } from './app.component';
import {ContentComponent} from './content/content.component';
import {FooterComponent}from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './pages/about/about.component';
import {BlogComponent} from './pages/blog/blog.component';
import {ContactComponent} from './pages/contact/contact.component';
import {AboutworkComponent} from './pages/home/aboutwork/aboutwork.component';
import {HomeComponent} from './pages/home/home.component';
import {HowItsWorksComponent} from './pages/home/how-its-works/how-its-works.component';
import {TestimonialsComponent} from './pages/home/testimonials/testimonials.component';
import {AuditComponent} from './pages/services/audit/audit.component';
import {DeveloperOnDemandsComponent} from './pages/services/developer-on-demands/developer-on-demands.component';
import {GetQuoteFromComponent} from './pages/services/developer_on_demands/get-quote-from/get-quote-from.component';
import {ResumeComponent} from './pages/services/developer_on_demands/resume/resume.component';
import {SelectiveTechnologiesComponent} from './pages/services/developer_on_demands/selective-technologies/selective-technologies.component';
import {VideosComponent} from './pages/services/developer_on_demands/videos/videos.component';
import {OurServicesComponent} from './pages/services/our-services/our-services.component';
import {CurrentUpcomingCompleteComponent} from './pages/services/project/current-upcoming-complete/current-upcoming-complete.component';
import {ProjectDevProcedureComponent} from './pages/services/project/project-dev-procedure/project-dev-procedure.component';
import {ProjectsComponent} from './pages/services/projects/projects.component';
import {ServicesComponent} from './pages/services/services.component';
import {TeamComponent} from './pages/team/team.component';

const routes: Routes = [
  {
    path : "about",
    component : AboutComponent
    
  },
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "services",
    component : ServicesComponent
  },
  { 
    path : "Team",
    component :TeamComponent
  },
  {
    path : "blog",
    component : BlogComponent  },
  {
    path : "About",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "content",
    component : ContentComponent
  }/*,
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "profile",
    component : ProfileComponent
  },
  {
    path : "**",
    component : NotFoundComponent
  }*/
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
