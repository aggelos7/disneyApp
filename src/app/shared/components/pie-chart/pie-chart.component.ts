import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {
  ngOnInit() {
    Highcharts.chart('chart-container', chartOptions);
  }
}

const chartOptions: any = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Pie Chart',
  },
  series: [
    {
      name: 'Brands',
      colorByPoint: true,
      data: [
        {
          name: 'Chrome',
          y: 61.41,
        },
        {
          name: 'Internet Explorer',
          y: 11.84,
        },
      ]
    }
  ],
};