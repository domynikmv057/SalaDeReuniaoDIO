import { RoomService } from './../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/room';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css'],
})
export class UpdateRoomComponent implements OnInit {
  id!: number;
  room!: Room;
  submitted = false;
  newRoomForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.room = new Room();

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        console.log(data);
        this.room = data;
      },
      (error) => console.log(error)
    );
    console.log(this.room)
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.room = new Room();
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
