import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //create restaurant using post method
  postRestaurant(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data).pipe(map((res: any) => {
      return res;
    }))
  }
  //get data 

  getRestaurant() {
    return this.http.get("http://localhost:3000/posts").pipe(map((res: any) => {
      return res;
    }))
  }

  // put data 

  putRestaurant(id: number, data: any) {
    return this.http.put("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deleteRestaurant(id: number) {
    return this.http.delete("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}

