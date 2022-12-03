import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;

  constructor(public authService: AuthService, private articleService: ArticleService) { }

  ngOnInit(): void {
  }

  saveArticle(): void {
    this.article.customer = this.authService.userData.email;
    this.article.published = false;
    this.articleService.create(this.article).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }
}
