import { createContext, useContext, useEffect, useState } from 'react';
import firebaseApp from './firebase';
import 'firebase/auth';

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState();

  console.log(user);

  const signInWithGithub = () => {
    return firebaseApp
      .auth()
      .signInWithPopup(new firebaseApp.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
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
    const unsubscribe = firebaseApp.auth().onIdTokenChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signout,
  };
};
