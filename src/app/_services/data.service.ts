import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dispatcher: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getEmitter() {
    return this.dispatcher;
  }

  readDataList() {
    const url = 'api/addresses';
    return Observable.create(observer => {
      this.http.get<any>(`${url}`).subscribe((data) => {
        this.dispatcher.emit(`dataListLoaded`);
        observer.next(data);
        observer.complete();
      });
    });

  }

  readDataItem(id) {
    const url = 'api/addresses';
    return Observable.create(observer => {
      this.http.get<any>(`${url}/${id}`).subscribe((data) => {
        this.dispatcher.emit(`dataItemLoaded`);
        observer.next(data);
        observer.complete();
      });
    });
  }

}
