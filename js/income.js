// updet-funtion

function update (){

    // food-itam


    const foodTk = document.getElementById('food')

   

    const foodValue = foodTk.value;
    const foodinc = parseFloat(foodValue);


    // food-condition

    if(foodValue<0){
        return alert("plese inter your number")
     }
      
    
   //   rent-itam

    const rentTk = document.getElementById('rent');
    const rentValue = rentTk.value;
    const restFlot = parseFloat(rentValue);

    // rent-condition

    if(rentValue<0){
      return alert("plese inter your number")
  }
 
    //   Clothes-itam

    const ClothesTk = document.getElementById('Clothes');
    const ClothesValue = ClothesTk.value;
    const ClothesIns = parseFloat(ClothesValue);

    // Clothes-condition

    if(ClothesValue<0){
      return alert("plese inter your number")
  }
  

    const totalTk = foodinc+restFlot+ClothesIns
    
    // total-amound

    const totalAmount = document.getElementById('total-amound');

        
       
    
    const totalValue = totalAmount.innerText;
    

    totalAmount.innerText = totalTk

    // income-itam

    const incomeTk = document.getElementById('income');
    

    
      const incomeValue = incomeTk.value;
      const incomeIns = parseFloat(incomeValue);


    const totaldicriment = incomeIns-totalTk
   
    const balanceTk = document.getElementById('balance');

   if(balanceTk.innerText<10000){
    alert("plese inter your number")
   }

    const balanceValue =  balanceTk.innerText;
   
    balanceTk.innerText = totaldicriment
 
   

    
}

document.getElementById('calculete-btn').addEventListener('click', function(){
   
    update ()


})