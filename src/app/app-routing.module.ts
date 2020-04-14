import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AllNewsComponent } from './all-news/all-news.component';

const routes: Routes = [
    {
        path: '',
        component: AllNewsComponent
    },
    {
        path: 'article/:id',
        component: ArticleComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }