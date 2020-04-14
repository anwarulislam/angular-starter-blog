import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Article } from '../interfaces/news.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  currentRoute: string
  article: Article;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {

      this.currentRoute = data.id

      this.data.getSingleNews(this.currentRoute).subscribe((data: Article) => {
        this.article = data
        console.log(this.article)
      })

    })
  }

}
