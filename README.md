Memorization in react js :

Memorization is a optimisation technique in react without re-calculating expensive calculations of the functions by caching the results when ever same inputs provided

3 ways in react js for Memorization:

1. React.memo() : pure component in functional component (without re-rendering the child whenever same props or state being loaded)

React.memo is a HOC :

HOC : Higher-order-component : This is the pattern where a function can take the component as argument and return the enhanced component,This pattern makes re-use the functional logics

common functionality can be designed as a HOC, This can be called in multiple components without writing functional logics multiple times

2. useMemo()
3. useCallback()

profile data :

useMemo is a hook in functional components which memorizes the result returned by the function when same inputs were given

useMemo syntax : it will accept 2 args

1. callback funtion
2. dependency array

const totalAmount=useMemo(()=>{
return qtyOfRasagulla*100+qtyOfDrink*100
},[qtyOfRasagulla,qtyOfDrink])

useCallback : useCallback is a hook in functional components which memorizes the function when same inputs were given

useCallback syntax : it will accept 2 args

1. callback funtion
2. dependency array

useCallback(()=>{
setCount(count+1)
},[count])

React 19 version

Tasks :

0. complete the recipe maker project by eod
1. Repeat the class
2. Design a hoc for counter
3. 3 Examples of hoc
4. 3 examples of react.memo(), where to use , where not to use
5. react compiler changes (19)

Topics:

1. Memorization in react
2. HOC
3. React.memo
4. useMemo and useCallback introduction
