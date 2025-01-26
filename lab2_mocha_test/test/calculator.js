import { assert } from 'chai';

const calculator = await import('../app/calculator.cjs');

describe('Calculator Tests', function() {

    // Test the add function
    describe('Add function', function() {
        it('should return 7 when adding 5 and 2', function() {
            assert.equal(calculator.add(5, 2), 7);
        });

        it('should return 8 when adding 5 and 2 (this is a failing test case)', function() {
            assert.equal(calculator.add(5, 2), 8);
        });
    });

    // Test the subtract function
    describe('Subtract function', function() {
        it('should return 3 when subtracting 5 and 2', function() {
            assert.equal(calculator.sub(5, 2), 3);
        });

        it('should return 5 when subtracting 5 and 2 (this is a failing test case)', function() {
            assert.equal(calculator.sub(5, 2), 5);
        });
    });

    // Test the multiply function
    describe('Multiply function', function() {
        it('should return 10 when multiplying 5 and 2', function() {
            assert.equal(calculator.mul(5, 2), 10);
        });

        it('should return 12 when multiplying 5 and 2 (this is a failing test case)', function() {
            assert.equal(calculator.mul(5, 2), 12);
        });
    });

    // Test the divide function
    describe('Divide function', function() {
        it('should return 5 when dividing 10 by 2', function() {
            assert.equal(calculator.div(10, 2), 5);
        });

        it('should return 2 when dividing 10 by 2 (this is a failing test case)', function() {
            assert.equal(calculator.div(10, 2), 2);
        });
    });

});
