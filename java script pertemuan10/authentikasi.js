// buat fungsi
// nilai username
// nilai passwordnya
// cek username dan password
// benar beri alert berhasil login
// username dan password kosong di berikan alert
// username dan password salah 
// maka akan diberikan alert username dan pass salah 

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username == 'admin' && password == "131106"){
        alert("Berhasil login");
        window.location="index.html"
        return false;
    }
    else if(username=="" || password==""){
        alert("Username dam Password tidak boleh kosong");
    }
    else {
        alert("Username dam Password salah");
    }
}