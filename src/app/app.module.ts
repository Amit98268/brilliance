import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutworkComponent } from './pages/home/aboutwork/aboutwork.component';
import { HowItsWorksComponent } from './pages/home/how-its-works/how-its-works.component';
import { TestimonialsComponent } from './pages/home/testimonials/testimonials.component';
import { DeveloperOnDemandsComponent } from './pages/services/developer-on-demands/developer-on-demands.component';
import { ProjectsComponent } from './pages/services/projects/projects.component';
import { OurServicesComponent } from './pages/services/our-services/our-services.component';
import { AuditComponent } from './pages/services/audit/audit.component';
import { BeforeComponent } from './pages/services/audit/before/before.component';
import { DevelopmentComponent } from './pages/services/audit/development/development.component';
import { WireframeComponent } from './pages/services/audit/wireframe/wireframe.component';
import { CurrentUpcomingCompleteComponent } from './pages/services/project/current-upcoming-complete/current-upcoming-complete.component';
import { ProjectDevProcedureComponent } from './pages/services/project/project-dev-procedure/project-dev-procedure.component';
import { VideosComponent } from './pages/services/developer_on_demands/videos/videos.component';
import { ResumeComponent } from './pages/services/developer_on_demands/resume/resume.component';
import { GetQuoteFromComponent } from './pages/services/developer_on_demands/get-quote-from/get-quote-from.component';
import { SelectiveTechnologiesComponent } from './pages/services/developer_on_demands/selective-technologies/selective-technologies.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    TeamComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    AboutworkComponent,
    HowItsWorksComponent,
    TestimonialsComponent,
    DeveloperOnDemandsComponent,
    ProjectsComponent,
    OurServicesComponent,
    AuditComponent,
    BeforeComponent,
    DevelopmentComponent,
    WireframeComponent,
    CurrentUpcomingCompleteComponent,
    ProjectDevProcedureComponent,
    VideosComponent,
    ResumeComponent,
    GetQuoteFromComponent,
    SelectiveTechnologiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
