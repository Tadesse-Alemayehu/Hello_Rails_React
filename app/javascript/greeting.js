import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getRandomGreetingAction } from "./Redux/Greeting/greeting";
export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.Greeting);
  return (
    <div>
      <p>Hello from greeting</p>
      <button onClick={() => dispatch(getRandomGreetingAction())}>
        Generate a new greeting message
      </button>
      <h3>{greeting.message}</h3>
    </div>
  );
}
