import { BookApiService } from './../book-api.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {

  bookName: string = '';
  issuerName: string = '';
  issueDateString: string | null = '';
  dueDateString: string | null = '';
  
  constructor(private datePipe: DatePipe, private bookApiService: BookApiService, private router: Router) {}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  submitDetails(data: any) {
    this.bookName = data.bookName;
    this.issuerName = data.issuerName;
    this.issueDateString = this.datePipe.transform(
      new Date(data.issueDate),
      'dd-MM-yyyy'
    );
    let originalDate = new Date(data.issueDate);
    console.log('original date: ', originalDate);
    let dueDate = new Date();
    dueDate.setDate(originalDate.getDate() + 14);
    this.dueDateString = this.datePipe.transform(
      new Date(dueDate),
      'dd-MM-yyyy'
    );

    const request = {
      'bookName' : this.bookName,
      'issuerName' : this.issuerName,
      'issueDateString' : this.issueDateString,
      'dueDateString' : this.dueDateString
    }
    console.log('request obj', request);
    this.bookApiService.submitBookBooking(request).subscribe((response) => {

      if(response && response.success === true) {
        console.log('api response',response);
        this.router.navigate(['booking-completed']);
      }
      console.log('api response',response);
    });


    console.log(this.bookName);
    console.log(this.issuerName);
    console.log(this.issueDateString);
    console.log(this.dueDateString);
  }
  getDueDate() {
    return this.dueDateString;
  }
}
