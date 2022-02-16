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

    const incomeTk = document.getElementById('income');
    const incomeValue = incomeTk.value;
    const incomeIns = parseFloat(incomeValue);

    const totaldicriment = incomeIns-totalTk
   
    const RemainingTk = document.getElementById('Remaining');
    const RemainingValue = RemainingTk.innerText;
    RemainingTk.innerText = totaldicriment

    
})