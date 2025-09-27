import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beginner';
  constructor(public user : UserService) {

  }
userData  : any = ''
  ngOnInit()
  {
    // console.log(this.user.getData())
    // this.userData = this.user.getData()
    this.user.getData().subscribe((res :any)=>
    {
      console.log(res.todos)
      this.userData = res.todos
    })
  }
  // name = 'Sumair ul haq'

  getName() {
    // return 'Ahzam'
    // return this.name
  }
  obj = {
    name: 'faraz',
    age: 30
  }
  arr = ['peter', 'bruce', 'alex', 'marquez']

  // yourname = 'sumair'
  test(x: any) {
    alert(x)
  }

  // myEvent(evt : any)
  // {
  //   console.log(evt.value)
  // }

  currentVal = ''
  myEvent(evt: any) {
    this.currentVal = evt

  }

  name = 'bruce'
  disabledBox = true
  enableBox() {
    this.disabledBox = false
  }
  city = 'Karachi'
  // show = false
  show = 'blue'
  // color = 'green'
  role = 'patient'

  // data = ["peter" , "bruce" , "sam" , "faraz"]
  data = [
    {
      name: 'sumair',
      age: 27
    },
    {
      name: 'faraz',
      age: 30
    },
    {
      name: 'osama',
      age: 28
    },
  ]
  getUserValue(value: any) {
    console.log(value)
  }
  color = 'blue'
  updateColor() {
    this.color = 'red'
  }
  err = false

  // username = "Sumair ul haq"

  // users = [
  //   {
  //     name : 'Sumair ul haq',
  //     age : 27
  //   },
  //   {
  //     name : 'faraz',
  //     age : 30
  //   },
  //   {
  //     name : 'usman',
  //     age : 29
  //   }
  // ] 

  childToParent = null
  parentComponent(evt: any) {
    console.log(evt)
    this.childToParent = evt
  }
  employeeName = 'sumair ul haq'
  today = Date.now()

  currentObj : any = {}
  fromChild(evt : any)
  {
    this.currentObj =evt
    console.log(evt)
  }
  phoneNumber : number = 3353236375

}
