let submitform = document.getElementById ('submitform')

//input
let username = document.getElementById('username')
let nama = document.getElementById('nama')
let alamat = document.getElementById('alamat')
let stambuk = document.getElementById('stambuk')
let telp = document.getElementById('telp')

//text
let usernameText = document.getElementById('usernameText')
let namaText = document.getElementById('namaText')
let alamatText = document.getElementById('alamatText')
let stambukText = document.getElementById('stambukText')
let telpText = document.getElementById('telpText')

submitform.addEventListener('submit', function(event) {
    //validasi
    //username harus diisi, minimal 3 huruf, dan maksimal 30 huruf
    //nama harus diisi, minimal 3 huruf
    //alamat harus diisi, minimal 10 huruf

    let errorUsername = document.getElementById('errorUsername')
    let errorNama = document.getElementById('errorNama')
    let errorAlamat = document.getElementById('errorAlamat')
    let errorStambuk = document.getElementById('errorStambuk')
    let errorTelp = document.getElementById('errorTelp')

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

    //validasi alamat
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

    //validasi stambuk
    if (stambuk.value == '' || stambuk.value == null) {
        errorStambuk.innerHTML = 'stambuk tidak boleh kosong'
        valid = false
    }
    else if (isNaN(parseInt(stambuk.value))) {
        errorStambuk.innerHTML = 'stambuk harus angka';
        valid = false;
    }    
    else if (stambuk.value.length < 10){
        errorStambuk.innerHTML = 'stambuk minimal 10 karakter'
        valid = false
    }
    else {
        errorStambuk.innerHTML = ''
    }

    //validasi telp
    if (telp.value == '' || telp.value == null) {
        errorTelp.innerHTML = 'No. Telepon tidak boleh kosong'
        valid = false
    }
    else if (isNaN(parseInt(telp.value))) {
        errorTelp.innerHTML = 'No. Telepon harus angka';
        valid = false;
    }
   
    else if (telp.value.length < 10){
        errorTelp.innerHTML = 'No. Telepon minimal 10 karakter'
        valid = false
    }
    else if (telp.value.length > 13){
        errorTelp.innerHTML = 'No. Telepon maksimal 13 karakter'
        valid = false
    }
    else {
        errorTelp.innerHTML = ''
    }

    //jika berhasil/tidak submit form
    if (valid){
        usernameText.innerHTML = 'Username : '+ username.value
        namaText.innerHTML = 'Nama : ' + nama.value
        alamatText.innerHTML = 'Alamat : '+ alamat.value
        stambukText.innerHTML = 'Stambuk : '+ stambuk.value
        telpText.innerHTML = 'Telp : '+ telp.value
    }
    else {
        usernameText.innerHTML = 'Usernama :'
        namaText.innerHTML = 'Nama :'
        alamatText.innerHTML = 'Alamat :'
        stambukText.innerHTML = 'Stambuk :'
        telpText.innerHTML = 'Telp :'
    }

})