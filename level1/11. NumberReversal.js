/** Reverse a number without converting it to string */

let num = 123456789;
let rev = 0;
while(num > 0) {
	rem = num%10;
	rev = rev * 10 + rem;
	num = parseInt(num/10);
}
console.log(rev)