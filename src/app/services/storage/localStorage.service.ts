import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage : StorageService) { }

  public addToStorage(key : string, value : any){
    const storage = this.storage.get('title') || [];
    storage.push(value);
    this.storage.set(key,storage);
  }

  public getFromStorage(key : string){
    return this.storage.get(key);
  }
}
