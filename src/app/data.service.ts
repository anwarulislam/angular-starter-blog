import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './interfaces/news.interface';
import { map } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private allNews = new BehaviorSubject<Article[]>([])


  getNews() {

    if (this.allNews.value.length) {
      return this.allNews
    }
    return this.http.get('https://jsonplaceholder.typicode.com/posts/')
      .pipe(map((data: Article[]) => {
        this.allNews.next(data)
        return data
      }))
  }
  getSingleNews(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
}
