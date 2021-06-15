var xyz = document.getElementById('fn')
function submitData(num) {
    xyz.value += num
}
function clearResult() {
    xyz.value = ""
}

function getResult() {
    xyz.value = eval(xyz.value)
    }

function clearLast(){
 xyz.value = xyz.value.slice(0, - 1);
}


function setvalue(num){
var val = document.getElemntById("val")

}
