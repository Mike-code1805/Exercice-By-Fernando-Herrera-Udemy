# Component Pattern Control Props

It is widely used, for example in React forms, if we want to change the value of an input, we normally assign a value and the onChange but our component should be able to receive the information from outside and the Control Props allow us to know when it changes and set a value for it.

- Here we practice giving control to our user or coworker over the properties and state of our component, usually this pattern is the one used traditionally in forms, that is:

```
<input
     value={ some readonly value }
     onChange={ some function that changes the value }
/>
```
