Homepage:
URL: https://easiparking.herokuapp.com
Explanation: Homepage
Method: GET

Account:
1. URL: https://easiparking.herokuapp.com/account
Explanation: display all account information.
Method: GET

2. URL: https://easiparking.herokuapp.com/account/:id
Explanation: display a specific account information.
Method: GET  https://easiparking.herokuapp.com/account/10001
(show the information of account with id 10001 )

3. URL: https://easiparking.herokuapp.com/account/sign-up
Explanation: handle the POST request to create a new account
Method: 
POST: {"id":"30005","password":"30005","name":"WebInfo","gender":"N","licenseId":"30005","CardHolderName":"WebInfo","CardNumber":"123456789","expiryDate":"07/20","CVV":"123"}
(you can check through the account home page URL:https://easiparking.herokuapp.com/account)

4. URL: https://easiparking.herokuapp.com/account/:id/update
Explanation: Update a specific account  by giving its _id
Method: https://easiparking.herokuapp.com/account/5eaabe1d4769a60017e8d666/update
POST:  
{"id":"20002","password":"20002","name":"dd","gender":"d","licenseId":"ddd","CardHolderName":"dd","CardNumber":"28393","expiryDate":"11/23","CVV":"111"}

(Update the account with _id:5eaabe1d4769a60017e8d666 )
(you can check through the account home page URL:https://easiparking.herokuapp.com/account )

5. URL: https://easiparking.herokuapp.com/account/:id/delete
Explanation: Delete a specific account by giving its _id
Method: 
https://easiparking.herokuapp.com/account/5eaabe5f4769a60017e8d667/delete
(Delete the account with _id 5eaabe5f4769a60017e8d667)

6. URL: https://easiparking.herokuapp.com/account/:id/payment-details
Explanation: only show the payment detail for a specific account.
Method: https://easiparking.herokuapp.com/account/10001/payment-details

7. URL: https://easiparking.herokuapp.com/account/:id/history
Method: https://easiparking.herokuapp.com/account/10001/history

Find car park:
1. Method: GET 
URL: https://easiparking.herokuapp.com/findCarPark 
Explanation: To access the homepage of finding car park

2. Method: GET 
URL: https://easiparking.herokuapp.com/findCarPark/get-curr-location
Explanation: To get the current location of the user, however, at this stage, it is a fake data from the MongoDB database, without using the real GPS.

3. Method: POST 
URL: https://easiparking.herokuapp.com/findCarPark/go 
Explanation: Insert the destination in a json format  {type: “dest”, name: String, address: String, postcode: String}. (eg. {"type":"dest","name":"The Law Building","address":"185 Pelham St, Carlton","postcode":"3053"}) This can be verified using navigate.

4. Method: GET 
URL: https://easiparking.herokuapp.com/findCarPark/filter 
Explanation: To display the filter information for parking bays, it is only one line message at this stage.

5. Method: GET 
URL: https://easiparking.herokuapp.com/findCarPark/navigate 
Explanation: To access the navigation, it only displays the current location and destination for now.
