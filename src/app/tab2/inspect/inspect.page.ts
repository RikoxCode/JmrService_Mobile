import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.page.html',
  styleUrls: ['./inspect.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule],
  providers: [HttpClient]
})
export class InspectPage implements OnInit{
  @Input() item: any = {
    title: 'Inspect',
    description: 'Inspect the item',
    composer: 'Composer',
    arranger: 'Arranger',
    publisher: 'Publisher',
    duration: 'Duration',
    style: 'Style',
    grad: 'Grad',
    flex: 'Flex',
  };

  constructor(
      private http: HttpClient,
      private route: ActivatedRoute,
  ) {
  }

  async ngOnInit() {
    let slug: any = "";
    this.route.queryParams.subscribe(params => {
        slug = params['slug'];
    });
    console.log(slug)
    this.http.get('https://metalink.netshlife.dev/api/v1/sheetmusics/' + slug).subscribe((data: any) => {
        this.item = data.data;
    });
  }
}
