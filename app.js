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
 xyz.value = xyz.value.substring(0, xyz.value.length - 1);
}
if (xyz.value === false){
    alert("ERROR")
}
