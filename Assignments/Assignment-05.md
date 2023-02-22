# Chapter 05 - Lets get Hooked

## -------------------- ASSIGNMENT --------------------

### 1. What is the difference between `Named` export, `Default` export and `* as` import?

With `ES6` it is now possible to import the code from one file to another as `Modules`. Modules are javascript files that can be loaded in a different mode. This was necessary because modules have different semantics.

To use `modules` you need to first `export` them from the file when they are and then `import` them in the file where you want to use them.

The ways to export these modules are named as `Named export` and `Default export`. Same for importing as well.

A JavaScript file can export only one module by default `(only 1 Default export per file)` and as many Named export as you want. Given below are the different ways of exporting and importing these modules.

- `Default export` :-

This is a functional component and is exported as Default export

```
const Component1 = () => {
  // Some code
}

export default Component1;
```

The above Default export is imported as:-

```
import Component1 from "file-path-of-Component1";
```

The import need not necessarily have the same name as the export in case of `Default export`.

```
import xyz from "file-path-of-Component1";
```

`will work as same as`

```
import Component1 from "file-path-of-Component1";
```

- `Named export` :-

Named exports are exported directly by using they keyword `export` before the module.
A JavaScript file can have many Named exports.

In the below example, `Component2` and `Component3` are exported as `Named export` and `Component4` is exported as `Default export`.

```
export const Component2 = () => {
  // Some code
}

export const Component3 = () => {
  //Some code
}

const Component4 = () => {
  //Some code
}

export default Componet4;
```

The above exports can be imported as:-

```
import { Component2 } from "file-path-of-Component2";
import { Component3 } from "file-path-of-Component3";
```

`or`

```
import { Component2, Component3 } from "file-path-of-Component2-and-3";
```

The Named and Default exports can be imported together as:-

```
import Component4, { Component2, Component3 } from "file-path-of-Component2-3-4";
```

- `* as` :-

This is used for importing all exports as an onject using `import * as <obj>`.
From the above example,

```
import Component4, { * as myImports } from "file-path-of-Component2-3-4";

//use the named exports like this
myImports.Component2;
myImports.Component3;
```

##

### 2. What is the importance of config.js file?

`config.js` also termed as `constants.js` is a file where all the most used data is stored and exported so that other files can import from here.

Suppose you are building an application that need information like user's name at 50 different places. If you store the name at `config.js` and export from here, and import the name at all 50 places, a single change in `name` value at canfig.js will result in change at all 50 places.

##

### 3. What are React Hooks?

Before React version 16.8, developers could handle state and other React features only using class components. But with version 16.8, React introduced a new pattern called Hooks.

With React Hooks, we can use state, and other React features, in a functional component. It empowers devs to do functional programming in React.

With React Hooks, we can isolate stateful logic and side-effects from a functional component. Hooks are JavaScript functions that manage the state's behaviour and side effects by isolating them from a component.
So, we can now isolate all the stateful logic in hooks and use (compose them, as hooks are functions, too) into the components.

The question is, what is this stateful logic? It can be anything that needs to declare and manage a state variable locally.

For example, the logic to fetch data and manage the data in a local variable is stateful.

React provides a bunch of standard in-built hooks:

- useState:- To manage states. Returns a stateful value and an updater function to update it.
- useEffect:- To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext:- To return the current value for a context.
- useReducer:- A useState alternative to help with complex state management.
- useCallback:- It returns a memorized version of a callback to help a child component not re-render - unnecessarily.
- useMemo:- It returns a memoized value that helps in performance optimizations.
- useRef:- It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect:- It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue:- Helps to display a label in React DevTools for custom hooks.

##

### 4. Why do we need a useState Hook?

`useState()` Hook is a special type of function that is used to maintain the state of variables. React continuously keeps track of these variables and re-renders the page where ever required.
`useState()` takes one parameter, which is the initial state of the variable, and returns an array with state variable and a function to update the state variable. The array can be de-structured as per our wish.

- We get `useState()` from `react library`. So in-order to use it, you need to import first.

```
import { useState } from "react";
```

- Syntax for useState() hook:-

```
const [myVariable, setMyVariable] = useState(initialState);
```

- To update the state of the variable, use `setMyVariable(newState)` and boom the variable is updated and if the variable is used anywhere in our program, that part will be re-rendered with new value(new state).
