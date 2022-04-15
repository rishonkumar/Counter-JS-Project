// set inital count
let count = 0;

// select value and button

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');


// console.log(btns);

btns.forEach(function(btn) {
    //accessing each button
    // console.log(btn);

    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);
        const styles = e.currentTarget.classList;

        if(styles.contains('decrease')) {
            count--;
        }
        // value.textContent = count;
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        value.textContent = count;
    })
    
})
