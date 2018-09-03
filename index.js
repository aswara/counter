let tambah = document.getElementById('tambah')
let kurang = document.getElementById('kurang')
let angka = document.getElementById('angka')
let nilai = 0

tambah.addEventListener("click", function(){
    angka.innerHTML=nilai+=1
})

kurang.addEventListener("click", function(){
    angka.innerHTML=nilai-=1
})