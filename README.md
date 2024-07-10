JSX :
JSX : Javascript and XML - Language syntax followed by the react where js funtions can return the markup language

Rules of JSX :

1. Every Component must return single parent element (this must be shared container like div,section,ol or React.Fragments)
2. Class must be replaced with the className
3. Every js code inside the return must be enclosed with the curly braces
4. every attribute must be in camelCase

React.Fragments: It acts like a shared empty parent container with out including of extra shared nodes in the dom

They are 2 ways to include the Fragments

1. <></>
2. <React.Fragment></React.Fragment>

note : Efficient rendering will be possible using fragments

List rendering in react :
Whenever if we want to display the list items(array), we will use the map method
map method will iterates the UI parts

ex: const fruits=["apple","banana","watermelon]

fruits.map(eachFruit=>console.log(eachFruit))

note : React is completely declarative syntax , we dont need to use dom methods
we will specify directly what we want

key prop :

whenever we are using map method , we must always include key prop
key prop will make repeated UI elements to render efficiently ,
By using this updates and deletions were must faster

<img src="" alt=" >

<ImageComponent  path=""  alternateText="" width=""  >

Render Props in react :

Props is an object , which helps us to communicate or share data from parent component to the child component

Props are the additional information passed to the component

<ImageComponent  path=""  alternateText="" width=""  >

Props are immutable (we cannot change over the time)

Props allows us to render the content dynamically , we can control the layout of the UI components

We can take more than one prop for the component

<ButtonComponent   text="login"  width="100px"  >
<ButtonComponent   text="signup" width="120px"   >

2 ways to use props:

1. General prop
2. Children prop

Topics:

1. JSX and JSX rules
2. List raendering in react
3. Fragments
4. Key Prop in map
5. Render Props or PROPS

Tasks :

1. Repeat the class
2. IPL teams listing using map method , Props in react
3. React https://react.dev/learn/writing-markup-with-jsx
4. https://react.dev/learn/javascript-in-jsx-with-curly-braces
5. https://react.dev/learn/passing-props-to-a-component

6. What is props in a React component ?
7. How do you access props in a React component ?
8. What data types can we pass as props to components ?
9. What is a propTypes?
10. What is a default propTypes?
