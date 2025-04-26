function fishTank(length, width, height, percent) {
    let volumeTank = length * width * height;
    let volumeL = volumeTank / 1000;
    let neededWaterL = volumeL * (1 - percent / 100);
    
    console.log(neededWaterL);
    
}

fishTank(85, 75, 47, 17)