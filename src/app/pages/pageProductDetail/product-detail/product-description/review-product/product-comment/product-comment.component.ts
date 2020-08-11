import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../../../../../services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {

  commentList:any[] = [];
  mycomment:any = {
    id:'' ,
    productId:'',
    email:'',
    name: '',
    note:'',
    date:  new Date(),
    comment:''
   }

  constructor(private commentService:CommentService,  private route: ActivatedRoute ) { }


  addComment(){

    alert('ok');

    this.mycomment.productId = this.route.snapshot.paramMap.get("id")


    this.commentService.postComment(this.mycomment)
    .subscribe((comment) => {
     this.commentList = [comment ,...this.commentList]
     console.log("ok added")
    })

  }

  ngOnInit(): void {

    this.commentService.getAll().subscribe((data: any[]) => {
      this.commentList = data.filter((comment) => comment.productId === this.route.snapshot.paramMap.get("id"));
    })
  }

}
