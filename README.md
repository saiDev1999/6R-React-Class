State mangement : State management refers managing the application data with in component or across the whole application

2 ways :

1. Local state management -> useState , useReducer
2. Global state management -> useContext + useState

1.props
2.context api --> small and medium scaled application
3.redux --> for large applications

2.1 props

Prop drilling : When data needs to be shared accross the different components which were deeply nested,data needs to forward for each level of component tree to reach the final component

Drawbacks :

1. Component reusability will decrease
2. Every component must be included even though we are not using data in that particular component
3. readability and maintenance will decreases
4. scability will be difficult

2.1 context api

context api is a way to manage the state in the react applications globally

steps :

1. Identify the components which we needs to share the data (globally or set of selected components) (select app.js or navigation.js)
2. create a context using createContext method provided by the react globally
3. wrap the global components using selected context . provider and pass value prop (where data needs to be shared across the components)
4. select the component where data needs to be consumed using useContext hook in react
5. useContext will receive the createdContext and returns the global data provided in the value prop

useContext : its a hook where we can achieve global state management in react funtional components(it will consumes the data provided in the value prop)

1. Repeat the class
2. implement search funtionality for recipes (by using api )
   https://dummyjson.com/recipes/search?q=Margherita
3. Implement the dark and light mode in the app
4. change name globally, give the input in the setting, based on the new name update across the application
5. what is debouncing and throattling in js
6. why we need go for link component instead of anchor tags in react

Topics :

1. State management
2. Prop drilling in react
3. Context api
4. useContext hook

[{id:1,name:"biryani"}]

step 1:

1. Take a dropdown (dummy values)
2. useEffect and useState to fetch and store the data (ds)
3. <option value={eachRecipe.name} >{eachRecipe.name}</option>
4. after selecting extract the selected value using event.target.value(id)

Tasks :

1. Research on 10 apis
2. Country api show in dropdown and show the country data
3. Random dog facts
4. mini dictionary
