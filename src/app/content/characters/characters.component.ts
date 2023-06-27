import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  dataSource = new MatTableDataSource<any>();
  total: number;
  searchQuery: { [key: string]: string } = {};


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCharacters(0, 50);
  }

  fetchNewPage(event) {
    this.getCharacters(event.pageIndex, event.pageSize);
  }

  getCharacters(page: number, pageSize: number): void {
    this.apiService.getCharacters(page + 1, pageSize).subscribe((res: any) => {
      this.dataSource.data = res.data;
      this.total = res.info.count * res.info.totalPages;
    });
  }

  applyFilter(event) {
    console.log(event)
    let value = event.value;

    if (value) {
      value = value.trim(); // Remove whitespace
      value = value.toLowerCase(); // Convert to lowercase
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const columnValue = data[event.column].toString().toLowerCase();
        return columnValue.includes(filter);
      };

      this.dataSource.filter = value;
    } else {
      this.dataSource.filter = '';
    }

  }
}
