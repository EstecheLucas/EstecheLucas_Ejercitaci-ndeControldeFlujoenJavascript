for(let num = 0; num <=15; num ++ ){
   
    if (num%3 ==0 && num%5 ==0){
   console.log("BuzzFizz")
   }
   
   else if(num%3 == 0)
   { 
       console.log(num,"Fizz")
   }
       else if(num%5 == 0){
        console.log(num,"Buzz")
   }
   else{
    console.log(num)
   }
   }
   