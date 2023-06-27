import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Character } from 'src/app/shared/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  dataSource = new MatTableDataSource<any>();
  pieChartData$: Observable<any>;
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
      const totalFilms = res.data.reduce((acc: number, character: Character) => {
        return acc + character.films.length;
      }, 0);
  
      const pieChartData = res.data.map((character: Character) => {
        return {
          name: character.name,
          y: character.films.length / totalFilms * 100,
          x: character.films
        }
      });
      this.pieChartData$ = of(pieChartData)
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
