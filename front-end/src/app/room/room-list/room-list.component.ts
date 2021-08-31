import { RoomService } from './../../service/room.service';
import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';
import {Router} from '@angular/router'
import { Room } from 'src/app/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms!: Observable<Room> | any;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.rooms = this.roomService.getRoomsList();
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.reloadData();
        },
        (error: any) => console.log(error));
  }

  roomDetails(id: number){
    this.router.navigate(['home/details', id]);
  }

  updateRoom(id: number){
    this.router.navigate(['home/update', id]);
  }

}
