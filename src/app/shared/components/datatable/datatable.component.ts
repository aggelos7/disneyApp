import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() info: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'tvShows', 'videoGames', 'allies', 'enemies'];
  pageSize = 50;
  pageIndex = 0;

  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  handlePageEvent(event: PageEvent): void {
    console.log(event);
  }

}

