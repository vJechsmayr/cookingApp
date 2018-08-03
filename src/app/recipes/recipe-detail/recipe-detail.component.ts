import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  status: string = "false";

  constructor() { }

  ngOnInit() {
  }

serverStatus(){
  return "true";
}

}
