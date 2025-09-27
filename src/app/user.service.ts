import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http : HttpClient) { }

  getData()
  {
    // return {
    //   name : 'Ali',
    //   age : 50
    // }

    // let url = "https://jsonplaceholder.typicode.com/todos"
    let url = "https://dummyjson.com/todos"
    return this.http.get(url)
  }
}
