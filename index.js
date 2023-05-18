let signUpBtn = document.getElementById("signUpBtn");
let dataBase = [{email:"admin",password:"admin"}]; 

//call back database whenever refresh
if (localStorage.length>0) {
  //looping for input order keys to empty array which is "dataBase"
  for(let i=1 ;i<=localStorage.length;i++){
      function updateDB(){
        let keymain ="key"+i;
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
  
  let dataBasePlus = {email:emailSignup,password:passwordSignup}
  //signup email and password check function
  
  function checkArrayAndUpdate(arr, email, password) {
    const isObjectExists = arr.some(obj => obj.email === email && obj.password === password);
  
    if (isObjectExists) {
      signUpResult.innerHTML="User Exits!!!";
    } else {
      arr.push({ email, password });
      signUpResult.innerHTML="Success";
  //looping for input order keys and values to localStorage from signup email and password
      for (let i =dataBase.length-1; i >localStorage.length; i++) {
        keys = "key"+i;
        var dataBasePlusstr= JSON.stringify(dataBasePlus);
        localStorage.setItem(keys,dataBasePlusstr);
        break; 
       }
    }
  }
  checkArrayAndUpdate(dataBase,emailSignup,passwordSignup)
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
