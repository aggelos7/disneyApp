import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() data: any;
  chartOptions: any = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Pie Chart',
    },
    tooltip: {
      pointFormat: '<b>{series.name}</b>: {point.percentage:.1f}%<br/><b>Films List</b>:<br/> {point.x}'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    series: [
      {
        name: 'Percentage',
        colorByPoint: true
      }
    ],
  };

  ngOnChanges() {
    this.chartOptions.series[0].data = this.data;
    Highcharts.chart('chart-container', this.chartOptions);
  }
}