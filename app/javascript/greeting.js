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
      {greeting.message}
    </div>
  );
}
