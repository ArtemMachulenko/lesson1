import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { User } from "./models/user";
import { Post } from "./models/post";
import { Comment } from "./models/comment";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  users: User[];
  posts: Post[];
  comments: Comment[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>(`https://jsonplaceholder.typicode.com/users?_limit=3`)
      .subscribe(data => {
        this.users = data;
        // console.log(data);
    });

    this.httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
      .subscribe(data => {
        this.posts = data;
        // console.log(data);
    });

    this.httpClient
      .get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?_limit=3`)
      .subscribe(data => {
        this.comments = data;
        // console.log(data);
      });

  }
}
