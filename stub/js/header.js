// Get the signIn modal
var signInModal = document.getElementById('signInModal');

// Get the signUp modal
var signUpModal = document.getElementById('signUpModal');

// Get the post modal
var postModal = document.getElementById('postModal');

// Get the signIn button that opens the modal
var signInbtn = document.getElementById("signin");

// Get the signUp button that opens the modal
var signUpbtn = document.getElementById("signup");

// Get the createPost button that opens the modal
var createPostbtn = document.getElementById("createPost");


// Get the <span> element that closes the signIn modal
var signInspan = document.getElementsByClassName("signInclose")[0];

// Get the <span> element that closes the signUp modal
var signUpspan = document.getElementsByClassName("signUpclose")[0];

// Get the <span> element that closes the createpost modal
var postspan = document.getElementsByClassName("postClose")[0];

// When the user clicks the button, open the signIn modal
signInbtn.onclick = function() {
    signInModal.style.display = "block";
}

// When the user clicks the button, open the signUp modal
signUpbtn.onclick = function () {
    signUpModal.style.display = "block";
}

// When the user clicks the button, open the createPost modal
createPostbtn.onclick = function () {
    postModal.style.display = "block";
}

// When the user clicks on <span> (x), close the signIn modal
signInspan.onclick = function() {
        signInModal.style.display = "none";
}

// When the user clicks on <span> (x), close the signUp modal
signUpspan.onclick = function() {
        signUpModal.style.display = "none";
}

// When the user clicks on <span> (x), close the post modal
postspan.onclick = function() {
    postModal.style.display = "none";
}

function addClickEvent(){
    signInModal.style.display = "none";
    signUpModal.style.display = "block";
    return false;
}