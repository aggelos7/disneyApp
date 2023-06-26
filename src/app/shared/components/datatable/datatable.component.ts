import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { Character } from '../../models/character';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() total: number;
  @Output() event = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'tvShows', 'videoGames', 'allies', 'enemies'];
  pageSize = 50;
  pageIndex = 0;

  constructor(private dialog: MatDialog) { }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  handlePageEvent(event: PageEvent): void {
    this.event.emit(event);
  }

  openDialog(row: Character): void {
    this.dialog.open(DialogComponent, {
      data: {
        character: row,
      },
      width: '300px',
      autoFocus: false,
    });
  }

}

