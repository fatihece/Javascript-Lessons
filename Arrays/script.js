const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(movement => {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }else {
            console.log(`You withdrew ${Math.abs(movement)}`)
        }
    }
    
);

// created counter
console.log("--------CREATED COUNTER---------")
movements.forEach((mov, i, arr) => {
    if (mov > 0) {
        console.log(`Movement ${i+1}: You deposited ${mov}`);
    }else {
            console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`)
        }
    }
    
);

