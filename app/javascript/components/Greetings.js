import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../Redux/greetingSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div className="center">
      <h1>{greeting.greeting.message}</h1>
    </div>
  );
};

export default Greetings;
