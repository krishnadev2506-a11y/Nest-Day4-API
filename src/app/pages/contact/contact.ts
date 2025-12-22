import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  sent: boolean = false;
  submit(form: any) {
    // set a non-blocking success state instead of using alert()
    this.sent = true;
    return false;
  }
} 
