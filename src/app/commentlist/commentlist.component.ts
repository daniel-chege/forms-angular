import { Component, Input } from '@angular/core';
import { Comment } from '../service/comment.service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-commentlist',
  standalone  :true,
  templateUrl: './commentlist.component.html',
  imports:[CommonModule],
  styleUrls: ['./commentlist.component.css']
})
export class CommentListComponent {
  @Input() comments: Comment[] = [];
}
