import {Injectable} from '@angular/core';
import {User} from '../../User';


@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor() {
  }

  getLoggedUser(): User {
    return new User('1', 'Aditya');
  }
}
