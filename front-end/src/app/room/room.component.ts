import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  title = 'Gerenciamento de Salas de Reunião';

  constructor() { }

  ngOnInit(): void {
  }

}
