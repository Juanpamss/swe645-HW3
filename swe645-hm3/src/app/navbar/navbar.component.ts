import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Parameters received to change the info displayed
  @Input() surveyClass: string;
  @Input() surveyListClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
