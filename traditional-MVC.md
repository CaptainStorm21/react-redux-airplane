  State in Redux is represented as simple Javascript object
  This makes your app much easier to think through
  
  Data would be the list of places/homes to stay (lets say it is a hotel website)
  UI state woud include toggle for maps to be deplays
  
  The traditioanl MVC
  * The Model VIew controller - pattern has traditionally been used to manage complex JS apps
  * In MVCs, you wlll use multi dimentional data flow
  * this means that different controller/modelsview can update and affect each other
  * while this ini make it easier to get thngs working , it can also become hard to comprehend as your app scales
  * this is due to the fact that it can be difficult ot understand where applicaiton state is being updated from as well as having multiple copies of data maaged separately
