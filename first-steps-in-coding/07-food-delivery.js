function foodDelivery(chickenMenusCount, fishingMenusCount, vegetarianMenusCount) {
    let chickenMenusPrice = chickenMenusCount * 10.35;
    let fishingMenusPrice = fishingMenusCount * 12.40;
    let vegetarianMenusPrice = vegetarianMenusCount * 8.15;

    let totalPriceOfMenus = chickenMenusPrice + fishingMenusPrice + vegetarianMenusPrice;

    let dessertPrice = 0.2 * totalPriceOfMenus;

    let finalPrice = totalPriceOfMenus + dessertPrice + 2.50;

    console.log(finalPrice);
    
}


foodDelivery(9, 2, 6)