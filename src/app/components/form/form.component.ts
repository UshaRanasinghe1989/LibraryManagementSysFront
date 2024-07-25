import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private http:HttpClient){}
  
  public book = {
    bookName : undefined,
    isbn : undefined,
    price : undefined
  }  

  public addBook(){
    this.http.post("http://localhost:8001/book", this.book).subscribe(
      (data) => {
        Swal.fire({
          title: "Saved Book",
          text: "New book record saved successfully !",
          icon: "success"
        });        
      }
    )
  }
}
