function factorial(n) {
    var result = 1;
    for(var i=2; i<=n; i++) result *= i;
    return result;
}
const permutation =  (n, r) => {
    var result = factorial(n);
    result = factorial(n) / factorial(n-r);
    return result;
}

const combination = (n, r) => {
    var result = factorial(n);
    result = factorial(n) / factorial(n-r);
    result /= factorial(r);
    return result;
}

const multiPermutation = (n,r) => {
    var result = n ** r;
    return result;
}
const multiCombination = (n,r) => {
    var result = factorial(n+r-1);
    result /= factorial(r);
    result /= factorial(n-1);
    return result;
}
module.exports = {
    permutation: permutation,
    combination: combination,
    multiPermutation: multiPermutation,
    multiCombination: multiCombination
};