# Chapter 05 - Lets get Hooked

## -------------------- ASSIGNMENT --------------------

### 1. What is the difference between `Named` export, `Default` export and `* as` import?

With `ES6` it is now possible to import the code from one file to another as `Modules`. Modules are javascript files that can be loaded in a different mode. This was necessary because modules have different semantics.

To use `modules` you need to first `export` them from the file when they are and then `import` them in the file where you want to use them.

The ways to export these modules are named as `Named export` and `Default export`. Same for importing as well.

A JavaScript file can export only one module by default `(only 1 Default export per file)` and as many Named export as you want. Given below are the different ways of exporting and importing these modules.

- <u>Default export</u> :-

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

- The import need not necessarily have the same name as the export in case of Default export.

```
import xyz from "file-path-of-Component1";
```

`will work as same as`

```
import Component1 from "file-path-of-Component1";
```

- <u>Named export</u> :-
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

- <u>\* as</u> :-
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

##

### 3. What are React Hooks?

##

### 4. Why do we need a useState Hook?
