import { useEffect, useState } from "react";
import "./App.css";

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password: number[] = [4, 2, 9, 9];

const App = () => {
  const [error, setError] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);
  useEffect(() => {
    if (pressedNumbers.length === password.length) {
      setShow(true);
      if (pressedNumbers.join("") === password.join("")) {
        console.log("correct password");
        setError(false);
        setPressedNumbers([]);
      } else {
        console.log("Bad password");
        setError(true);
        setPressedNumbers([]);
      }
    }
  }, [pressedNumbers]);

  return (
    <>
      {show && (
        <div className="warning" style={{ color: error ? "red" : "green" }}>
          {error ? "Bad Password" : "Correct Password"}
        </div>
      )}

      <div className="main-container">
        {numbers.map((number) => (
          <button
            onClick={() => {
              setPressedNumbers((prev) => [...prev, number]);
            }}
            key={number}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};
export default App;
