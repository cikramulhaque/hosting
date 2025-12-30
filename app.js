// ===== Firebase Config =====
var firebaseConfig = {
  apiKey: "AIzaSyA7Tck7VFnldXnKj9fMpPc9bSWqgVQA8jU",
  authDomain: "bottlereward.firebaseapp.com",
  projectId: "bottlereward",
  appId: "1:842823471278:web:a7bbbb0291e581dcc71d3f"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();

// ===== UI =====
let landing = document.getElementById("landing");
let loginBox = document.getElementById("login");
let dashboard = document.getElementById("dashboard");

window.showLogin = function(){
  landing.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

window.goBack = function(){
  loginBox.classList.add("hidden");
  landing.classList.remove("hidden");
}

// ===== Login =====
window.login = function(){
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("loginMsg");

  auth.signInWithEmailAndPassword(email, pass)
  .then(()=>{
      msg.innerText = "Login success 🎉";
  })
  .catch(err=>{
      msg.innerText = err.message;
  });
}

// ===== Listener =====
auth.onAuthStateChanged((user)=>{
  if(user){
    landing.classList.add("hidden");
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
    document.getElementById("userEmail").innerText = user.email;
  }
});

// ===== Logout =====
window.logout = function(){
  auth.signOut();
  dashboard.classList.add("hidden");
  landing.classList.remove("hidden");
}
