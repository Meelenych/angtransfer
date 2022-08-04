import { Component } from '@angular/core';


export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angtransfer';

  posts: Post[] = [
    { title: 'BMW', text: "A German car brand", id: 1 },
    { title: 'Ford', text: "An American car brand", id: 2 },
  ]
}
