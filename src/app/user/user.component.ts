import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService, User } from '../service/user.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./user.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      twitterClone: this.fb.group({
        name: ['', Validators.required],
        UserName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]]
      })
    });
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe((data: User) => {
      this.form.patchValue({
        twitterClone: {
          name: data.name,
          UserName: data.username,
          email: data.email
        }
      });
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
