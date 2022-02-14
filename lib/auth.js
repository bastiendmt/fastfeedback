import 'firebase/auth';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';
import { createUser } from './db';
import firebaseApp from './firebase';

const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState();

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      Cookies.set('fast-feedback-auth', true, {
        expires: 1,
      });

      return user;
    } else {
      Cookies.remove('fast-feedback-auth');
      setUser(false);
      return false;
    }
  };

  const signInWithGitHub = () => {
    return firebaseApp
      .auth()
      .signInWithPopup(new firebaseApp.auth.GithubAuthProvider())
      .then((response) => handleUser(response.data));
  };

  const signout = () => {
    return firebaseApp
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebaseApp
      .auth()
      .onIdTokenChanged((user) => handleUser(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGitHub,
    signout,
  };
};

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token: user.ya,
  };
};
