export class License {
  type: string;
  key: string;
  active: boolean;

  constructor(type: string, key: string, active: boolean) {
    this.type = type;
    this.key = key;
    this.active = active;
  }
}


