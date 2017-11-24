import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteProvider } from '../../../providers/note/note';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

	public notes: string[] = [];

	constructor(public navCtrl: NavController, public navParams: NavParams, public noteP: NoteProvider) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad NotesPage');
		let notes = this.noteP.getNotes();
		console.log(notes);
	}
	ionViewCanEnter(){
		console.log("coucou");
		console.log( this.noteP.getNotes() );

	}

}
