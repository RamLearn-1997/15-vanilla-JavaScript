// set the initial count
let count = 0;

// select value and button
const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
   btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
        value.style.color = 'red';
    }else if(styles.contains('increase')){
        count++;
        value.style.color = 'green';
    }else{
        count = 0;
        value.style.color = '#222';
    }

    value.textContent = count;
   })
})

