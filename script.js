// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCh0hWvekDQIPkuiKU3d9-JZVX4Nw2KF9Q",
  authDomain: "madad-128fd.firebaseapp.com",
  projectId: "madad-128fd",
  storageBucket: "madad-128fd.firebasestorage.app",
  messagingSenderId: "31624959790",
  appId: "1:31624959790:web:add6d74d54254d2f244cbf",
  measurementId: "G-QCDZ50E7PC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Open modal
function openModal(type) {
  document.getElementById(`${type}Modal`).style.display = 'block';
}

// Close modal
function closeModal(type) {
  document.getElementById(`${type}Modal`).style.display = 'none';
}

// Register
function registerUser() {
  const email = document.querySelector('#registerModal input[type="email"]').value;
  const password = document.querySelector('#registerModal input[type="password"]').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Registered successfully!");
      closeModal('register');
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}

// Login
function loginUser() {
  const email = document.querySelector('#loginModal input[type="email"]').value;
  const password = document.querySelector('#loginModal input[type="password"]').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in successfully!");
      closeModal('login');
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}

// Close modal if clicked outside
window.onclick = function(event) {
  ['registerModal', 'loginModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
