describe('odd or even', function() {
    it('should return undefined if parameter is number', function() {
        let num = 5;
        let result = isOddOrEven(num);
        expect(result).to.equal(undefined);
    });
    it ('should return odd, if param is string with odd length', function() {
        let oddStr = 'eho';
        let result = isOddOrEven(oddStr);
        expect(result).to.equal('odd');
    });
    it ('should return even, if param is string with even length', function() {
        let evenStr = 'lele';
        let result = isOddOrEven(evenStr);
        expect(result).to.equal('even');
    });
});
