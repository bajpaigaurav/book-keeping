import { Observable, takeWhile, tap, timer } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-completed',
  templateUrl: './registration-completed.component.html',
  styleUrls: ['./registration-completed.component.css']
})
export class RegistrationCompletedComponent implements OnInit {
  counter: number = 1;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.gotoHomePage();
  }


  gotoHomePage() {
    this.counter = 5;
    timer(1000, 1000)
    .pipe(
      takeWhile( () => this.counter > 0 ),
      tap(() => this.counter--)
    )
    .subscribe( () => {
      //console.log(this.counter);
      this.counter === 0 && this.goHome();
    });
  
  }

  goHome() {
    this.router.navigate(['home']);
  }

}
