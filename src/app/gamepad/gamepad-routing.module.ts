import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamepadComponent } from './gamepad.component';

const routes: Routes = [ 
  {
    path: '',
    component: GamepadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamepadRoutingModule { }
