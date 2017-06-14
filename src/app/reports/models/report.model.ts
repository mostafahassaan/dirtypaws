export class Report {
  id?: number;
  animalName: string;
  gpsLocation?: {
      x:number, 
      y:number
  };
  date?: Date;
}