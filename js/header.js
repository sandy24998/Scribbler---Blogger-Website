var signIn = document.getElementById("SignInModal");
var signUp = document.getElementById("SignUpModal");
var createPost = document.getElementById("createPostModal");

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

document.onclick = function(event){
    if (event.target == signIn) {
      signIn.style.display = "none";
    }
   else if(event.target == signUp)
    {
        signUp.style.display = "none";
    }
    else if(event.target == createPost) {
        createPost.style.display = "none";
    }
  };

  function newModal(){
    signIn.style.display = "none";
    signUp.style.display = "block";
  }
