import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../components/Shared/Login/Firebase/firebase.init";
import { useState, useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  // const { setIsLoading, signInUsingGoogle, setUser, setError } = useAuth();
  // //   const location = useLocation();
  // //   const history = useHistory();
  // //   const redirect_url = location.state?.from || '/';

  // //   const handleGoogleLogin = () => {
  // //       signInUsingGoogle()
  // //           .then(result => {
  // //               history.push(redirect_url);
  // //               setUser(result.user);
  // //           })
  // //           .catch(error => {
  // //               console.log(error.message);
  // //               setError(error.message);
  // //           })
  // //           .finally(() => setIsLoading(false));

  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const undone = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }

      setIsLoading(false);
    });

    return () => undone;
  }, []);

  const logOut = () => {
    setIsLoading(true);

    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
