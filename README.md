useReducer hook in react :

useReducer which is used for the state managemnent in functional components , create and manage state

useReducer alone can be only used for local state management

if we use useReducer with useContext we can achieve global complex state managements

useReducer is used to apply complex logics for our complex states

useReducer syntax :

useReducer accepts 2 arguments

1. reducer function
2. initial state (complex state)

useReducer(()=>{},{})

useReducer will return an array contains 2 elements

1. current state
2. dispatch function

const state={
totalTickets:100,
bookedTickets:20,
currentAvailableTickets: 80
}

Technical terms :

1.  action : action tells what to happen to the state or data , action is the object ex : INCREAMENT_SALARY, DECREMENT_SALARY, BOOK_TICKET, CANCEL_TICKET, HOLD_TICKET

ex : BOOK_TICKET , no of tickets :6

const ticketAction = {
type: BOOK_TICKET,
payload:6
}

const ticketAction = {
type: CHANGE_NAME,
payload:"Kalki"
}

2.  reducer function : reducer function is a pure function , this function will accept action and state as a parameter , based on the actions corresponding state changes will be done

return {...state,bookedTickets:state.bookedTickets+ticketAction.payload}

{
totalTickets:100,
bookedTickets:26,
currentAvailableTickets: 74
}

3.dispatch function : This function dispatches the action performed by the user , dispatch function will accept the action

Tasks:

1. Repeat the class
2. Global counter using useReducer + useContext (https://medium.com/suyeonme/using-usecontext-and-usereducer-together-lets-create-redux-like-global-state-in-react-87470e3ce7fa)
3. Todo using useReducer hook
4. what is the difference between useState and useReducer
5. What is the difference between .js .jsx .tsx
6. how we can create a npm package (2million)

Topics:

1. UseReducer hook introduction
2. UseReducer examples (ticketing example)

Recipe maker : (useContext+useState)

1. Header , Footer , content in the cards
2. Listing the recipes in the cards (view recipe,favourite recipe) in the home screen
3. view recipe -> detail screen
4. detail screen -> favourite recipe
5. all favourite recipes must be in separate screen
6. user can also remove favourite recipe

Project s:

1. Recipe maker
2. Weather app (search by city and fetch by current location)
3. Country finder and Currency converter
4. Task mangement
