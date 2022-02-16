document.getElementById('calculete-btn').addEventListener('click', function(){
   
    const foodTk = document.getElementById('food')
    const foodValue = foodTk.value;
    const foodinc = parseFloat(foodValue);
   
    const rentTk = document.getElementById('rent');
    const rentValue = rentTk.value;
    const restFlot = parseFloat(rentValue);

    const ClothesTk = document.getElementById('Clothes');
    const ClothesValue = ClothesTk.value;
    const ClothesIns = parseFloat(ClothesValue);

    const totalTk = foodinc+restFlot+ClothesIns
    
    const totalAmount = document.getElementById('total-amound');
    const totalValue = totalAmount.innerText;

    totalAmount.innerText = totalTk
    
})