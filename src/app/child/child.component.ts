import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() hero: any
  @Output() parentcomp: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    
  }
  sendData()
  {
    this.parentcomp.emit("data from child")
  }
}
