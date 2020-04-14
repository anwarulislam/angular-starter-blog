import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './interfaces/news.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string

  articles: Article[]
  isLoading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isLoading = true

  }
}
