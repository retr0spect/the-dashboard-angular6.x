import { Injectable } from '@angular/core';
import {License} from '../pojo/License';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor() { }


  getLicenses(): License[] {
    return [
      new License('Key', '123-456-789', true),
      new License('Key', 'ABC-CDE-EFGH', true),
      new License('Cloud', 'ABC-CDE-EFGH', true),
      new License('Cloud', 'ABC-CDE-EFGH', true),
      new License('FBR', 'ABC-CDE-EFGH', true),
      new License('FBR', 'ABC-CDE-EFGH', true)
    ];
  }
}
