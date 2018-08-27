import { Injectable } from '@angular/core';
import { DataService } from '../_services/data.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataItemResolverService {

  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.dataService.readDataItem(route.params.id);
  }

}
