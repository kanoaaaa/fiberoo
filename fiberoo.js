function fib() {
    var fibSeries = [0, 1];
    for (var i = 2; i < 50; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}
