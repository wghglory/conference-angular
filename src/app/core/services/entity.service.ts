import { Injectable } from '@angular/core';

@Injectable()
export class EntityService {
  clone<T>(source: T): T {
    return Object.assign({}, source);
    // return { ...source };
  }

  merge = (target: any, ...sources: any[]) => Object.assign(target, ...sources);

  // check if 2 entities properties have the same value
  propertiesDiffer(entityA: {}, entityB: {}) {
    return Object.keys(entityA).find((key) => entityA[key] !== entityB[key]);
  }
}
