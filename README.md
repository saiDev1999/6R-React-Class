Note : Whenever parent component re-renders all the child components will gets re-rendering even though there is no change in child components

Pure component : Pure component skips the unnecessary renders of the components until unless its state or prop changes

Whenever we are pure component performance will increases

pure component is provided react itself

pure component must used only in a class based components

pure component must extends from react

pure component contains the shouldComponentUpdate life cycle, it ensures the changes in the state and props , if anything changes shouldComponentUpdate returns true (by default), else returns false

Difference between class and functional :

1. Render is used class components
2. setState is used in class components
3. extends is only used in class components
4. this keyword is only used in class components
5. pure used in class components
6. All life cycle methods only used in class components

Drawbacks class based components :

1. Boiler plate code is more
2. Debugging and maintainence will gets difficult
3. Code will be splitted into different lifecycles
4. Code will be splitted based on the life cyles stages

Stateless components : A component being used only for Presentational layer (UI)
StateFull components : A component being used only for Container layer (Funtional)

Hooks : Hooks are simple js functions, It lets us use the state and other react features without using the classes

react features -> Life cycle methods

Hooks were introduced as 16.8 version in react functional component in 2018

They let you use state and other React features without writing a class. Instead of Classes, one can use Hooks in the Functional component as this is a much easier way of managing the state. Hooks can only be used in functional components, not in-class components.

Rules of using Hooks :

1. Hooks can only be used in functional components, not in-class components.
2. Hooks must always call at the top of the funtional components
3. Hooks must be imported from react itself (import {useState} from "react")
4. Hooks cannot be used in conditions , loops and inside the binded functions
5. Hooks must always start with "use" keyword

Examples of hooks :

1. useState
2. useEffect
3. useRef
4. useContext
5. useReducer
6. useMemo
7. useCallback ...

we can also design the custom hooks (ex: useFetch, useCounter)
custom were designed by using react inbuilt hooks

Hooks will follow DRY principle

Topics :

1. Pure component
2. Stateless and statefull components
3. Difference between class and funtional
4. Drawbacks of class components
5. Hooks introduction and rules of hooks

Tasks:

1. Repeat the class
2. Observe the life cycle behaviour when we have child components
3. Document the todays topics
4. Hit the api and show data in cards (class based components)
5. Try to implement the search functionality for same users

https://jsonplaceholder.typicode.com/users
https://fakestoreapi.com/products ()
