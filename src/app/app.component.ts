import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm:NgForm;
  defaultQuestion='pet';
  title = 'forms-example';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(form:NgForm){
  //   console.log("helllo",form)
  // }
  onSubmit(){
   console.log('sign',this.signupForm)
  }
}
