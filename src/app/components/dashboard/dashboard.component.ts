import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {ArticleService} from "../../services/article.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  constructor(public authService: AuthService, public articleService: ArticleService) {}

  ngOnInit(): void {}
}
