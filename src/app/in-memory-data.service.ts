import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let reports = [
      { id: 11, animalName: 'Mr. Nice', gpsLocation: { x: 30, y: 30 } },
      { id: 12, animalName: 'Narco', gpsLocation: { x: 30, y: 30 } },
      { id: 13, animalName: 'Bombasto', gpsLocation: { x: 30, y: 30 } },
      { id: 14, animalName: 'Celeritas', gpsLocation: { x: 30, y: 30 } },
      { id: 15, animalName: 'Magneta', gpsLocation: { x: 30, y: 30 } },
      { id: 16, animalName: 'RubberMan', gpsLocation: { x: 30, y: 30 } },
      { id: 17, animalName: 'Dynama', gpsLocation: { x: 30, y: 30 } },
      { id: 18, animalName: 'Dr IQ', gpsLocation: { x: 30, y: 30 } },
      { id: 19, animalName: 'Magma', gpsLocation: { x: 30, y: 30 } },
      { id: 20, animalName: 'Tornado', gpsLocation: { x: 30, y: 30 } }
    ];
    return { reports };
  }
}