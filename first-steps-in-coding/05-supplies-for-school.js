function suppliesForSchool(penPacketCount, markerPacketCount, detergentL, discountPercent) {
    let totalPrice = penPacketCount * 5.80 + markerPacketCount * 7.20 + detergentL * 1.20;
    let discountDecimal = discountPercent / 100;
    let priceAfterDiscount = totalPrice - discountDecimal * totalPrice;
    console.log(priceAfterDiscount);
    
}

suppliesForSchool(2, 3, 4, 25)