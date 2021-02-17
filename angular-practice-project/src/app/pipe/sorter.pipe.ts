import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] | null {

    if (!Array.isArray(value) || !key) {
      return value;
    }
    /**
         * FELADAT!
         * Térj vissza a value.sort metódus eredményével!
         * 1. Ha az a[key] és a b[key] típusa is szám, térj vissza a különbségükkel.
         * 2. Ha nem számok, akkor mind a kettőt konvertáld string típusra,
         *  azután alakítsd őket kisbetűssé.
         * 3. Térj vissza a két string localeCompare metódus által visszaadott
         *  összehasonlításának az eredményével.
         */

    return value.sort((a, b) => {
      return (typeof a[key] == 'number' && typeof b[key] == 'number') ? a[key] - b[key] :
        a[key].toString().toLowerCase().localeCompare(b[key].toString().toLowerCase())
    })
  }

}
