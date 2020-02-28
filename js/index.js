let age = +prompt('Enter your age');

while ( age <= 0 || isNaN(age)) {
    alert('Your age is not correct');
    age = +prompt('Enter your age');   
}

if (age > 0 && age <= 12) {
    alert('You are kid');
} else if (age > 12 && age <= 18) {
    alert('You are teenager');
} else if (age > 18 && age <= 60) {
    alert('You are adult');
} else  if (age > 60) {
    alert('You are retired');
} 





