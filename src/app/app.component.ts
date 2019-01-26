import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {faBars, faBookDead, faHouseDamage, faShoePrints, faTimes} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode = new FormControl('over');
  faHouseDamage = faHouseDamage;
  faCross = faTimes;
  faBars = faBars;
  faBookDead = faBookDead;
  faShoePrints = faShoePrints;
}
