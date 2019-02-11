import { Component, OnInit } from '@angular/core';
import {faBars, faBookDead, faHouseDamage, faShoePrints, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-drawer-container',
  templateUrl: './side-drawer-container.component.html',
  styleUrls: ['./side-drawer-container.component.css']
})
export class SideDrawerContainerComponent {

  faHouseDamage = faHouseDamage;
  faCross = faTimes;
  faBars = faBars;
  faBookDead = faBookDead;
  faShoePrints = faShoePrints;

}
