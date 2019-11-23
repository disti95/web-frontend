import { Component, OnInit } from '@angular/core';
import { ArticleListService } from '../shared/articleList/article-list.service';

export interface Article {
  id: number;
  name: String;
  price: number;
}

const DATA: Article[] = [
  {id:1, name:'first', price:1.23},
  {id:2, name:'second', price:1.55}
]

@Component({
  selector: 'app-article-table',
  templateUrl: './article-table.component.html',
  styleUrls: ['./article-table.component.css']
})
export class ArticleTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price'];
  dataSource = DATA;

  constructor(private myservice: ArticleListService) {
    
   }

   data

   ngOnInit() {
    this.myservice.getData().subscribe((data) => {
       this.data = Array.from(Object.keys(data), k=>data[k]);
       console.log(this.data);
    });
 }

}
