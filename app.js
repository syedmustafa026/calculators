var xyz = document.getElementById('fn')
// function submitData(num) {
//     xyz.value += num
// }
function clearResult() {
    xyz.value = ""
}

function getResult() {
    xyz.value = eval(xyz.value)
    }

function clearLast(){
 xyz.value = xyz.value.slice(0,- 1);
}
function submitData(num){
var lastVal = xyz.value.slice(xyz.value.length - 1);
var operators = ["+","-","/","*"];
if (operators.indexOf(lastVal) !== -1 && operators.indexOf(num) !== -1){
    xyz.value = xyz.value.slice(0, xyz.value - 1) 
}
else{
    xyz.value +=num
}
}
