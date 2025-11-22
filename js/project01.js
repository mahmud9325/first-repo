const counterElement = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const minasBtn = document.getElementById('minasBtn');



let counter = 0;


const updatecounter = (valu) => {
     counter = counter + valu;
    counterElement.innerText = counter;

    if(counter >= 10){
       plusBtn.setAttribute('disabled', true);

    }
    else {
        plusBtn.removeAttribute('disabled', false);
    }

    //minasBtn //

   if(counter <= 0){
      minasBtn.setAttribute('disabled', true);

   }
   else{
    minasBtn.removeAttribute('disabled', false);
   }
}

plusBtn.addEventListener('click', () => {
    updatecounter(1);
});

minasBtn.addEventListener('click', () => {
   updatecounter(-1);
});