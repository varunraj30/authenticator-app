import { useState, useEffect } from "react";
import "./App.css";
import LinearDeterminate from "./ui/Progress";
import { LinearProgress } from "@mui/material";
// import { LinearProgress } from "@mui/material";

LinearDeterminate;

function App() {
  const [activate, setActivate] = useState(false);
  const [auth, setAuth] = useState("");
  const [timer, setTimer] = useState("");
  const [isCopied, setisCopied] = useState(false);

  const generateRandom = () => {
    return Math.round(100000 + Math.random() * 99999);
  };

  const changeAuth = (number) => {
    if (number == 1) {
      setActivate(!activate);
    }
  };

  useEffect(() => {
    const checker = generateRandom();
    setAuth(checker);
  }, [activate]);

  setTimeout(() => {
    changeAuth(timer);
    setTimer(String(new Date().getSeconds() - 60).replace("-", ""));
    console.log(timer);
  }, 1000);

  const copy = () => {
    window.navigator.clipboard.writeText(auth);
    setisCopied(true);
  };

  return (
    <div>
      <h1>Authenticator App!!!</h1>
      <h2 className="mb-2">For one time use only!</h2>
      {auth}
      <br className="pb-2" />
      <button onClick={copy} className="mt-4">
        Copy to Clipboard
      </button>
      {isCopied ? (
        <h3 className="font-medium text-xl p-2">Copied to Clipboard</h3>
      ) : (
        ""
      )}
      <div className="p-4">
        <LinearProgress variant="determinate" value={(timer / 60) * 100} />
        {`Authcode will expire in ${timer}`}
      </div>
    </div>
  );
}

export default App;
