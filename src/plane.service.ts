import { Injectable } from '@nestjs/common';

export enum Airport {
  JFK = 'JFK',
  LAX = 'LAX',
  SFO = 'SFO',
  ORD = 'ORD',
  DFW = 'DFW',
  ATL = 'ATL',
  DEN = 'DEN',
  SEA = 'SEA',
  LAS = 'LAS',
  PHX = 'PHX',
}

export type Plane = {
  uuid: string;
  departure: string;
  destination: string;
  passengers: number;
};

@Injectable()
export class PlaneService {
  getAllPlanes(): Plane[] {
    const numberOfPlanes = Math.floor(Math.random() * 10);

    const planes: Plane[] = [];

    for (let i = 0; i < numberOfPlanes; i++) {
      const departure = Object.values(Airport)[Math.floor(Math.random())];
      const destination =
        Object.values(Airport)[Math.floor(Math.random() * 10)];
      const passengers = Math.floor(Math.random() * 200);
      const uuid = Math.random().toString(36).substring(7);

      const plane = {
        uuid,
        departure,
        destination,
        passengers,
      };

      planes.push(plane);
    }

    return planes;
  }
}
