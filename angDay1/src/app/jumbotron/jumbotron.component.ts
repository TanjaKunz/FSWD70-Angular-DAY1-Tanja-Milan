import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.sass']
})
export class JumbotronComponent implements OnInit {	
	private heroHeading: string;
	private heroText: string;
	private heroBtnText : string;
	private heroBtnUrl:   string;

 	constructor() { 
	 	this.heroHeading =  "Discover Austria!";
	  	this.heroText =  "Discover, experience and enjoy the most beautiful places in Austria!";
	 	this.heroBtnText =  "Learn more";
	  	this.heroBtnUrl =  "" ;
	}
  	ngOnInit() {
  	}

}
