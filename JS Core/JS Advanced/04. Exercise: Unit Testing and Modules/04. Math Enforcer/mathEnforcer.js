describe('addFive', function() {
	it('should return undefined if you pass string', function() {
		let str = 'hello';
		let expected = mathEnforcer.addFive(str);
		expect(expected).to.equal(undefined);
	});
	it('should return undefined if you pass object', function() {
		let obj = {name: 'hello'};
		let expected = mathEnforcer.addFive(obj);
		expect(expected).to.equal(undefined);
	});
	it('should return undefined if you dont pass param', function() {
		let expected = mathEnforcer.addFive();
		expect(expected).to.equal(undefined);
	});
	it('should return correct sum if you pass positive number', function() {
		let num = 2;
		let expected = mathEnforcer.addFive(num);
		expect(expected).to.equal(7);
	});
	it('should return correct sum if you pass negative number', function() {
		let num = -2;
		let expected = mathEnforcer.addFive(num);
		expect(expected).to.equal(3);
	});
	it('should return Nan if you pass NaN', function() {
		let num = NaN;
		let expected = mathEnforcer.addFive(num);
		expect(expected).to.equal(NaN);
	});
	it('should return correct sum if you pass floating number', function() {
		let num = 3.12;
		let expected = mathEnforcer.addFive(num);
		assert.closeTo(expected, 8.12, 0.01);
	});
});
describe('subtractTen', function() {
	it('should return undefined if you pass string', function() {
		let str = 'hello';
		let expected = mathEnforcer.subtractTen(str);
		expect(expected).to.equal(undefined);
	});
	it('should return undefined if you pass object', function() {
		let obj = {name: 'hello'};
		let expected = mathEnforcer.subtractTen(obj);
		expect(expected).to.equal(undefined);
	});
	it('should return undefined if you dont pass param', function() {
		let expected = mathEnforcer.subtractTen();
		expect(expected).to.equal(undefined);
	});
	it('should return correct sum if you pass positive number', function() {
		let num = 2;
		let expected = mathEnforcer.subtractTen(num);
		expect(expected).to.equal(-8);
	});
	it('should return correct sum if you pass negative number', function() {
		let num = -2;
		let expected = mathEnforcer.subtractTen(num);
		expect(expected).to.equal(-12);
	});
	it('should return NaN if you pass NaN', function() {
		let num = NaN;
		let expected = mathEnforcer.subtractTen(num);
		expect(expected).to.equal(NaN);
	});
	it('should return correct sum if you pass floating number', function() {
		let num = 13.12;
		let expected = mathEnforcer.subtractTen(num);
		assert.closeTo(expected, 3.12, 0.01);
	});
});
describe('sum', function() {
	it('should return undefined if you pass wrong params', function() {
		let str = 'hello';
		let obj = {name: 'Ivo'};
		let num = 5;
		let expected1 = mathEnforcer.sum(str, num);
		let expected2 = mathEnforcer.sum(num, obj);
		expect(expected1).to.equal(undefined);
		expect(expected2).to.equal(undefined);
	});
	it('should return undefined if you dont pass param', function() {
		let num = 5;
		let expected = mathEnforcer.sum(num);
		expect(expected).to.equal(undefined);
	});
	it('should return NaN if you pass NaN', function() {
		let num = NaN;
		let num2 = 2
		let expected = mathEnforcer.sum(num, num2);
		expect(expected).to.equal(NaN);
	});
	it('should return correct sum if you pass floating number', function() {
		let num1 = 1.12;
		let num2 = 2;
		let expected = mathEnforcer.sum(num1, num2);
		assert.closeTo(expected, 3.12, 0.01);
	});
	it('should return correct sum if you pass negative number', function() {
		let num1 = -1;
		let num2 = 2;
		let expected = mathEnforcer.sum(num1, num2);
		expect(expected).to.equal(1);
	});
	it('should return correct sum if you pass zero', function() {
		let num1 = 0;
		let num2 = 2;
		let expected = mathEnforcer.sum(num1, num2);
		expect(expected).to.equal(2);
	});
});
