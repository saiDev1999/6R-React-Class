useState:
useState is a react funtional hook, which creates and manages the state
using useState local state management is possible
local state management: data management within the component
global state management: data management within the application

useState syntax :

1. useState will accept one argument (initial state)
   useState(false)
   note : initial state can be any data type

2. useState will return array (array contains 2 elements)
   2.1 current state
   2.2 updater Function

const arry = useState(false)

const [currentState,updaterFuntion]=useState(false)
note : const represents immutability of state directly

we can change the currentState using updaterFuntion

useState is replacement of :

1. constructor state creation
2. setState for managing

updaterFuntion : it will accept the function and returns the updated current state

Tasks :

1. Repeat the class
2. State up lifting in react
3. Why we are using const while declaring useStet
4. Take a table of recipes , give add recipe button , add the dummy recipes, delete
5. Delete all in the list
6. Add button , generate the squares

Topics :

1. State managements in react
2. UseState
3. Examples of useState

Exercise :

1. Greet the user based on the time on the button

Steps:

1. Take a button which shows greet user
2. Initialize the state with empty strings const [greeting,setGreeting]=useState("")
3. Take a js function , in which it returns the string(Morning,Afternoon...) based on the current time
4. On button click trigger the js function and set the string to the local state (useState)
5. Bind the greetings in the UI, Whenever state changes greetings will be changed

useEffect : its a hook in react functional components, which causes the side effects like data fetching, Dom manipulations, Event listeners , timer events , subscribtions

UseEffect is the replacement of following life cycle methods

1. Component did mount
2. Component did update
3. Component will unmount

useEffect syntax : it will accept 2 args

1. Callback function
2. Array (Dependency array)

note : Based on the Dependency array, useEffect behaviour will changes

syntax: useEffect(()=>{},[])

case 1 : when dependency array length is zero

useEffect will behave like a Component did mount method

case 2 : when dependency array having some length ["variable1","variable2"...]

useEffect will behave like a Component did update whenever dependency variables changes

case 3 : No dependency array useEffect(()=>{})

useEffect will continuoulsy executes whenever state or prop changes (it goes to infinite loop)

case 4 : Callback function returns the another function (Component will unmount)

useEffect(()=>{
return ()=>{
//Component will unmount
Here we will prevent memory leaks with in the application
}
},[])

Tasks :

1. Repeat the class
2. Display list of recipes on the page load , using useEffect hook
3. Show the recipes in the table (Bootstrap)
4. Based on the season show the season names and corresponsing image of season
5. Research on weather Api and show weather in UI , based on the weather control the background image

Topics :

1. UseState examples
2. UseEffect introduction
3. UseEffect examples

Forms :

2 ways to handle forms in react

1. Uncontrolled components : Forms control will not be part of react , it will controlled by dom
   useRef is used to handle dom control
   Only overall validation at one time is possible, field validations not possible

2. Controlled components : Forms control will be part of react
   Input data or states controlled by the react itself
   useState is used to handle react control
   field validation is possible in controlled components

   useRef :
   useRef is a react functional based hook , It serves

   1. Directly accessing the dom
   2. To preserve the previous values
   3. It doesn't cause re-render when updated

steps for uncontrolled components :

1. Take a form in a react functional component
2. use useRef hook to give access to the each input with the dom
3. attach the reference with the inputs using ref attribute for the inputs
4. onSubmit of form we can collect the user entered data by using reference
   (reference.current.value)

Topics:

1.  UseEffect unMounting
2.  Forms introduction
3.  Uncontrolled forms
4.  Basic validations and error notations

Tasks:

1.  Repeat the class
2.  Try regex for the samsung policy form (5 fields)
3.  Registration forms (email,password,mobile,name)(local storage)
4.  Login api test
