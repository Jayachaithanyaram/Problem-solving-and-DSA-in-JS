function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);

        let profit = price - minPrice;

        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));