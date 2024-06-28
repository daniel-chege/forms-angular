import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../service/user.service.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone:true,
  templateUrl: './profile.component.html',
  imports:[CommonModule, RouterOutlet],
  styleUrls: ['./profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}
