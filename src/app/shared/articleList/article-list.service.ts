import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleListService {

  private finaldata = [];
  private apiurl = "http://localhost:8080/myapp/postgres/test/native";
  constructor(private http: HttpClient) { }

  showTodayDate() { 
    let ndate = new Date(); 
    return ndate; 
 } 
 
  getData() {
    return this.http.get(this.apiurl);
  }

}
