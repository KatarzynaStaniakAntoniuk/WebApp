import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {USERS} from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = USERS;
  selectedUser: User;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onAdd() {
    const newUser = {
      id: this.users.length + 1,
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      token: '123' + this.users.length
    };

    this.users.push(newUser);
  }
}
