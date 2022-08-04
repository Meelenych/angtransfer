import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() myPost: Post = {
    title: "",
    text: "",
    id: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
