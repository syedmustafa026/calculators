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


