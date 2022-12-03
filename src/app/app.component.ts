import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {ArticleService} from "./services/article.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'klimbim';
}
