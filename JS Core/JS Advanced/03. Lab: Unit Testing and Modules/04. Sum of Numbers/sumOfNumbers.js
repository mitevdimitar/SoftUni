describe('sum', function() {
    it ('first argument should be array', function() {
        let arr = [1, 2, 3, 4];
        let result = sum(arr);
        assert.equal(result, 10);
    });
    it ('with empty array should return 0', function(){
        let arr = [];
        let result = sum(arr);
        assert.equal(result, 0);
    });
    it ('with array of string numbers should return 3', function(){
        let arr = ['1', '2'];
        let result = sum(arr);
        assert.equal(result, 3);
    });
});
