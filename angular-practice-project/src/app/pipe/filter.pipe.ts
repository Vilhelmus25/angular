import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = ''): any[] {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

    else {
      return value.filter(item =>
        item[key].toString().toLowerCase().includes(phrase.toLowerCase()) ? true : false
      )
    }

    /**
    * FELADAT!
    * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
    * 1. Alakítsd az item[key] értékét string típusúra.
    * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
    * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
    */
  }

}
