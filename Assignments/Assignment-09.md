# Chapter 09 - Optimizing Our App

## -------------------- ASSIGNMENT --------------------

### 1. When and why do we need lazy()?

- Usually, `lazy loading` is not used in React applications, since we mostly use React to develop `single-page applications`. Developers can bundle the entire code as a single bundle and use it for deployments.

- But, as the application gets complex, we need to consider `performance` and `user experience`. In such situations, we need to use the `lazy-loading` techniques available with React to bundle the critical and noncritical parts of the application separately.

- `React.lazy()` :-
  React.lazy() allows developers to easily create components with dynamic imports and render them as normal components. When the component is rendered, it will automatically load the bundle that contains the rendered component.

You need to provide a single input parameter to call React.lazy(). It accepts a function as an input parameter, and that function should return a promise after loading the component using import(). Finally, the returned promise from React.lazy() will give you a module with a default export containing the React component.

`Syntax`

```
// Without React.lazy()
import AboutComponent from './AboutComponent ';

// With React.lazy()
const AboutComponent = React.lazy(() => import('./AboutComponent '));

const HomeComponent = () => (
    <div><AboutComponent /></div>
)
```

##

### 2. What is Suspense?

- When we use lazy loading, components are rendered as we navigate. So, we need to have a placeholder for those components until they are loaded. As a solution, React.Suspense was introduced, and it acts as a wrapper for the lazy components.

- You can wrap a single lazy component, multiple lazy components, or multiple lazy components with different hierarchy levels with React.Suspense. In addition, it accepts a prop named fallback as the placeholder, and you can pass a component or an element for that.

- For example, you can pass the waiting or loading message as the fallback prop, and it will be displayed until the wrapped lazy component is rendered.

`Syntax`

```
import React, { Suspense } from "react";
const AboutComponent = React.lazy(() => import('./AboutComponent'));

const HomeComponent = () => (
    <div><Suspense fallback = { <div> Please Wait... </div> } >
            <AboutComponent /></Suspense></div>
);
```

##

### 3. Why we got this error: `A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition`? How does Suspense fix this error?

When we navigate to the component that is supposed to be `lazy loaded`, React quickly tries to render that component. Since the component is lazy loaded, it takes some time to be bundled and fetched, so React cannot find the code for that component and throws the error. To resolve this issue, we use Suspense.

##

### 4. Advantages and disadvantages of using this code splitting pattern?

#### Advantages of code splitting / lazy loading

- Reduces initial loading time by reducing the bundle size.
- Reduces browser workload.
- Improves application performance in low bandwidth situations.
- Improves user experience at initial loading.
- Optimizes resource usage.

#### Disadvantages of code splitting / lazy loading

- Not suitable for small-scale applications.
- Placeholders can slow down quick scrolling.
- Requires additional communication with the server to fetch resources.
- Can affect SEO and ranking.

##

### 5. When and why do we need Suspense.

We need suspense when we use lazy loading. Lazy loading needs some time to be fetched but our React is so fast that it tries to render the lazy loaded component as soon as we navigate to that component. as a result, React can't find the code and throws error. To prevent this, we use Suspense that makes React wait till the component is fetched.
