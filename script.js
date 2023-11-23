function genData(){
let val = document.getElementById("ch").value;
let total = ""
let count = document.getElementById("sc").value;
    
for (var i = 0; i < count; i++) {
        total = total.concat(val);
    }
    document.getElementById("result").innerHTML = total;

}