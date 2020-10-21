import { componentFactoryName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  isLoading: Boolean = false;
}
