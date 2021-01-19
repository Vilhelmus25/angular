import { expect } from 'chai';
import C from '../src/lesson-01-basic-types';

describe('calculate', function () {
    const testC = new C();
    it('@type {number} members - value: 11', function () {
        const exists = testC['members'];
        const result = exists && testC['members'] === 11;
        expect(result).equal(true);
    });

    it('@type {number} baseColor - value: a3f4d5 (hexadecimal number)', function () {
        const exists = testC['baseColor'];
        const result = exists && testC['baseColor'] === 0xa3f4d5;
        expect(result).equal(true);
    });

    it('@type {number} role - value: 1001 (binary number)', function () {
        const exists = testC['role'];
        const result = exists && testC['role'] === 0b1001;
        expect(result).equal(true);
    });

    it('@type {number} systemID - value: 7700 (octal number)', function () {
        const exists = testC['systemID'];
        const result = exists && testC['systemID'] === 0o7700;
        expect(result).equal(true);
    });

    it('@type {number} average - value: 4.5', function () {
        const exists = testC['average'];
        const result = exists && testC['average'] === 4.5;
        expect(result).equal(true);
    });

    it('@type {string} adminName - value: szabadon választott szöveg', function () {
        const exists = testC['adminName'];
        const result = exists && typeof testC['adminName'] === `string`;
        expect(result).equal(true);
    });

    it('@type {string} sumPoints - value: Members have <this.members és a this.average szorzata> points> (template string)', function () {
        const exists = testC['sumPoints'];
        const result = exists 
                    && /Members[ ]*have[ ]*49\.5/.test(testC['sumPoints']);
        expect(result).equal(true);
    });
});
