import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './components/profile/profile.component';
import { NewArticleListComponent } from './components/new-article-list/new-article-list.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { FactsComponent } from './components/facts/facts.component';
import { ServicesComponent } from './components/services/services.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    ProfileComponent,
    NewArticleListComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    FactsComponent,
    ServicesComponent,
    CallToActionComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    PortfolioDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}
