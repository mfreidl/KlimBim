import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { map } from 'rxjs/operators';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-new-article-list',
  templateUrl: './new-article-list.component.html',
  styleUrls: ['./new-article-list.component.css']
})
export class NewArticleListComponent implements OnInit {
  newArticles?: Article[];
  currentArticle?: Article;
  currentIndex = -1;
  title = '';

  constructor(private authService: AuthService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.retrieveArticles();
  }

  refreshList(): void {
    this.currentArticle = undefined;
    this.currentIndex = -1;
    this.retrieveArticles();
  }

  retrieveArticles(): void {
    this.articleService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.newArticles = data.filter(article => !article.published);
    });
  }

  setActiveArticle(article: Article, index: number): void {
    this.currentArticle = article;
    this.currentIndex = index;
  }

  removeAllArticles(): void {
    this.articleService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
