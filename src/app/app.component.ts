import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disneyApp';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDirectById().subscribe((res: any) => {
      console.log(res);
    });
  }
}
