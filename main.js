a = document.querySelector('#loginbtn');
a.addEventListener('click', loginbtnClick());

function loginbtnClick() {
    console.log('this in abhay');
    var1 = document.querySelector("#login_form")
    var1.innerHTML = '<div class="form-container"><i class="uil uil-times form_close" id="canclebtn"></i><div class="form login_form" id="login_form"><form action="#" id="myForm"><h2>Login</h2><div class="input-box"><input type="email" placeholder="Enter your email"><i class="uil uil-envelope-alt email" class="email"></i></div><div class="input-box"><input type="password" id="pwinput" placeholder="Password"><i class="uil uil-lock password"  class="password"></i><i class="uil uil-eye-slash pw_hide" id="pweyebtn"></i></div><input type="submit" value="Login" id="lisb" class="input-box"><br><div id="login_signup">New User - <a href="signup/otp.html">Sign Up</a></div></div></form></div></div>'
    var2 = document.getElementById('main');
    var2.style.filter = 'blur(10px)';

    a = document.getElementById('canclebtn');
    a.addEventListener('click', function () {
        console.log('thsi sdlkfdsfkld');
        var1.innerHTML = '';
        var2.style.filter = 'none';
    })

    eye = document.getElementById('pweyebtn');
    eye.addEventListener('click', function () {
        console.log('ye to tatti hai');
        a = document.getElementById('pwinput')
        b = a.getAttribute('type')
        if (b == 'password') {
            eye.setAttribute('class', 'uil uil-eye pw_hide')
            a.setAttribute('type', 'text');
        }
        else {
            eye.setAttribute('class', 'uil uil-eye-slash pw_hide')
            a.setAttribute('type', 'password');
        }
    })


    document.getElementById('lisb').addEventListener('click', () => {
        console.log("ram ram")
        a = document.getElementById('myForm')
        console.log(a.elements[0].value)
        localStorage.setItem('username', a.elements[0].value)
        localStorage.setItem('password', a.elements[1].value)

    })
}






