React conditional Rendering :

It tells what to display the UI based on the single or multiple conditions

1. If / Else
2. Ternary operator
3. Logical And operator or short circuit operator

4. If / Else : syntax

if(isLogin){
if(isAdmin){
return <h2>Wellcome Admin</h2>

    }else{
       return <h2>Wellcome user</h2>
    }

}else{
return <h2>Please login</h2>
}

2. isLogin ? <> <h2>Wellcome Admin</h2></> :<h2>Please login</h2>

3. short circuit operator

It will only handle true case scenerio

isLogin && <h2>Wellcome Admin</h2></>

drawbacks of dom :

1. Entire html page will be reloaded when some part of changes occurred
2. Response time is more, it loads more time to show the final UI

V-dom : Virtual dom

1. Virtual dom is a memory representation of the original dom , it compares the previous and current changes , instead of reloading entire dom , it reloads only specific part of the UI

V-dom have 2 algorithms for execution

1. Diffing algorithm : It will compare the previous and current dom tree
2. reconciliation algorithm :It will change the only changed dom elements in the original dom

using virtual dom unchanged dom elements will not get disturbed

using these algorithms , react will loads the app must faster way
This is the reason why react is more popular

5 jars
A,B,C,D,E each jar consists of candies
original weight of candies is 10grams
poisonous candies weight is 9grams

React Funtional or dynamic layer :

1. Funtional based component
2. Class based component

3. Class based component

4. Render : render is a predefined method which is mandatory method for inserting the UI elements(jsx) in the dom

Topics :

1. Conditional rendering in react
2. Drawbacks of dom and Virtual dom in react
3. Class component creation

Tasks :

1. Repeat the class
2. Render a list conditionally based on whether it contains items or is empty.
3. Conditionally apply CSS classes
