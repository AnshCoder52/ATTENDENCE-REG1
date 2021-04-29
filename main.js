s_array = [];
function SUBMIT() {
var n1 = document.getElementById('s1').value;
var n2 = document.getElementById('s2').value;
var n3 = document.getElementById('s3').value;
var n4 = document.getElementById('s4').value;
s_array.push(n1);
s_array.push(n2);
s_array.push(n3);
s_array.push(n4);
console.log(s_array);
document.getElementById('hh').innerHTML=s_array;
document.getElementById('submit_b').style.display='none';
document.getElementById('sort_b').style.display='inline';


}

function SORT() {
s_array.sort();
console.log (s_array);
document.getElementById ('hh').innerHTML=s_array;
}