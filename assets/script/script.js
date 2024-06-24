let password = prompt('Please create your own password')
let userbtn = document.getElementById('loginbtn');
let recoverypassword = document.getElementById('recoverypass');
////////////////////////////////////////


userbtn.addEventListener("click", function () {
    let userEmail = document.getElementById("email");
    let userdata = document.getElementById("email").value;
    let userpassword = document.getElementById("password");
    let userdata2 = document.getElementById("password").value;

    if (userdata === '') {
        userEmail.style.borderColor = "red";
    }
    if (userdata2 === '') {
        userpassword.style.borderColor = "red";
    }
    else if (userdata2 !== password) {
        userpassword.style.borderColor = "red";
        userpassword.style.textDecoration = "underline";
        userpassword.style.textDecorationColor = "red";
        userpassword.style.textDecorationStyle = "wavy";

        let testuser = prompt("Parolingiz hato Parolingizni qayta tiklamoqchimisiz (ha), (yo'q)");
        if (testuser === 'ha') {
            let recoverypassword = prompt("new password");
            password = recoverypassword;
        } else {
            alert("Bekor qilindi!");
        }
    }
    else {
        userEmail.style.border = "2px solid green";
        userpassword.style.border = "2px solid green";
        let tanlov = confirm('Ochishga Ruxsat Bering!');
        if (tanlov === true) {
            window.open('/index.html', '_blank');
        }
        // let tanlov = prompt('Open It?');
        // if (tanlov === 'yes open it') {
        //     window.open('/index.html', '_blank');
        // }
        // else if (tanlov === 'open') {
        //     window.open('/index.html', '_blank');
        // }
        // else if (tanlov === 'yes') {
        //     window.open('/index.html', '_blank');
        // }
        // else if (tanlov === 'ha') {
        //     window.open('/index.html', '_blank');
        // }
        // else {
        //     alert("rad etildi");
        // }
    }


    if (userdata !== '') {
        userEmail.style.border = "2px solid green";
    } else if (userdata2 === password) {
        userpassword.style.border = "2px solid green";
    }
})
recoverypassword.addEventListener("click", function () {
    let recoverypassword = prompt("new password");
    password = recoverypassword;
})