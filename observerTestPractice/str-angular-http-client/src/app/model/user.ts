export class User {
    [propname: string]: any;            // ez azért kell, hogy ne sírjon a kulcsra, hogy nem string, ha any, akkor jó
    id/* ? */: number = 0;                      // akkor kell, ha a user.service-ben az id módosítás elleni védelemből akarunk a kikommenteltet mókolni.
    first_name: string = '';
    last_name: string = '';
    email: string = '';
    gender: string = '';
    ip_address: string = '';
}
