import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { LoggerService } from './logger.service';

@Injectable()
export class HttpCacheService {
  private requests: any = {};

  constructor(private loggerService: LoggerService) {}

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
    this.loggerService.log(`${url} has been added into cache.`);
  }

  get(url: string): HttpResponse<any> | undefined {
    this.loggerService.log(`data for ${url} was fetched from cache.`);
    return this.requests[url];
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
    this.loggerService.log(`${url} is removed from cache.`);
  }

  invalidateCache(): void {
    this.requests = {};
    this.loggerService.log(`cache all cleared.`);
  }
}
