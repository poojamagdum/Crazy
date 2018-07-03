import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    var countDownDate = new Date("Jul 4, 2018 18:37:25").getTime();
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =  hours + "h "
      + minutes + "m " + seconds + "s ";
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
  }, 1000);

  }

}
