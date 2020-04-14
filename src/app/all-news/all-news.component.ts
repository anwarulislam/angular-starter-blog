import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/news.interface';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit {

  title: string

  articles: Article[]
  isLoading: boolean;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.isLoading = true
    this.data.getNews().subscribe((data: any) => {
      this.articles = data
      this.isLoading = false
    })

  }

}


