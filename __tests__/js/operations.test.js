var op = require('../../js/operations')

describe('testing operations.js', function() {
    test('ajout retourne pour (1,3) 4', function(){
        expect(op.ajout(1, 3)).toBe(4)
    })

    test('multiply retourne pour (2,3) 6', function() {
        expect(op.multiply(2, 3)).toBe(6)
    })

    test('division retourne pour (10, 5) 2', function() {
        expect(op.division(10, 5)).toBe(2)
    })

    test('soustraction retourne (5, 3) 2', function() {
        expect(op.soustraction(5, 3)).toBe(2)
    })

})