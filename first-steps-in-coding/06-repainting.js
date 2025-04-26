function repainting(nylonQty, paintingQty, thinnerQty, workHours) {
    let totalNylonQty = nylonQty + 2;
    let totalPaintingQty = paintingQty + 0.1 * paintingQty;
    
    let materialsPrice = (totalNylonQty * 1.50) + (totalPaintingQty * 14.50) + (thinnerQty * 5.00) + 0.40;

    let hourlyPay = 0.3 * materialsPrice;
    let workerPay = workHours * hourlyPay;

    let finalPrice = materialsPrice + workerPay;

    console.log(finalPrice);
    
}

repainting(10, 11, 4, 8);