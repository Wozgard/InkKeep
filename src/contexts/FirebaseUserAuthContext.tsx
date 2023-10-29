import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { firebaseAuth } from 'infra/firebase/config';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

export interface IFirebaseUserAuthContext {
  user: FirebaseUser | null;
  isUserStateLoading: boolean;
}

const userAuthContext = createContext<IFirebaseUserAuthContext>({
  user: null,
  isUserStateLoading: true,
});

export const FirebaseUserAuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isUserStateLoading, setIsUserStateLoading] = useState(true);

  useEffect(() => {
    setIsUserStateLoading(true);
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      localStorage.setItem('user id', currentUser?.uid || '');

      setIsUserStateLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <userAuthContext.Provider value={{ user, isUserStateLoading }}>{children}</userAuthContext.Provider>;
};

export function useUserAuth() {
  return useContext(userAuthContext);
}
