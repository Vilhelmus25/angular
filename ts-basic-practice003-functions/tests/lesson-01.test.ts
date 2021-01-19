import { expect } from 'chai';
import C from '../src/lesson';

describe('calculate', function () {
    it('add', function () {
        const exists = C['sum'];
        const result = exists && C['sum'](11, 22) === 33;
        expect(result).equal(true);
    });

    it('substract', function () {
        const exists = C['difference'];
        const result = exists && C['difference'](11, 22) === -11;
        expect(result).equal(true);
    });
});