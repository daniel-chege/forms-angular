import { Component, Input } from '@angular/core';
import { Post } from '../service/post.service.service';
import { CommentService, Comment } from '../service/comment.service.service';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from '../commentlist/commentlist.component';

@Component({
  selector: 'app-postitem',
  standalone: true,
  templateUrl: './postitem.component.html',
  imports:[CommonModule,  CommentListComponent],
  styleUrls: ['./postitem.component.css']
})
export class PostItemComponent {
  @Input() post!: Post;
  comments: Comment[] = [];
  showComments: boolean = false;

  constructor(private commentService: CommentService) {}

  toggleComments(): void {
    this.showComments = !this.showComments;
    if (this.showComments) {
      this.commentService.getCommentsByPost(this.post.id).subscribe(data => {
        this.comments = data;
      });
    }
  }
}
