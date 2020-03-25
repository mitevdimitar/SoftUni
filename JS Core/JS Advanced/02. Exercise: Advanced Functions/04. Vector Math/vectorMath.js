(function solve() {
    const add = function(vec1, vec2) {
        let sum1 = vec1[0] + vec2[0];
        let sum2 = vec1[1] + vec2[1];
        let result = [sum1, sum2];
        return result;
    };
    const multiply = function(vec1, scalar) {
        let result = [vec1[0] * scalar, vec1[1] * scalar];
        return result;
    };
    const length = function(vec1) {
        let result = Math.sqrt((vec1[0] * vec1[0]) + (vec1[1] * vec1[1]));
        return result;
    };
    const dot = function(vec1, vec2) {
        let result = (vec1[0] * vec2[0]) + (vec1[1] * vec2[1]);
        return result;
    };
    const cross = function(vec1, vec2) {
        let result = (vec1[0] * vec2[1]) - (vec2[0] * vec1[1]);
        return result;
    }

   return solution = {
       add,
       multiply,
       length,
       dot,
       cross
   }
})();
