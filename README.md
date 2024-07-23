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
