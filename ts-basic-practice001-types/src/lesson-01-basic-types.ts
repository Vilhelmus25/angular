export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típus annotációval.
    /** @type {number} members - value: 11 */
    members: number = 11;

    /** @type {number} baseColor - value: a3f4d5 (hexadecimal number) */
    baseColor: number = 0xa3f4d5;

    /** @type {number} role - value: 1001 (binary number) */
    role: number = 0b1001;

    /** @type {number} systemID - value: 7700 (octal number) */
    systemID: number = 0o7700;

    /** @type {number} average - value: 4.5 */
    average: number = 4.5;

    /** @type {string} adminName - value: szabadon választott szöveg */
    adminName: string = `szabadon választott szöveg`;

    /** @type {string} sumPoints - value: Members have <this.members és a this.average szorzata> points> (template string) */
    sumPoints: string = `Members have ${this.members * this.average} points>`;

}