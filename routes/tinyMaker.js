module.exports = function(tinyMe) {
    var adder1 = Math.floor(Math.random() * 10);
    var adder2 = Math.floor(Math.random() * 10);
    var mutate = tinyMe.substring(5, 9);
    
    return mutate + adder1 + adder2;
}