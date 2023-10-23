import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1 style="">hello Angular world!!!</h1>',
  styleUrls: ['./app.component.css']
  // styles:['h1{background-color:black;color:white}']
})
export class AppComponent {
  title = 'myfirstangular';

@HostListener('click',['$event'])
xyz(){
  alert('Hello Angular')
}

}
