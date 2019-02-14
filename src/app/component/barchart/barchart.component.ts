import {Component, OnInit} from '@angular/core';
import {LicenseService} from '../services/license.service';
import {License} from '../pojo/License';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  private licenses: License[];
  private licenseCount = new Map<string, number>();

  public barChartColors: Array<any> = [{
    backgroundColor: ['red', 'green', 'orange']
  }];

  constructor(private licenseService: LicenseService) {
  }


  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [];

  ngOnInit(): void {
    console.log('ngOnInit BarchartComponent');
    this.licenses = this.licenseService.getLicenses();
    this.getLicenseCount();
    this.barChartLabels = Array.from(this.licenseCount.keys());
    this.barChartData.push({data: Array.from(this.licenseCount.values()), label: 'Active Licenses'});
  }

  private getLicenseCount() {
    for (const license of this.licenses) {
      if (this.licenseCount.get(license.type)) {
        const val = this.licenseCount.get(license.type);
        this.licenseCount.set(license.type, val + 1);
      } else {
        this.licenseCount.set(license.type, 1);
      }
    }
  }


// events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
