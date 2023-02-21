# Chapter 04 - Talk is Cheap, show me the code

## -------------------- ASSIGNMENT --------------------

### 1. Is JSX mandatory for React?

`JSX` is just a syntax extension that allows developers to write JavaScript and HTML-like code together. A piece of task can be done easily in JSX compared to that in plain React. So Using JSX is not mandatory but it reduces pain of writing complex code. Given below is the comparison of plain React code and JSX code for a simple Hello message.

- Hello message in plain React

```
const message = React.createElement("h1", { className: "hello" }, "Hello World");
```

- Hello message in JSX

```
const message = <h1 className="hello">Hello World</h1>;
```

##

### 2. Is ES6 mandatory for React?

`ES6` is not mandatory for React but is highly recommendable as it simplifies our code and most of the new projects written in React uses ES6. You should be familier with the concepts like `Classes`, `Arrow Functions`, `variables(let and const)` etc.

##

### 3. How can I write comments in JSX?

Considering that you can write any `JavaScript` inside `{ }` in JSX, you can place JavaScript comment inside them. So you can write comments like below in JSX.

```
{
  /*
  This is
  a multi-line
  comment
  */
}
```

##

### 4. What is <React.Fragment></React.Fragment> and <></>?

React says that you can only return one parent element from any component. So, people started using `<div></div>` as parent element and write JSX inside it. However this `div` used to get added in our DOM. So React came with this element `<React.Fragment></React.Fragment>` that acts as parent element and also does not get added to our DOM. `<></>` is the shortcut for `<React.Fragment></React.Fragment>` but does not allow you to add any attributes inside it.

-Example

```
return(
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>
);

return(
  <>
    <Header />
    <Body />
    <Footer />
  </>
);
```

##

### 5. What is Virtual DOM?

Virtual DOM is a cheap copy of our original DOM. It is represented as a tree of elements. Each element in our code is a node of this Virtual DOM. Whenever there is a change in state of any element in out code, a new Virtual DOM is created and compared to last Virtual DOM and React makes a note of difference between two Virtual DOMs. Then it finds the best possible way to make these changes in real DOM. Now only the updated node will be re-rendered on the page.

##

### 6. What is Reconciliation in React?

The “reconciliation” algorithm in React is how the decision to re-render the component is made. It is an algorithm React uses to diff one tree with another to determine which parts need to be changed. In the browser, DOM manipulation is expensive and time consuming, both in mounting and unmounting. Part of what makes React very performant is its reconciliation algorithm. In short, it watches closely for differences, and only updates the DOM when necessary and tries to update only the parts which need to be changed.
The process of re-rendering is mentioned in the above question.

##

### 7. What is React Fibre?

- Fiber is the new reconciliation engine in React 16.
- The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures.
- Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.
- Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.

##

### 8. Why we need keys in React? When do wee need keys in React?

A `key` is a special attribute that we use when creating list of similar elements in React. `Keys` help React identify which items have `changed`, are `added`, or are `removed`.

- Example

```
<ul>
  <li key={0}> 1 </li>
  <li key={1}> 2 </li>
  <li key={2}> 3 </li>
</ul>
```

In the above example, if a change is made withput key attribute, React needs to re-render every element. But if key is used, it re-renders only the changed element.
We need keys when there are similar elements like one in the above example. If the elements are different, then it is not mandatory to use keys.

##

### 9. Can we use index as keys in React?

Yes, you can use `index` as a key but it is not a good practice because the order of items might change. This can negatively impact performance and may cause issues with component state.

##

### 10. What is props in React?

`props` is shorthand for `properties`. Props are arguments passed into React components. Props are passed to components via HTML attributes.

- Example

```
const myElement = <Car brand="Ford" />;
```

- The component receives the argument as a props object:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
```

##

### 11. What is Config Driven UI?

`Config Driven UI` are based on the configurations of the data, that application receives. It is a good practice to use config driven UIs to make application dynamic. It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
