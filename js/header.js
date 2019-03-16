var signIn = document.getElementById("SignInModal");
var signUp = document.getElementById("SignUpModal");

function modalDialog1() {
    signIn.style.display = "block";
}

function hideModal1(){
    signIn.style.display = "none";
}

function modalDialog2(){
    signUp.style.display = "block";
}

function hideModal2(){
    signUp.style.display = "none";
}

window.onclick = function(event){
    if (event.target == signIn) {
      signIn.style.display = "none";
    }
   else if(event.target == signUp)
    {
        signUp.style.display = "none";
    }
  };

  function newModal(){
    signIn.style.display = "none";
    signUp.style.display = "block";
  }