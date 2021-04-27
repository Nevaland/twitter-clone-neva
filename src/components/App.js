import { React, useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbInstance";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      setUserObj(user);
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Twitter-Clone-Neva</footer>
    </>
  );
}

export default App;
