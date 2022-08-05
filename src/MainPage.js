import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { addSwitchBoards, addAppliances, resetSwitches } from "./RoomSlice";
import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const MainPage = () => {
  const dispatch = useDispatch();

  const calculate = () => {
    toast("Check the Console");
    console.log("Rooms Configuration object", Rooms);
  };

  const [switches, setSwitches] = useState();
  const handleClick = ({ switches, id }) => {
    dispatch(resetSwitches({ id }));
    dispatch(addSwitchBoards({ switches, id }));
  };
  const { Rooms } = useSelector((store) => {
    return store.rooms;
  });

  return (
    <>
      <h1 className="room-config">Room Configuration</h1>
      <hr />
      <div className="main">
        {Rooms.map((room) => {
          const { RoomNumber, RoomImage, id } = room;

          return (
            <motion.div className="card" layout key={id}>
              <img src={RoomImage} alt="" />
              <div>
                <p>{RoomNumber}</p>
                <div className="container">
                  <section>
                    <label>Number of Switchboards </label>
                    <div className="switches-submit">
                      <input
                        className="switchboard-number"
                        type="number"
                        onChange={(e) => setSwitches(e.target.value)}
                      />
                      <button onClick={() => handleClick({ switches, id })}>
                        Submit
                      </button>
                    </div>
                  </section>
                  {room.switchBoards.length > 0 ? (
                    <div className="table-heading">
                      <article>
                        <p>Appliances</p>
                      </article>
                      <article>
                        <p>Heavy</p>
                      </article>
                      <article>
                        <p>Light</p>
                      </article>
                    </div>
                  ) : (
                    ""
                  )}
                  {room.switchBoards.map((item) => {
                    const ID = item.switchboardNumber;
                    return (
                      <div
                        className="input-fields"
                        key={item.switchboardNumber}
                      >
                        <input
                          type="text"
                          onChange={(e) =>
                            dispatch(
                              addAppliances({ id, ID, fans: e.target.value })
                            )
                          }
                        />
                        <input
                          type="text"
                          onChange={(e) => {
                            dispatch(
                              addAppliances({
                                id,
                                ID,
                                heavyLoad: e.target.value,
                              })
                            );
                          }}
                        />
                        <input
                          type="text"
                          onChange={(e) => {
                            dispatch(
                              addAppliances({
                                id,
                                ID,
                                lightLoad: e.target.value,
                              })
                            );
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="final-div">
        <button className="final-button" onClick={() => calculate()}>
          Submit
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default MainPage;
