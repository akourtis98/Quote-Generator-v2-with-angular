import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondone',
  templateUrl: './secondone.component.html',
  styleUrls: ['./secondone.component.css']
})
export class SecondoneComponent implements OnInit {
  age: number;
  quotes = [{
    quote: "Defeat is not the worst of failures. Not to have tried is the true failure.",
    name: "Edward Woodberry"
  }, {
     quote: "We are what we repeatedly do. Excellence then, is not an act, but a habit.",
    name: "Aristotle"
  },{quote: "That which does not kill us makes us stronger.",
    name: "Friedrich Nietzsche"
  },{quote: " Be careful the environment you choose for it will shape you; be careful the friends you choose for you will become like them. ",
    name: "W. Clement Stone"
  },{quote: "Never argue with stupid people, they will drag you down to their level and then beat you with experience. ",
    name: "Mark Twain"
  },{quote: " Insanity: Doing the same thing over and over again and expecting different results. ",
    name: " Albert Einstein"
  },{quote: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers. ",
    name: "Charles W. Eliot"
  },{quote: "Knowing is not enough; we must apply. Willing is not enough: we must do. ",
    name: "Bruce Lee"
  },{quote: "Whether you think you can or whether you think you can’t, you’re right.",
    name: "Henry Ford"
  },{quote: "I’d rather be hated for who I am, than loved for who I am not.",
    name: "Kurt Cobain"
  },{quote: "Never let your memories be greater than your dream. ",
    name: "Doug Ivester"
  },{quote: " Be yourself; everyone else is already taken.",
    name: " Oscar Wilde"
  }];
  constructor() {
    this.age = 0;
   }

  ngOnInit() {
  }
   clickMeForward(){
     if (this.age == 11)
       this.age = 0;
     this.age++
  }
  clickMeBackward(){
    if (this.age == 0)
      this.age = 11;
    this.age--
  }
}