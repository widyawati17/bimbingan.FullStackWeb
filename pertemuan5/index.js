let input = document.getElementById('formUsername')
let hasil = document.getElementById('hasilUsername')

input.addEventListener('input', function(){
    hasil.innerHTML = input.value
})

let submitform = document.getElementById ('submitform')

//input
let username = document.getElementById('username')
let nama = document.getElementById('nama')
let alamat = document.getElementById('alamat')

//text
let usernameText = document.getElementById('usernameText')
let namaText = document.getElementById('namaText')
let alamatText = document.getElementById('alamatText')

submitform.addEventListener('submit', function(event) {
    //validasi
    //username harus diisi, minimal 3 huruf, dan maksimal 30 huruf
    //nama harus diisi, minimal 3 huruf
    //alamat harus diisi, minimal 10 huruf

    let errorUsername = document.getElementById('errorUsername')
    let errorNama = document.getElementById('errorNama')
    let errorAlamat = document.getElementById('errorAlamat')
    event.preventDefault() //agar tdk ter-refresh ketika data di submit
    let valid = true
    //validasi username
    if (username.value == '' || username.value == null) {
        errorUsername.innerHTML = 'username tidak boleh kosong'
        valid = false
    }
    else if (username.value.length < 3){
        errorUsername.innerHTML = 'username minimal 3 karakter'
        valid = false
    }
    else if (username.value.length > 30){
        errorUsername.innerHTML = 'username makasimal 30 karakter'
        valid = false
    }
    else {
        errorUsername.innerHTML = ''
    }

    //validasi nama
    if (nama.value == '' || nama.value == null) {
        errorNama.innerHTML = 'nama tidak boleh kosong'
        valid = false
    }
    else if (nama.value.length < 3){
        errorNama.innerHTML = 'nama minimal 3 karakter'
        valid = false
    }
    else {
        errorNama.innerHTML = ''
    }

    //valuasi alamat
    if (alamat.value == '' || alamat.value == null) {
        errorAlamat.innerHTML = 'alamat tidak boleh kosong'
        valid = false
    }
    else if (alamat.value.length < 10){
        errorAlamat.innerHTML = 'alamat minimal 10 karakter'
        valid = false
    }
    else {
        errorAlamat.innerHTML = ''
    }

    //jika berhasil/tidak submit form
    if (valid){
        usernameText.innerHTML = 'Username : '+ username.value
        namaText.innerHTML = 'Nama : ' + nama.value
        alamatText.innerHTML = 'Alamat : '+ alamat.value
    }
    else {
        usernameText.innerHTML = 'Usernama :'
        namaText.innerHTML = 'Nama :'
        alamatText.innerHTML = 'Alamat :'
    }

})