React apps build by using components

Components : Component is the independent reuable bits of code which is responsible for USER INTERFACES
Every component must start with the capital
Component can be as small as button or as large as screen
Components can be created by 2 ways

1. class based components
2. funtional based components

note : while creating new components , its always suggestable to use funtional based components

React 2013 - 2018 : class based components (dynamic websites),funtional based components (static websites)

2018 (Hooks) : funtional based components (dynamic websites + static websites)

components will be nested to form the UI
every component returns the markup(html)

App.js is the root component in the react application

In React we can have 3 extensions for the components

1. .js (which represents the javascript files)
2. .jsx (this represents react jsx file)
3. .tsx (this represents the typescript files)

Every file can contains as many components

exports :

1. Named export :
   add export keyword at the beginning of the component
   imports can be done using curly based
   we can take multiple named exports in a single file
   for named imports , we can use other name of components by using as key word
2. Default export
   add export default keyword at the end of the component
   imports can be done directly
   we can only take single export default in a file
   we can use any name , but it should start from capital letter

   DRY : DON'T REPEAT YOURSELF
   Always try to reuse the code instead of duplicating

   JSX : Javascript and XML - Language syntax followed by the react where js funtions can return the markup language

Browswer does't understand JSX , Babel is a tool which transpiles JSX code to the browser understandable code (js code)

Topics:

1. Components in react
2. Types of Components
3. Imports/Exports
4. Nesting of Components

Tasks :

1. Repeat the class (learn syntax)
2. Create a few custom components like Table, Cards
3. Explore the react official docs https://react.dev/learn/your-first-component
4. Explore the react official docs regarding exports / imports https://react.dev/learn/importing-and-exporting-components
