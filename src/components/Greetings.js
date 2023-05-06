import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greetings = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };
  return (
    <div>
      <h1>{greeting.message}</h1>
      <button type="button" onClick={handleClick}>Click Me!</button>
    </div>
  );
};

export default Greetings;
