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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCharacters(0, 50);
  }

  test(event){
    console.log(event);
    // this.getCharacters(event.pageIndex, event.pageSize);
  }

  getCharacters(page: number, pageSize: number): void {
    this.apiService.getCharacters(page + 1, pageSize).subscribe((res: any) => {
      this.dataSource.data = res.data;
      this.total = res.info.count * res.info.totalPages;
    });
  }
}
