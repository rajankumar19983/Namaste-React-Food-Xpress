# Chapter 06 - Exploring The World

## -------------------- ASSIGNMENT --------------------

### 1. What is a Microservice?

Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams.

In Microservice architecture, it is easy to make changes and deploy because you need to deply only a particular service and not whole application like in Monolithic architecture.

##

### 2. What is a Monolith architecture?

A monolithic architecture is the traditional unified model for the design of a software program. Monolithic, in this context, means "composed all in one piece." According to the Cambridge dictionary, the adjective monolithic also means both "too large" and "unable to be changed."

In Monolithic architecture, a small change any where requires complete deployment of whole application.

##

### 3. What is the difference between Monolith and Microservice?

#### Monolithic Architecture :-

- A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn’t far from the truth of a monolith architecture for software design. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.

#### The advantages of a monolithic architecture include:

`Easy deployment` – One executable file or directory makes deployment easier.

`Development` – When an application is built with one code base, it is easier to develop.

`Performance` – In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices.

`Simplified testing` – Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application.

`Easy debugging` – With all code located in one place, it’s easier to follow a request and find an issue.

#### The disadvantages of a monolith include:

`Slower development speed` – A large, monolithic application makes development more complex and slower.

`Scalability` – You can’t scale individual components.

`Reliability` – If there’s an error in any module, it could affect the entire application’s availability.

`Barrier to technology adoption` – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.

`Lack of flexibility` – A monolith is constrained by the technologies already used in the monolith.

`Deployment` – A small change to a monolithic application requires the redeployment of the entire monolith.

#### Microservices Architecture :-

- A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole.

- Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements.

#### The advantages of microservices are:

`Agility` – Promote agile ways of working with small teams that deploy frequently.

`Flexible scaling` – If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure. We are now multi-tenanant and stateless with customers spread across multiple instances. Now we can support much larger instance sizes.

`Continuous deployment` – We now have frequent and faster release cycles. Before we would push out updates once a week and now we can do so about two to three times a day.

`Highly maintainable and testable` – Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services.

`Independently deployable` – Since microservices are individual units they allow for fast and easy independent deployment of individual features.

`Technology flexibility` – Microservice architectures allow teams the freedom to select the tools they desire.

`High reliability` – You can deploy changes for a specific service, without the threat of bringing down the entire application.

`Happier teams` – The Atlassian teams who work with microservices are a lot happier, since they are more autonomous and can build and deploy themselves without waiting weeks for a pull request to be approved.

#### The disadvantages of microservices can include:

`Development sprawl` – Microservices add more complexity compared to a monolith architecture, since there are more services in more places created by multiple teams. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance.

`Exponential infrastructure costs` – Each new microservice can have its own cost for test suite, deployment playbooks, hosting infrastructure, monitoring tools, and more.

`Added organizational overhead` – Teams need to add another level of communication and collaboration to coordinate updates and interfaces.

`Debugging challenges` – Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging.

`Lack of standardization` – Without a common platform, there can be a proliferation of languages, logging standards, and monitoring.

`Lack of clear ownership` – As more services are introduced, so are the number of teams running those services. Over time it becomes difficult to know the available services a team can leverage and who to contact for support.

##

### 4. Why do we need a useEffect Hook?

- The useEffect Hook allows you to perform side effects in your components.

- Some examples of side effects are: fetching data, directly updating the DOM, and timers.

- useEffect accepts two arguments, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```

- The `() => {}` is callback function and `[]` is called a empty dependency array. If anything is passed as Dependency array, then on every state change of that dependency, our useEffect call back function will be called. In the example below, on every state change of `currentState`, `serCurrentState("true")` will be called.

```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```

##

### 5. What is Optional Chaining?

Optional chaining is a process for querying and calling properties, methods, and subscripts on an optional that might currently be nil . If the optional contains a value, the property, method, or subscript call succeeds; if the optional is nil , the property, method, or subscript call returns nil. It is denoted by `?.`.

```
const length = array?.length;
```

##

### 6. What is Shimmer UI?

A shimmer UI resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (it's currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.

##

### 7. What is the difference between JS expression and JS statement?

The Main Differences Between an Expression and a Statement in Programming. Expressions can be assigned or used as operands, while statements can only be declared. Statements create side effects to be useful, while expressions are values or execute to values

- JS statement :-

```
const a = 10;
```

- JS expression :-

```
5 * 10 → produces 50
num > 100 → produces either true or false
```

##

### 8. What is Conditional rendering, explain with a code example?

Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, it allows us to render different elements or components based on a condition. This concept is applied often in the following scenarios:

- Rendering external data from an API.
- Showing or hiding elements.
- Toggling application functionality.
- Implementing permission levels.
- Handling authentication and authorization.

##

### 9. What is CORS?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

##

### 10. What is async and await?

- We all know that JavaScript is Synchronous in nature which means that it has an event loop that allows you to queue up an action that won’t take place until the loop is available sometime after the code that queued the action has finished executing.

- But there are a lot of functionalities in our program which make our code Asynchronous and one of them is the Async/Await functionality. Async/Await is the extension of promises which we get as support in the language.

`Async` :- It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await` :- Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example:

```
// async function getRestaurant to fetch Swiggy API data
async function getRestaurants() {
  const data = await fetch(
    "Swiggy_API_URL"
  );
  const json = await data.json();
  // we get the Swiggy API data in json format
  console.log(json);
}
```

##

### 11. What is the use of `const json = await data.json()` in getRestaurants?

The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats. so we can extract the JSON object from a fetch response by using `await data.json()`. `data.json()` is a method on the data object that lets you extract a JSON object from the data or response. The method returns a promise because we have used await keyword. so data.json() returns a promise resolved to a JSON object.
