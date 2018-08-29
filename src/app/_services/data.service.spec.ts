import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataService
      ],
      imports: [
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an emitter', inject([DataService], (service: DataService) => {
    expect(service.getEmitter()).toBeTruthy();
  }));

  it('emitter should emit a message', inject([DataService], (service: DataService) => {
    const emitter = service.getEmitter();
    const message = {type: 'data:list', payload: {amount: 10}};

    emitter.subscribe(msg => {
      expect(msg).toEqual(message);
    });

    emitter.emit(message);
  }));
});
