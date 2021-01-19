import { expect } from 'chai';
import C from '../src/lesson-01';

describe('Array types', function () {
    const testC = new C();
    it('@type {Array} points - számok tömbje', function () {
        const exists = testC['points'];
        let isNumArray;
        if (exists) {
            testC['points'].forEach( (item) => {
                if (typeof item !== 'number' && !isNumArray) {
                    isNumArray = true;
                }
            });
        }
        expect( exists && !isNumArray ).equal(true);
    });
    
    it('@type {Array} users - minden elem egy felhasználó', function () {
        const exists = testC['users'];
        let right = true;
        if (exists) {
            testC['users'].forEach( (item) => {
                if ( 
                    (typeof item.name !== 'string' || typeof item.email !== 'string')
                    && 
                    right
                ) {
                    right = false;
                }
            });
        }
        expect( exists && right ).equal(true);
    });
    
    it('@type {Array} products - minden elem egy termék', function () {
        // {name: string, price: number, stock: number, active?: boolean}
        const exists = testC['products'];
        let right = true;
        if (exists) {
            testC['products'].forEach( (item) => {
                if ( 
                    (
                        typeof item.name !== 'string' 
                        || typeof item.price !== 'number' 
                        || typeof item.stock !== 'number' 
                    )
                    && 
                    right
                ) {
                    right = false;
                }
            });
        }
        expect( exists && right ).equal(true);
    });
    
    it('@type {Tuple} role - number, string, boolean', function () {
        const exists = testC['role'];
        let right = true;
        if (exists) {
            if ( 
                    typeof testC['role'][0] !== 'number' 
                    || typeof testC['role'][1] !== 'string' 
                    || typeof testC['role'][2] !== 'boolean' 
                ) {
                    right = false;
                }
        }
        expect( exists && right ).equal(true);
    });

    
});
