import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-table',
  imports: [
    HttpClientModule,
    IonicModule,
    RouterLink
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [HttpClient]
})
export class TableComponent  implements OnInit {

  public sheetmusics: any = []
  public isLoading: boolean = true;

  constructor(
      private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://metalink.netshlife.dev/api/v1/sheetmusics').subscribe((data: any) => {
      this.sheetmusics = data.data;
      this.isLoading = false;
    });
  }

}
