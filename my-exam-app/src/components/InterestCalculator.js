import React, { useRef, useState } from "react";

export default function InterestCalculator() {
  const ref1 = useRef();
  const ref2 = useRef(); 
  const ref3 = useRef(); 
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  function myFunc() {
    const p = parseFloat(ref1.current.value);
    const r = parseFloat(ref2.current.value);
    const t = parseFloat(ref3.current.value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      setError("All inputs must be numbers.");
      setResult("");
      return;
    }

    if (p <= 0 || r <= 0 || t <= 0) {
      setError("All values must be greater than 0.");
      setResult("");
      return;
    }

    const interest = (p * r * t) / 100;
    setResult(`Simple Interest: ₹${interest.toFixed(2)}`);
    setError("");
  }

  return (
    <div className="container text-center p-4 bg-success-subtle mt-5 rounded border-3 border-dark">
      <h1 className="p-3 text-primary">Interest Calculator</h1>

      <p>
        <label>Principal: </label>
        <input ref={ref1} type="text" />
      </p>

      <p>
        <label>Rate : </label>
        <input ref={ref2} type="text" />
      </p>

      <p>
        <label>Time : </label>
        <input ref={ref3} type="text" />
      </p>

      <button className="btn btn-warning mt-3" onClick={myFunc}>
        Calculate
      </button>

      {error && <div className="alert alert-danger mt-4">{error}</div>}

      {result && <div className="alert alert-info mt-4">{result}</div>}
    </div>
  );
}
