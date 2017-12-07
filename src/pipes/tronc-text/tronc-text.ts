import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'troncText',
})

export class TroncTextPipe implements PipeTransform {
	/**
	 * Takes a value and makes it lowercase.
	 */
	transform(value: string, ...args) {
		console.log(value);
		if( value.length < 40 ){
			return value;
		}
		else {
			let whiteSpace =  new RegExp("/^\s+$/");
			
			for( let i = 40; i = 0 ; i-- ){
				if( value[i].match( whiteSpace ) ){
					return value.substring( 0, i );
				}
			} 

		}
	}
}
