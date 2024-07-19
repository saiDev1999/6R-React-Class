Earth :
Human cycle :

1. Born stage
2. Survival stage
3. Expiry stage

Dom :
Life cycle of a class components

1. Mounting stage or phase : Whenever components inserted inside the dom , we can call this as Mounting stage , (JSX inserted in the dom)

4 methods :

1. Render : render is a method which inserts the jsx inside the dom
2. constructor : constructor is used to create and initial the state and also for event binding
3. getDerivedStateFromProps : This method is used to initial the state based on the props , This method static method
4. componentDidMount : this method is used to perform the side effects in the class based component in the mounting
   This will execute only once in a lifecycle
   side effects : Http calls, dom manipulations, event listeners, timers

Note: All methods were auto-invoking methods

2. Updating stage : whenever components or elements updated inside the dom by the user events , This refers to Updating stage

1. Render : Here it will execute to show the updated layout
1. GetDerivedStateFromProps : If the prop from parent changes based on the props we can update the state

1. Unmounting stage : Whenever components or elements removed from the dom , this stage refers to unmounting stage

1. ComponentDidUpdate : This method is used perform sideEffects in the class based components in the updating

side effects : Http calls, dom manipulations, event listeners, timers

4. shouldComponentUpdate : It will decide whether the component needs to update or restricct

5. getSnapShotBeforeUpdate : It will give the snap of the component data befor being updated in the dom

Topics :

1. Life cycle methods introduction
2. Mounting phase
3. Updating phase
4. Unmounting phase

Exercises :
What is component life cycles
What is the purpose of life cycles
What are the three stages of a component life cycle
What does mounting means?
What does updating means
What does unmounting means?
What is the most common built-in mounting life cycle method?
What are the mounting life cycle methods?
What are the updating life cycle methods?
What is the unmounting life cycle method?
