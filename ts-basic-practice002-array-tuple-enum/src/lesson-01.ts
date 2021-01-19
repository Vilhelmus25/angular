export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típus annotációval.

    /** @type {Array} points - számok tömbje, 1 - 10 -ig egyesével. */
    points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    /** 
     * A tömb minden eleme legyen egy objektum, ami egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: { name: string, email: string }[] = [{ name: "John Doe", email: "johndoe@gmail.com" }, { name: "Jane Doe", email: "janedoe@gmail.com" }];

    /** 
     * A tömb minden eleme legyen egy objektum, ami egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék
     */
    products: { name: string, price: number, stock: number }[] = [{ name: "Laptop", price: 200, stock: 3 }, { name: "pc", price: 150, stock: 5 }];

    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [13, "sas", true];


}