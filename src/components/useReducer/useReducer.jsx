import React, { useReducer } from "react";
import { actionTypes, initialState, reducer } from "./helper";

function UseReducer() {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);

  const bookTicketHandler = () => {
    dispatchFunction({
      type: actionTypes.BOOK_TICKETS,
      payload: 10,
    });
  };

  const cancelTicketHandler = () => {
    dispatchFunction({
      type: actionTypes.CANCEL_TICKETS,
      payload: 2,
    });
  };

  const movieChangeHandler = () => {
    dispatchFunction({
      type: actionTypes.CHANGE_MOVIE,
      payload: "Kalki",
    });
  };

  return (
    <div>
      <h5>Number of Total Tickets : {currentState.totalTickets}</h5>
      <h5>
        Number of available Tickets : {currentState.currentAvailableTickets}
      </h5>

      <button onClick={bookTicketHandler}>Book tickets</button>

      <button onClick={cancelTicketHandler}>Cancel tickets</button>
      <h5>current movie : {currentState.movieName}</h5>
      <button onClick={movieChangeHandler}>Change Movie name</button>
    </div>
  );
}

export default UseReducer;
