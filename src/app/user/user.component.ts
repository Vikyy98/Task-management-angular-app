import { Component, signal,computed, Input,input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-user';
// import { SIGNAL } from '@angular/core/primitives/signals';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=> 'assets/users/'+ this.selectedUser().avatar);

  get imagePath(){
    return 'assets/users/'+ this.avatar
  };

  // onSelectUser(){
  //   console.log("Click");
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

 @Input({required:true}) avatar!: string;
 @Input({required: true}) name!: string;

 //Input signals:
//  avatar = input.required<string>();
//  name = input.required<string>();

}
