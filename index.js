let tambah = document.getElementById('tambah')
let kurang = document.getElementById('kurang')
let angka = document.getElementById('angka')
//let reset = document.getElementById('reset')
let kuadrat = document.getElementById('kuadrat');

let nilai = 0

tambah.addEventListener("click", function(){
    angka.innerHTML=nilai+=1
})

kurang.addEventListener("click", function(){
    angka.innerHTML=nilai-=1
})

// reset.addEventListener("click", function(){
//     angka.innerHTML = nilai*0
// })

//I've added the reset function

kuadrat.addEventListener('click', function() {
    angka.innerHTML = nilai*2;
})
