import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { Character } from '../../models/character';
import { Pagination } from '../../models/pagination';
import { Store } from '@ngrx/store';
import { newPagination } from 'src/app/store/app.actions';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatatableComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<any>;
  @Input() total: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'tvShows', 'videoGames', 'allies', 'enemies'];
  pageSize = 50;
  pageIndex = 0;

  constructor(
    private dialog: MatDialog,
    private store: Store<{ appState: Pagination }>
  ) { }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  handlePageEvent(event: PageEvent): void {
    this.store.dispatch(newPagination({ page: event.pageIndex, pageSize: event.pageSize }));
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

