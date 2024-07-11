Children Prop :

Children is also way to communicate from parent component to the children component, but here we will encapsulate jsx or text content or component as a content for the child component

ex: <Greeting name="ravi >

<h4>Good morning ravi</h4>
<h4>How are you feeling today ?</h4>
</Greeting>

<Greeting>
How are you ?
</Greeting>

<Greeting>
<Card>
ravi
</Card>
</Greeting>

note : By using the children we can nest the components (Reusability of jsx or content or component)

To receive the children content we need use prop.children in the child component

Ways to style the React App

1. Inline styling or Object styling <h1 style="color:red" > </h1> <h1 style={{color:"red"}} > </h1>
2. External Css Styling : create a external css file (overall app or individual components or set of components), import and use in the targetted component
3. External module Styling : create a external .module.css file (we use in individual component by importing via variable)

External Css frameworks styling

1. Bootstrap and React Bootstrap
2. Tailwind css
3. Chakra UI
4. Ant design
5. Material UI ....

3 Goats 3 Lions are there River Point 1 --> River Point 2

one boat
boat can carry upto 2
if lion count is greater than goat count , lion will eat goat

Topics :

1. Children prop in react
2. Children prop different ways to access
3. How to apply styles to react application

Tasks:

1. Repeat the Class
2. Design the layout which contains Header , Cards . Footer
3. Ipl teams in the card
4. Children prop usage in react
5. Difference between .js .jsx and .tsx
