let signUpBtn = document.getElementById("signUpBtn");
let dataBase = []; 

//call back database whenever refresh
if (localStorage.length>0) {
  //looping for input order keys to empty array which is "dataBase"
  for(let k=1;k<=localStorage.length;k++){
      function updateDB(){
        let keymain ="key"+k;
        dataBase.push(JSON.parse(localStorage.getItem(keymain)))};
        updateDB()
  } 
};
  
//signup email and password input function
try{
signUpBtn.onclick = function() {
  let emailSignup= document.getElementById("emailSignup");
  let passwordSignup = document.getElementById("passwordSignup");
  let signUpResult =document.getElementById("signUpResult");
  emailSignup=emailSignup.value;
  passwordSignup=passwordSignup.value;
  
  let dataBasPlus = {email:emailSignup,password:passwordSignup}
   dataBase.push(dataBasPlus);
   signUpResult.innerHTML="Success";
   //looping for input order keys and values to localStorage from signup email and password 
   for (let j =dataBase.length; j >localStorage.length; j++) {
    keys = "key"+j;
    var dataBasPlusstr= JSON.stringify(dataBasPlus);
    localStorage.setItem(keys,dataBasPlusstr);
    break;
  }
};
}catch(err) {console.log(err)};
 
//Signin (email and password input function)
try{
let signinBtn = document.getElementById("signinBtn");
signinBtn.onclick = function() {

    let emailAddress= document.getElementById("emailAddress");
    let passwordInput = document.getElementById("passwordInput");
    let signingResult = document.getElementById("signinResult");
 
    emailAddress=emailAddress.value;
    passwordInput=passwordInput.value;
//looping for check input email and password data with dataBase objects
    for (let i = 0; i<dataBase.length; i++){
      if (emailAddress== dataBase[i].email && passwordInput==dataBase[i].password) {
      signingResult.innerHTML="Welcome Back!!";
      i=dataBase.length;
      } else {
        signingResult.innerHTML="Please Signup!!"
      }
     }
}; 
}catch(err) {console.log(err)};

