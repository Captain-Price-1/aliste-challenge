import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux/";
import { addRooms, reset } from "./RoomSlice";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = (number) => {
    dispatch(addRooms(number));
    navigate("/main");
  };
  const dispatch = useDispatch();
  const [number, setNumber] = useState();

  useEffect(() => {
    dispatch(reset());
  });

  return (
    <div className="welcome-page">
      <div>
        <h1>
          Welcome to <b>Aliste</b>
        </h1>
        <label>Number of Rooms</label>
        <br />
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
        <button onClick={() => handleClick(number)}>submit</button>
      </div>
    </div>
  );
};

export default HomePage;
