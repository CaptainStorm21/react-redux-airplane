Flux  is patter for managing state in JS apps
* unidirectional data flow
  the idea is that the data only flows in one direction making things much more predictable and easier to reason about
  this also makes things much more scalable as well as easier to test and debug
  the redux library is impmplementation of the flux pattern
  
Flux Data flow: Actions
  Actions describe "what happened" in our application
  they are dispatched
  once they are dispatched they are sent off to the store
  The Store is the core of the entire application
    it maintains that state object and responds to actions
    that are being dispatched
    it handsle these responses by calllong reducer function.
    
Flux data flow: Store
  maintains the store , responsds to actions by calling a reducer
  reducer takes an old state and action, return a new value
  after reduser is called, subscribers are then called
  allows us to update the views with updated data such as making network requests
    
 Flux : view
  views are also able to dispatch actions
  data always flows in a single direction
  
