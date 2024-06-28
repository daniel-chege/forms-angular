import { PostItemComponent } from './../postitem/postitem.component';
import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../service/post.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postlist',
  standalone: true,
  templateUrl: './postlist.component.html',
  imports: [PostItemComponent,CommonModule],
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  userId: number = 1;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsByUser(this.userId).subscribe(data => {
      this.posts = data;
    });
  }
}
