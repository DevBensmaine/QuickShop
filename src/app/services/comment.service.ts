import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  urlApi = 'http://localhost:3000/comments';


  constructor(private http: HttpClient) { }

   //@Methode Get
   getAll() {
    return this.http.get(this.urlApi);
  }

   //@Methode addComment
   postComment(comment) {
    return this.http.post<Comment>(this.urlApi , comment);
  }

}
