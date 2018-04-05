import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { LoggerService } from './logger.service';
import { HttpCacheService } from './http-cache.service';

export function HttpCacheServiceFactory(logger: LoggerService) {
  const cacheService = new HttpCacheService(logger);

  // do more stuff to configure the service if necessary

  logger.log('Creating a new Logger service with a factory function.');

  return cacheService;
}
