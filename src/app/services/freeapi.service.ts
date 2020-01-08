import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Posts } from '../classes/posts';
@Injectable({
    'providedIn':"root"
})
export class freeApiService {

    constructor(private httpclient : HttpClient){

    }
    getComments():Observable<any>{
        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    }
    getCommentsByParams(): Observable<any>{
        let paramOne = new HttpParams().set('userId','1');
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts", 
                {params: paramOne}
                );
    }
    posts(opost:Posts): Observable<any>{
        return this.httpclient.post("https://jsonplaceholder.typicode.com/posts",opost)
    }
}