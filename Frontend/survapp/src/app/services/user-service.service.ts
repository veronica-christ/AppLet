import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  isLoggedIn(): boolean {
    return false;
  }
  constructor() { }
}
