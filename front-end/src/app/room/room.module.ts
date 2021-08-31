import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { MessageModule } from './../components/message/message.module';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Esse methodo do angular serve para fazer a localização da data.
necessário importar tanto o metodo quando a variavel localePt*/
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    RoomListComponent,
    RoomDetailsComponent,
    CreateRoomComponent,
    UpdateRoomComponent,
    RoomComponent
  ],
  imports: [CommonModule, MessageModule, FormsModule, ReactiveFormsModule, RoomRoutingModule],
  providers: [
    /*Aqui em providers será declarada as localizações dos pipes do app*/
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  exports: [RoomComponent],
})
export class RoomModule {}
