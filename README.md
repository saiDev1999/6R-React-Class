React Funtional or dynamic layer :

let iplTeams=10
iplTeams=11

let isLogin =false
isLogin=true

React State : React State is an object which holds the information or data of a particular component
React State is a mutable
React State will used in both class and functional components

React State creation in class based components :

There are 2 ways

1. Using contructor
2. Object way of state creation

ex: initial state - subscribe , user trigger click event , final state - subscribed
ex: isLogin - false , user trigger click event , isLogin - true
ex: tdodo - ["woke up at 8am"] , user added new todo by click event , ["woke up at 8am","breakfast at 9am"]
ex: employeDetails - {name:"ram",salary:10000} , user wants to increase salary , click event , {name:"ram",salary:20000}

Important : we cannot change the state directly by simply assigning , reason : react doesn't allow ui updates by this process

note : we must use setState method to mutuate state

setState method is used to mutuate the state in a class based components
setState will accept 2 args

1. Object
2. callback function

note : React component will re-render when setState used
note : State changes are asynchronous

3. Events is react will be called as Synthentic events

Topics :

1. State in React
2. State creation and setState method usage in react
3. event binding
4. examples of React State

Tasks:

1. Repeat the class
2. Counter , + , - , reset button
3. Give + and - buttons for ipl teams for cards , control the progress bars
4. What happens if we mutuate the state directly , why we need to avoid ?
5. Give add button , when click on this generate the sqaures in th UI , odd numbered squares must be red , even num sqaures must be blue

fetch : Fetch is browser web api, using fetch we maker http calls , fetch will return the promise

syntax: fetch(URL).then(res=>res.json()).then(data=>console.log(data))

fetch drawbacks:

1. fetch doesn't convert to json automatically
2. status will be not provided
3. interceptors of request and response not possible

axios : third partu library for http calls , it is efficient compared with fetch

Topics: 0. Fetch usage in react 2. Tasks approaching steps

1. Js Refresement

Tasks:

1. Repeat the calls
2. Fetch data using fetch method display in the cards , also use progress bar for rating of product
3. Color change of the square task
4. corousal in react (https://www.npmjs.com/package/react-responsive-carousel)
5. difference between axios and fetch
