# Chapter 07 - Lets Get Classy

## -------------------- ASSIGNMENT --------------------

### 1. How do you create Nested Routes react-router-dom configuration?

- First lets create a Route from Parent page to Child page. To do this we need to first call `createBrowserRouter` method given by `react-router-dom`.

```
const router = createBrowserRouter([
  {
    path: "/",     // This is the path(after root URL) to route to below element
    element: <Parent />,     // This is the
    errorElement: <Error />,    // Error component is shown when there is difference in path or React encounters some error
    children: [    // children is an array that takes object of each child route
      {
        path: "/child",
        element: <Child />,
        errorElement: <Error />
      }
    ]
  }
])
```

- Now that we have a child route from parent, we will create another route inside this child resulting in `Nested route`.

```
const router = createBrowserRouter([
  {
    path: "/",     // This is the path(after root URL) to route to below element
    element: <Parent />,     // This is the
    errorElement: <Error />,    // Error component is shown when there is difference in path or React encounters some error
    children: [    // children is an array that takes object of each child route
      {
        path: "/about",
        element: <Child />,
        errorElement: <Error />,
        children: [
          {
            path: "subchild",
            element: <SubChild />
          }
        ]
      }
    ]
  }
])
```

- In the subchild path, we don't put it as `/subchild` because it would act as `root/subchild`. In our case, we need `root/about/subchild`.

##

### 2. Read about createHashRouter, createMemoryRouter from React Router docs.

- `createHashRouter` :-
  This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
  `Using hash URLs is not recommended.`

- `createMemoryRouter` :-
  Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.

##

### 3. What is the order of life cycle methods in Class based components?

- Order of life cycle methods in Class based components is (from react v16.4) :-
  1. constructor()
  2. render()
  3. componentDidMount()
  4. componentDidUpdate()
  5. componentWillUnmount()

##

### 4. Why do we use componentDidMount?

`componentDidMount()` is invoked immediately after a component is mounted (inserted into the tree). If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

This method is a good place to set up any subscriptions like `setTimeout()` or `setInterval()`. If you do that, don’t forget to unsubscribe in `componentWillUnmount()`.

##

### 5. Why do we use componentWillUnmount? Show with example.

- `componentWillUnmount()` is called as soon as we navigate from current page to some other page.
- Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route.
- We might have subscription like `setTimeout()` or `setInterval()` used inside our component that needs to be unsubscribed before Unmounting them from DOM.
- If we don't clean them, these process will keep on running in background and consume browser resources.
- And if we decide to visit the same page again, another instance of these process will be created and start consuming more browser resources.
- If this keeps on repeating, our Application will crash and even browser can crash.
- To avoid such situations the cleanup function can be done in `componentWillUnmount`.

##

### 6. Why do we use super(props) in constructor?

`Props` are used to pass data from parent components to child components. These props can be updated only by the parent component. It is `read-only` for child components. We might require props inside the child component constructor with `this` keyword. `Super()` function calls the constructor of the parent class. Using super constructor with props arguments `"super(props)"` basically allows accessing `this.props` in a Constructor function `or else it will this.props will be undefined here`.

##

### 7. Why can't we have the callback function of useEffect async?

You cannot directly make the callback function supplied to the useEffect hook async because:

- `async` functions implicitly `return a promise` , and;
- `useEffect` expects its callback to either `return nothing` or a `clean-up function` (cleanup function that is called when the component is unmounted).
- The returned promise from async callback function will affect the clean-up function from being called.
- This is why we cannot have the callback function of useEffect async.
