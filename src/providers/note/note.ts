import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

/*
  Generated class for the NoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NoteProvider {

	constructor(public http: HttpClient, public api: ApiProvider) {
		console.log('Hello NoteProvider Provider');
	}

	getNotes(){
		return this.api.get('notes');
	}
  
}
