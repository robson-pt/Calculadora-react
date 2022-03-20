import "./App.css";
import { Display } from "./components/Display";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  let [current, setCurrent] = useState("0");
  let [previews, setPreviews] = useState("");
  let [n1, setN1] = useState(0);
  let [n2, setN2] = useState(0);
  let [operator, setOperator] = useState("");
  let [result, setResult] = useState("");

  const del = () => {
    setCurrent(current.slice(0, -1));
  };
  const currentClear = () => {
    setCurrent((current = ""));
  };

  const handleAfterCalc = () => {
    setCurrent((current = result.toString()));
    setPreviews((previews = ""));
  };

  const calculate = (n1, n2, operator) => {
    switch (operator) {
      case "/":
        setResult((result = n1 / n2));
        handleAfterCalc();
        break;
      case "-":
        setResult((result = n1 - n2));
        handleAfterCalc();
        break;
      case "*":
        setResult((result = n1 * n2));
        handleAfterCalc();
        break;
      case "+":
        setResult((result = n1 + n2));
        handleAfterCalc();
        break;
      default:
        return;
    }
  };

  const handleClickOperator = (value) => {
    if (previews === "" && current !== "" && value !== "=" && current !== "0") {
      setPreviews(previews + current + value);
      setN1((n1 = parseFloat(current)));
      currentClear();
    } else if (previews !== "" && current !== "" && current !== "0") {
      setN2((n2 = parseFloat(current)));
      calculate(n1, n2, operator);
    }
  };

  const getCurrentValue = (value) => {
    switch (value) {
      case "AC":
        setCurrent((current = "0"));
        setPreviews((previews = ""));
        break;
      case "DEL":
        current.length > 1 ? del() : setCurrent((current = "0"));
        break;
      case ".":
        if (current.includes(".")) return;
        setCurrent(current + value);
        break;
      case "+":
        handleClickOperator(value);
        setOperator((operator = "+"));
        break;
      case "-":
        handleClickOperator(value);
        setOperator((operator = "-"));
        break;
      case "*":
        handleClickOperator(value);
        setOperator((operator = "*"));
        break;
      case "÷":
        handleClickOperator(value);
        setOperator((operator = "/"));
        break;
      case "=":
        handleClickOperator(value);
        break;
      default:
        current !== "0"
          ? setCurrent(current + value)
          : setCurrent((current = value));
        break;
    }
  };

  return (
    <div className="App">
      <Display current={current} previews={previews} />
      <Button getCurrentValue={getCurrentValue} value="AC" styles="span-two" />
      <Button getCurrentValue={getCurrentValue} value="DEL" />
      <Button getCurrentValue={getCurrentValue} value="÷" styles="operator" />
      <Button getCurrentValue={getCurrentValue} value="1" />
      <Button getCurrentValue={getCurrentValue} value="2" />
      <Button getCurrentValue={getCurrentValue} value="3" />
      <Button getCurrentValue={getCurrentValue} value="*" styles="operator" />
      <Button getCurrentValue={getCurrentValue} value="4" />
      <Button getCurrentValue={getCurrentValue} value="5" />
      <Button getCurrentValue={getCurrentValue} value="6" />
      <Button getCurrentValue={getCurrentValue} value="+" styles="operator" />
      <Button getCurrentValue={getCurrentValue} value="7" />
      <Button getCurrentValue={getCurrentValue} value="8" />
      <Button getCurrentValue={getCurrentValue} value="9" />
      <Button getCurrentValue={getCurrentValue} value="-" styles="operator" />
      <Button getCurrentValue={getCurrentValue} value="." styles="span-two" />
      <Button getCurrentValue={getCurrentValue} value="0" />
      <Button getCurrentValue={getCurrentValue} value="=" styles="operator" />
    </div>
  );
}

export default App;
