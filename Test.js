const person = [1,2,3,4];
person.length = 1;
console.log(person);
// no Error because the array location is not changed when using length

person = person; // Error:Think beacise person is @ 12345 but array is 
//@ 23456 now when we do person=person we are tring to change the addresssss;