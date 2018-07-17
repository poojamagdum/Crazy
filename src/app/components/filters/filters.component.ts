import { Component, OnInit } from '@angular/core';
import { WomenPageComponent } from "../women-page/women-page.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
childvalue:string="from parent";
sizes=['M','L','S'];
  constructor() { }

  ngOnInit() {
  }

}
