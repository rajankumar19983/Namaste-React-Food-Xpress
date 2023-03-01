# Chapter 07 - Finding The Path

## -------------------- ASSIGNMENT --------------------

### 1. What are various ways to add images into our App? Explain with code examples.

There are several different ways of inserting images in React.

- Using the `<img/>` tag

Using the `<img/>` tag you will need to provide it with `two` values:
`src` (source): the `URL` or the `path` of the image.
`alt` (alternate): an alternate text in case of the image not being available.

```
<img src="https://reactjs.org/logo-og.png" alt="React Image" />
```

- Setting a `background-image`

Using CSS you can set the `background` of any element. This is most use when you want to `display content over the image`.

```
.app {
    background-image: url(https://reactjs.org/logo-og.png);
}
```

#### Adding an image from your computer

- With the `<img/>` tag

Drag your image into your project and `import` it into the desired component. Afterward, you can insert the name of the import into the source property.

```
import reactLogo from "./reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="react logo" />
}
```

- Inserting a local background image

Just like before you would import the image. Then you would insert it using CSS URL(…) or using inline styling as shown below.

```
import reactLogo from './reactLogo.png'

export default function App() {
  return <div style={{ backgroundImage: reactLogo }}>Overlay text</div>
}
```

##

### 2. What would happen if we do console.log(useState())?

- `useState()` returns an `Array` of two elements. The first element is a `state variable` and the second element is a `function` to `update` the `state variable`.

- In case of `console.log(useState())`, it returns `[undefined, function()]`. The state variable is `undefined` because we did not pass any initial state into `useState()`.

##

### 3. How will useEffect behave if we don't add a dependency array?

- `useEffect()` is a Hook which React gives us, which is called after our Component is rendered. It takes 2 parameters, a callback function and a dependency array. The dependency array is `optional`.

- Lets see different ways of using useEffect()

#### Case 1

We pass an empty dependency array. In this case, useEffect will be called only once when our Component loads for the first time. Any further re-rendering of the Component won't call this useEffect.

```
useEffect( ()=>{
	console.log("useEffect");
}, []);
```

#### Case 2

We don not pass the dependency array. In this case, useEffect will be called everytime our Component is rendered or re-rendered due to change in any state variable or something else.

```
useEffect( ()=>{
  console.log("useEffect");
});
```

#### Case 3

We pass a variable in the dependency array. In this case, useState will be called on the first render of our Component and every time the state variable "isLoggedIn" is updated.

```
useEffect( ()=>{
  console.log("useEffect");
}, [isLoggedIn]);
```

##

### 4. What is SPA?

A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

##

### 5. What is difference between Client Side Routing and Server Side Routing?

#### Client Side Routing

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page.
When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application.
The changed state will ultimately result in a different view of the webpage.
This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

`PROS`

- Because less data is processed, routing between views is generally faster.
- Smooth transitions and animations between views are easier to implement.

`CONS`

- The whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.
- Because the whole website or web-application is loaded initially, there is a possibility that there is data downloaded for views you won’t even come across.
- It requires more setup work or even a library. Because server-side is the standard, extra code must be written to make client-side routing possible.

#### Server Side Routing

When browsing, the adjustment of a URL can make a lot of things happen.
This will happen regularly by clicking on a link, which in turn will request a new page from the server.
This is what we call a server-side route. A whole new document is served to the user.

`PROS`

- A server-side route will only request the data that’s needed. No more, no less.
- Because server-side routing has been the standard for a long time, search engines are optimised for webpages that come from the server.

`CONS`

- Every request results in a full-page refresh.
- It can take a while for the page to be rendered.
