import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lazy-route',
  templateUrl: './lazy-route.component.html',
  styleUrls: ['./lazy-route.component.scss']
})
export class LazyRouteComponent implements OnInit {
  data: any = '';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.poiSearch('餐饮', '北京市').subscribe((data: any) => {
      this.data = JSON.stringify(data);
    });
  }

  poiSearch(text: string, city?: string): Observable<any> {
    return this.http.get(encodeURI(
      `http://restapi.amap.com/v3/place/text?keywords=${text}&city=${city}&offset=20&key=55f909211b9950837fba2c71d0488db9&extensions=all`));
  }
}
