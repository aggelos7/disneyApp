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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDirectById().subscribe((res: any) => {
      console.log(res);
      this.dataSource.data = res.data;
    });
  }
}
