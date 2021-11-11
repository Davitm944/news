// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey            : 'AIzaSyBb5b7au-mUcxmmmaYtjUmd0UmmDvfPLfI',
	authDomain        : 'auth-1c2ce.firebaseapp.com',
	projectId         : 'auth-1c2ce',
	storageBucket     : 'auth-1c2ce.appspot.com',
	messagingSenderId : '900730656365',
	appId             : '1:900730656365:web:b02cd790d411eecfabd164'
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
