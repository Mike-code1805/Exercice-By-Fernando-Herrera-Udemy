# Component Pattern State initializer + Function Child = Render Props -> * Formik implementation *

- The State Initializer pattern is observed next to the component design that Formik uses.

- The main objective is to be able to expose everything that the user (another developer) can use, the pattern mainly asks to offer an initial state and a way to restore the state to its original form, but we will take it to another level here exposing functions and new properties.

- We also ship a function as children, similar to Formik's implementation.