import { Component } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

constructor(public user:UserService)
{
  
}

data = this.user.getData()


}
