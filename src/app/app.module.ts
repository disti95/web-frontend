import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleTableComponent } from './article-table/article-table.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { AppRoutingModule , RoutingComponent} from './app-routing.module';
import { MatTableModule } from '@angular/material'  
import { ArticleListService } from './shared/articleList/article-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ArticleTableComponent,
    ArticleCreateComponent, 
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
