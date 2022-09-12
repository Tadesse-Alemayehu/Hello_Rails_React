import React from "react";
import { Link } from "react-router-dom";
export default function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/greeting">Go to greeting</Link>
    </>
  );
}
