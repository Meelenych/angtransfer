import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../app.component';

// export interface Car {
//   model: string,
//   year: string
// }

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() myPost: Post = {
    title: "",
    text: "",
  };

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  title = ""
  text = ""

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if (this.title.trim() && this.text.trim()) { // если будут только пробелы, иф не сработает
      const post = {
        title: this.title,
        text: this.text,
      }


      console.log(post);
      this.onAdd.emit(post)
    }

    this.title = '';
    this.text = '';
  }

}
