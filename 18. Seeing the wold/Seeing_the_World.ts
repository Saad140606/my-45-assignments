
// Store the locations in a array. Make sure the array is nt in alphabetical orde.
let places :string[] = ['Italy', 'Germany','agra','Eifel Tower', 'Times Square'];

//Print your array in its original order.
console.log('Original' + places);

//Print your array in its original order.
console.log('Copy ' + [...places].sort());

//Show that your array is still in its original order by printing it.
console.log('Original' + places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log( 'Copy ' + [...places].sort().reverse());

//Show that your array is still in its original order by printing it.
console.log('Original' + places);

//Reverse the order of your list. Print the array to shoe that its order has changed.
console.log('Original' + places.reverse());

//Reverse the order of your list again. Print the list to show it's back to its original order.
console .log('Original' + places.reverse());

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console .log('Original' + places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console .log('Original' + places.sort().reverse());