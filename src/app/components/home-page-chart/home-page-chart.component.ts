import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-home-page-chart',
  templateUrl: './home-page-chart.component.html',
  styleUrls: ['./home-page-chart.component.css']
})
export class HomePageChartComponent {
    doughnutChartLabels: Label[] = ['Youtube', 'Starbucks', 'Samsung', 'LIDL'];
  doughnutChartData: MultiDataSet = [
    [35, 25, 20, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

}
