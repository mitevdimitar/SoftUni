describe('check if array is symetryc', function() {
    it('should return false if a string is passed', function(){
        let str = 'Pesho';
        let result = isSymmetric(str);
        expect(result).to.equal(false);
    });
    it('should return true if the array consists of different types', function(){
        let arr = [8, 'a', {a:5},new Date(),{a:5}, 'a', 8];
        let result = isSymmetric(arr);
        expect(result).to.equal(true);
    });
    it('should return true if the array is symetric', function(){
        let arr = [1, 2, 3, 2, 1];
        let result = isSymmetric(arr);
        expect(result).to.equal(true);
    });
    it('should return true if the array is with length 1', function(){
        let arr = [1];
        let result = isSymmetric(arr);
        expect(result).to.equal(true);
    });
    it('should return false if the array is not symetric', function(){
        let arr = [1, 2, 3, 2, 1, 2, 2];
        let result = isSymmetric(arr);
        expect(result).to.equal(false);
    });
});
