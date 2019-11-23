import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreateComponent } from './article-create/article-create.component'
import { ArticleTableComponent } from './article-table/article-table.component'


const routes: Routes = [
  { path: 'article-create', component: ArticleCreateComponent },
  { path: 'article-table', component: ArticleTableComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const 
RoutingComponent = [ArticleCreateComponent,ArticleTableComponent];