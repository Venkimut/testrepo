import { Component } from '@angular/core';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';
import { freeApiService } from './services/freeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meanudemy';
  listComments: Comments[];
  listCommentsPost: Posts[];
  listCommentsPostMethod: Posts;
  constructor(private freeapiservice$: freeApiService){

  }
  
  ngOnInit(){
    this.freeapiservice$.getComments().subscribe( data => {
      this.listComments = data.slice(0,10);
    });
    this.freeapiservice$.getCommentsByParams().subscribe( data => {
      this.listCommentsPost = data.slice(0,10);
    });

    let oposts  = new Posts();
    oposts.body = "testbody";
    oposts.title = "testtitle";
    oposts.userId = 5;
    this.freeapiservice$.posts(oposts).subscribe( data => {
      this.listCommentsPostMethod = data;
      console.log(data)
    });
  }
}
