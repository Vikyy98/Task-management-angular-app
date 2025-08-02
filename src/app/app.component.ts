import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-angular-project-v17';
  users = DUMMY_USERS;
  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserID);
  }

  onSelectUser(id: string) {
    console.log('User is clicked ' + id);
    this.selectedUserID = id;
  }

  isUserSelected(selectedUserId: string): boolean {
    return this.selectedUser?.id == selectedUserId;
  }
}
