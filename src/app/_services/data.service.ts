import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
        this.dispatcher.emit({type: 'data:list', payload: {amount: data.length}});
        observer.next(data);
        observer.complete();
      });
    });
  }

  readDataItem(id) {
    const url = 'api/addresses';
    return Observable.create(observer => {
      this.http.get<any>(`${url}/${id}`).subscribe((data) => {
        this.dispatcher.emit({type: 'data:item', payload: {}});
        observer.next(data);
        observer.complete();
      });
    });
  }

}
