export function extractPrice(...elements: any) {
    const prices = [];
    for(const element of elements){
        const priceText = element.text();

        if(priceText) prices.push(priceText);
    }
    return prices[0].split('₹')[1];
}