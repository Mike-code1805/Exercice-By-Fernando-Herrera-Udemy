# Reinforcement over React

## 01-BASES
### Section Topics:

- TypeScript with the main React Hooks
- Small animations with GreenSock
- Timelines
- Custom Hooks
- References to DOM elements
- Objects as state
- Interfaces
- Types
- Reducers
- Action Creators

#### useState: 
Advantage: 
- We can call it as many times as we want to use as many state variables as we need. 

#### useReducer: 
Advantage:
- Easily make different modifications in different cases.

#### When should useReducer and useState be used?
This will depend on the state, as long as the state is very large and especially you want to know the value of the previous state and when you have many actions that can be programmed it is more convenient to use useReducer. We use useState preferably when it is a relatively simple and predictable state.