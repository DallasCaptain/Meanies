// What is two-way binding?
    //between the views and model so if you change one it changes the other
    //[(ngModel)]="something"
    //is when you connect the view and model so that if the model is updated it updates the view
    //it help exchange data from the component to the view and vice versa
    //allowing it to exchange data between the view and component.

// What does it mean to nest components?
    // puting the object/component in another component, so we can call on the child indviduually
    //small components makeup the entire webpage so you can repeat a component multiple times in the root
    //make smaller more manageable components for reuse
    //angular is a spa nested components are placing components in each other that manipulate a portion of the dom


// Assume that you have a component that you created by running ng generate component task. How would you nest this component within the root component?
    //by placing <app-task></app-task> in the root component.html
    //check what the task.component selector and put it in the app.component.html tags
    //assign it to a specific portion of the page to do a specific thing
    //in task.component.ts you have a selector that is app plus name of component then you <app-nameofcompoennt></app-nameofcompoennt>



//  When nesting components, when would we use @Input()?
    //pass in any data from root component to generated component
    //use when the hierarch is smaller
    //do inputs when child components need to be prepared to recieve inputs from the parent


// Write the code that you would need in your service to make a post request to your server. For example, assume you have a post route to /task that expects a new task in the request body.
    //add_task(new_task){
    //     return this._http.post('/task', new_task)
    // }


    