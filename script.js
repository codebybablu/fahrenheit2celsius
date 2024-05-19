// for javascript
 
let c = document.getElementById('cel');
let f = document.getElementById('far');

c.addEventListener('input', function(){
    let celsius = c.value;
    let faren = celsius * (9/5) + 32;
    f.value = faren.toFixed(2);
    if(c.value == ""){
        f.value = "";
    }
});

f.addEventListener('input', function(){
    let frnht = f.value;
    let cc = (frnht - 32) * 5/9;
    c.value = cc.toFixed(2);
    if(f.value == ""){
        c.value = "";
    }
});