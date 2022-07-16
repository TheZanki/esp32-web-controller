import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamepadComponent } from './gamepad.component';
import { GamepadRoutingModule } from './gamepad-routing.module';



@NgModule({
  declarations: [
    GamepadComponent
  ],
  imports: [
    CommonModule,
    GamepadRoutingModule
  ]
})
export class GamepadModule { }
