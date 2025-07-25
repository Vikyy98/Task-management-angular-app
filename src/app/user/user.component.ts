import {
  Component,
  signal,
  computed,
  Input,
  input,
  output,
  Output,
  EventEmitter,
} from '@angular/core';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);

  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;

  //Input signals:
  //  avatar = input.required<string>();
  //  name = input.required<string>();

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    console.log('Click');
    this.select.emit(this.user.id);
  }
}
