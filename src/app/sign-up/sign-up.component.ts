import { Component, OnInit } from '@angular/core';
import { User } from '../common/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: User = new User();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.user);
  }
}