import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLoadService {

  constructor() { }

  public initializeApp(id): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise ${id}`);

      setTimeout(() => {
        console.log(`initializeApp:: inside setTimeout ${id}`);
        // doing something

        resolve();
      }, 0);
    });
  }

  // getSettings(): Promise<any> {
  //   console.log(`getSettings:: before http.get call`);
  //
  //   const promise = this.httpClient.get('http://private-1ad25-initializeng.apiary-mock.com/settings')
  //     .toPromise()
  //     .then(settings => {
  //       console.log(`Settings from API: `, settings);
  //
  //       APP_SETTINGS.connectionString = settings[0].value;
  //       APP_SETTINGS.defaultImageUrl = settings[1].value;
  //
  //       console.log(`APP_SETTINGS: `, APP_SETTINGS);
  //
  //       return settings;
  //     });
  //
  //   return promise;
  // }
}
