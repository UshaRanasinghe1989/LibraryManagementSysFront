import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-books',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './view-books.component.html',
  styleUrl: './view-books.component.css'
})
export class ViewBooksComponent implements OnInit {
  public bookList:any;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.retrieveBooks();
  }  

  public retrieveBooks(){
    this.http.get("http://localhost:8001/book").subscribe(
      res => {
        this.bookList = res;
      }
    )
  }
}
