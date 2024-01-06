// firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDEcAWEsm1ODr-jAJc4Z_9jqTdlOlwE4uo',
  authDomain: 'wrweb-b6ea5.firebaseapp.com',
  projectId: 'wrweb-b6ea5',
  storageBucket: 'wrweb-b6ea5.appspot.com',
  messagingSenderId: '11599048597',
  appId: '1:11599048597:web:b40ac677871427129e509c',
  measurementId: 'G-SCHZL3QB8V',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  console.log('로그인 시작합니다');
};

const getGoogleSignInResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    // 로그인 성공 시의 처리
    const user = result.user;
    console.log(`안녕하세요 ${user.displayName}님!`);
  } catch (error) {
    console.log('응 안돼');
    console.error(error.message);
  }
};

export {
  firebaseApp,
  auth,
  GoogleAuthProvider,
  signInWithGoogle,
  getGoogleSignInResult,
};
