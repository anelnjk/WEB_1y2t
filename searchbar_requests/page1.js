//transitions for design of form 
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});


var user = document.getElementById("user");
var password = document.getElementById("password");
var email = document.getElementById("email");
var password2 =  document.getElementById("password2");
var password2_2 = document.getElementById("password2-2");

//validation
const validation = () =>{
		email.oninput = () =>{
			const emailMess = document.querySelector('.emailMess');
			const emailPattern = /^[A-Za-z][A-Za-z0-9]+@((gmail.com)|(yandex.ru)|(mail.ru)|(yahoo.com)|(astanait.edu.kz))$/;

			if(!email.value.match(emailPattern)){
				emailMess.innerHTML = "Email is not valid!"; 
			}
            else{
                emailMess.innerHTML = "";
            }
		};
		password2.oninput = () =>{
			const passMess = document.querySelector('.passMess');
			const passPattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

			if(password2.value.match(passPattern)){
				passMess.innerHTML = ""; 
			}else if(password2.value===""){
                passMess.innerHTML = "";
            }
            else{
				passMess.innerHTML = "8 char with 1 upper, lower case; 1 symbol "; 
			}
		};
        password2_2.oninput = () =>{
            const pass2Mess = document.querySelector('.pass2Mess');
            if(!(password2_2.value === password2.value)){
                pass2Mess.innerHTML = "Does not match!"
            }else if(password2_2.value===""){
                pass2Mess.innerHTML = "";
            }
            else{
                pass2Mess.innerHTML = "";
            }
        }
}

//post
const post = () =>{
    var form = document.getElementById("formPost");
    form.onsubmit = function(event){
        event.preventDefault()
        const emailPost = email.value;
        const passwordPost = password2.value;
        $.post("https://my-json-server.typicode.com/anelnjk/mockjson/posts",
        {
            username: emailPost,
            password: passwordPost
        }, 
        function(data, status){
            if(status==="success"){
                alert("Registration was successful!");
                clickedbtn();
                console.log(data);
            }   
        })
    }
}
//get (to compare user's info)
const get = () =>{
    var form = document.getElementById("formGet");
    form.onsubmit = function(event){
        event.preventDefault()
        const userGet = '"'+user.value+'"';
        const passwordGet = '"'+password.value+'"';
        $.getJSON("https://my-json-server.typicode.com/anelnjk/mini-internet-shop/posts", 
        function(data){
          var num = data.length;
          var dataUser, dataPass, str="";
          for(i=0; i<num;i++)
        {
            dataUser = JSON.stringify(data[i].username);
            dataPass = JSON.stringify(data[i].password);
            if(userGet==dataUser){
                if(passwordGet==dataPass){
                    str="You logged in as "+ data[i].username;
                    break;
                }
                else{
                    str = "No user not found";
                }
            } else{
                str="No user was found";
            }
        }
            alert(str);
            if(str=="You logged in as "+ data[i].username){clickedbtn();}
            
        })
    }
}
//to go to another page as user login or sign up
function clickedbtn(){
    window.location.href= "page2.html";
}
//data in different languages in JSON array format for lang-change
var data_lang = {
    "english": 
    { 
      "loginformlang": "Login Form",
      "signupformlang": "Signup Form",
      "loginlang": "Login",
      "signuplang": "Signup",
      "signuplinklang": "Do not have account?",
      "signupnowlang": "Signup now",
      "submitSUlang": "Signup",
      "submitLIlang":"Login"
    },
    "kazakh": 
    {
      "loginformlang": "Кіру",
      "signupformlang": "Тіркелу",
      "loginlang": "Кіру",
      "signuplang": "Тіркелу",
      "signuplinklang": "Аккаунтыңыз жоқ па?",
      "signupnowlang": "Қазір тіркелу",
      "submitSUlang": "Тіркелу",
      "submitLIlang":"Кіру"
    },
    "russian": 
    {
      "loginformlang": "Авторизация",
      "signupformlang": "Регистрация",
      "loginlang": "Авторизация",
      "signuplang": "Регистрация",
      "signuplinklang": "Не имеете аккаунта?",
      "signupnowlang": "Создать сейчас",
      "submitSUlang": "Регистрация",
      "submitLIlang":"Войти"
    }
  }

            const langEl = document.querySelector('.dropdown-menu');
            const link = document.querySelectorAll('.a-link');
            const loginformlang = document.getElementById('loginformlang');
            const signupformlang = document.getElementById('signupformlang');
            const loginlang = document.getElementById('loginlang');
            const signuplang = document.getElementById('signuplang');
            const signuplinklang = document.getElementById('signuplinklang');
            const signupnowlang = document.getElementById('signupnowlang');
            const submitLIlang = document.getElementById('submitLIlang');
            const submitSUlang = document.getElementById('submitSUlang');
            const userrr = document.getElementById('user');
    
            link.forEach(el => {
                el.onclick = () => {
                    langEl.querySelector('.active').classList.remove('active');
                    el.classList.add('active');
    
                    const attr = el.getAttribute('language');
                    
                    submitLIlang.value=data_lang[attr].submitLIlang;
                    submitSUlang.value=data_lang[attr].submitSUlang;
                    loginformlang.textContent =data_lang[attr].loginformlang;
                    signupformlang.textContent = data_lang[attr].signupformlang;
                    loginlang.textContent = data_lang[attr].loginlang;
                    signuplang.textContent = data_lang[attr].signuplang;
                    signuplinklang.textContent = data_lang[attr].signuplinklang;
                    signupnowlang.textContent = data_lang[attr].signupnowlang;
                }
            });
            
  validation();
  post();
  get();
