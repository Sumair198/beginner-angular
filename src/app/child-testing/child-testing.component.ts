import { Component,Input, booleanAttribute, numberAttribute, Output, EventEmitter } from '@angular/core';


function formatName(evt : any)
{
  return "hi " + evt
}


@Component({
  selector: 'app-child-testing',
  templateUrl: './child-testing.component.html',
  styleUrls: ['./child-testing.component.css']
})
export class ChildTestingComponent {
  @Input({transform:formatName}) name : any 
  @Input({transform:booleanAttribute}) status!  :boolean
  @Input({transform:numberAttribute}) salary! : number
  @Output() myData = new EventEmitter()

  ngOnChanges()
  {
    console.log("ngOnChanges")
  }
  obj = {
    text : "Hello from child",
    currentDateAndTime : new Date()
  }

  sendData()
  {
    // this.myData.emit("data send from child")
    this.myData.emit(this.obj)
  }


  ngOnInit()
  {
    
  }
}
