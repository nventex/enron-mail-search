## Unidirectional data flow with React-Redux

+--->Action
^       +
|       |
|       |
|       v   +---->
|     Store       Reducers
|       +   <----+
|       |
|       |
|       v
+----+React

React - Notifies SearchAction that someone clicked the search button.
Action - Dispatches the "SEARCH" action type to all reducers.
Reducer - SearchReducer is the only one that cares about the action and makes a new copy of the state and returns it.
Store - Single store makes sure that all connected components are aware.
React-Redux - Tells React components about the change so that it only has to bother with updating the UI when necessary.
React - New data passed down via props from the store, calls render to update the UI to reflect the change.