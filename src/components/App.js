import { React, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbInstance";

function App() {
  const [isLoggedIn, SetIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />{" "}
      <footer>&copy; {new Date().getFullYear()} Twitter-Clone-Neva</footer>
    </>
  );
}

export default App;
