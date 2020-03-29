describe('test changing color from rgb to hex', function() {
    it('should undefined if all parameters are not integers', function() {
        let red = 10.5;
        let blue = 11.2;
        let green = 2.5;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
    it('should undefined if any parameter is < 0', function() {
        let red = -2;
        let blue = 11;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
it('should undefined if any parameter is < 0', function() {
        let red = 2;
        let blue = -11;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
it('should undefined if any parameter is < 0', function() {
        let red = 2;
        let blue = 11;
        let green = -2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
    it('should undefined if any parameter is > 255', function() {
        let red = 11;
        let blue = 1111;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should undefined if any parameter is > 255', function() {
        let red = 1111;
        let blue = 111;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should undefined if any parameter is > 255', function() {
        let red = 11;
        let blue = 111;
        let green = 2222;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
    it('should return hexa if all parameters are correct', function() {
        let red = 11;
        let blue = 111;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal('#0B6F02');
    });
it('should return undefined if any of the parameters is string', function() {
        let red = '1';
        let blue = 11;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
it('should return undefined if any of the parameters is string', function() {
        let red = 1;
        let blue = '1';
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
it('should return undefined if any of the parameters is string', function() {
        let red = 1;
        let blue = 11;
        let green = '2';
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
    it('should return undefined if any of the parameters is array', function() {
        let red = 1;
        let blue = [11];
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should return undefined if any of the parameters is array', function() {
        let red = [1];
        let blue = 11;
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should return undefined if any of the parameters is array', function() {
        let red = 1;
        let blue = 11;
        let green = [2];
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should return undefined if any of the parameters is object', function() {
        let red = 1;
        let blue = {num: 11};
        let green = 2;
        let expected = rgbToHexColor(red, blue, green);
        expect(expected).to.equal(undefined);
    });
 it('should return undefined if any of the parameters is missing', function() {
        let red = 1;
        let blue = 11;
        let expected = rgbToHexColor(red, blue);
        expect(expected).to.equal(undefined);
    });
});
