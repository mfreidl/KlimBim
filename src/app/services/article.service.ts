import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private dbPath = '/articles';

  articleRef: AngularFireList<Article>;

  constructor(private db: AngularFireDatabase) {
    this.articleRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Article> {
    return this.articleRef;
  }

  create(article: Article): any {
    return this.articleRef.push(article);
  }

  update(key: string, value: any): Promise<void> {
    return this.articleRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.articleRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.articleRef.remove();
  }
}
