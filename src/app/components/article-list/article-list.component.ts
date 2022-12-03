import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article.model';
import { map } from 'rxjs/operators';
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles?: Article[];
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
      if(this.authService.userData.email == "mfreidl54@gmail.com"){
        this.articles = data;
      }
      else{
        this.articles = data.filter(article => article.customer == this.authService.userData.email);
      }
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
