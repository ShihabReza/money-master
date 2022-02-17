

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
    
        if(totalTk>0){
            const totalValue = totalAmount.innerText;
    

    totalAmount.innerText = totalTk
    
   
        }
    
    
    // const totalValue = totalAmount.innerText;
    

    // totalAmount.innerText = totalTk

    const incomeTk = document.getElementById('income');
    const incomeValue = incomeTk.value;
    const incomeIns = parseFloat(incomeValue);

    const totaldicriment = incomeIns-totalTk
   
    const balanceTk = document.getElementById('balance');

    if(totaldicriment<10000){
        const balanceValue =  balanceTk.innerText;
   
        balanceTk.innerText = totaldicriment
      
    }
    // const balanceValue =  balanceTk.innerText;
   
    // balanceTk.innerText = totaldicriment

    
})