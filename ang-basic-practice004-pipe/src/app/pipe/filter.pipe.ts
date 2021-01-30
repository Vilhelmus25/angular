import { ArrayType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  /**
   * A kapott tömb szűrése a szűrőkifejezés alapján.
   * @param value {any[]} - a szűrendő tömb.
   * @param phrase {string} - a szűrőkifejezés.
   * @param key {string} - az objektum kulcs, ami alapján szűr.
   * @returns {any[]} - a kifejezés alapján szűrt tömb.
   */
  transform(value: any[], phrase: string, key: string = ''): any[] {
    // A KÖVETKEZŐ SORT TÁVOLÍTSD EL!!!
    //return value;

    /**
     * FELADAT!
     * Ellenőrzés: ha a value nem tömb, vagy nincs megadva a phrase vagy a key,
     * térj vissza a value változóval.
     */

    // console.log(phrase != '');
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }



    /**
     * FELADAT!
     * Térj vissza a value.filter metódus eredményével (a value mindig tömb).
     * 1. Alakítsd az item[key] értékét string típusúra.
     * 2. A visszatérési érték true, ha valahol szerepel benne a phrase.
     * TIPP: az összehasonlítás előtt a két értéket alakítsd kisbetűsre.
     */

    console.log(phrase);

    // phrase = phrase.toLowerCase();
    // return value.filter(item => {
    //   const strItem: string = '' + item[key];     // így string lesz, mert ha egy stringhez adok egy olyat, hogy false, az ''+'false' lesz mint string
    // })

    return value.filter((item => item[key].toLowerCase().includes(phrase.toLowerCase()) ? true : false));
  }

}
