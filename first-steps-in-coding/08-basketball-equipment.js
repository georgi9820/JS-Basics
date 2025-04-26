function basketballEquipment(annualFee) {
    let sneakersPrice = annualFee * 0.6;
    let outfitPrice = sneakersPrice * 0.8;
    let ballPrice = (1/4) * outfitPrice;
    let accessoriesPrice = (1/5) * ballPrice;
    
    let totalPrice = annualFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice);
    
}

basketballEquipment(550);