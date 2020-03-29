describe('lookupchar', function() {
    it('should return undefined if first param is not string', function() {
        let firstParam = 5;
        let secondParam = 10;
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal(undefined);
    });
    it('should return undefined if second param is not number', function() {
        let firstParam = 'ihu';
        let secondParam = 'ahu';
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal(undefined);
    });
    it('should return undefined if index is floating point', function() {
        let firstParam = 'ihu';
        let secondParam = 2.5;
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal(undefined);
    });
    it('should return "incorrect index" if index < 0', function() {
        let firstParam = 'ihu';
        let secondParam = -2;
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal("Incorrect index");
    });
    it('should return "incorrect index" if index > string.length', function() {
        let firstParam = 'ihu';
        let secondParam = 10;
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal("Incorrect index");
    });
    it('should return "u" if index > string.length', function() {
        let firstParam = 'ihu';
        let secondParam = 2;
        let expected = lookupChar(firstParam, secondParam);
        expect(expected).to.equal("u");
    });
});
