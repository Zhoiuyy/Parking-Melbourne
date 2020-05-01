Homepage:
URL: https://easiparking.herokuapp.com
Explanation: Homepage
Method: GET

Account:
1. Method: GET  URL: https://easiparking.herokuapp.com/account
Explanation: display all account information.


2. Method: GET  URL: https://easiparking.herokuapp.com/account/:id
Explanation: display a specific account information.
e.g. GET https://easiparking.herokuapp.com/account/10003
(show the information of account with id 10003 )

3. Method: POST  URL: https://easiparking.herokuapp.com/account/sign-up
Explanation: handle the POST request to create a new account
e.g. POST: {"id":"30005","password":"30005","name":"WebInfo","gender":"N","licenseId":"30005","CardHolderName":"WebInfo","CardNumber":"123456789","expiryDate":"07/20","CVV":"123"}
(you can check through the account home page URL:https://easiparking.herokuapp.com/account)

4. Method: POST  URL: https://easiparking.herokuapp.com/account/:id/update
Explanation: Update a specific account by giving its _id
e.g. https://easiparking.herokuapp.com/account/5eaabe1d4769a60017e8d666/update

POST:{"id":"20002","password":"20002","name":"dd","gender":"d","licenseId":"ddd","CardHolderName":"dd","CardNumber":"28393","expiryDate":"11/23","CVV":"111"}

(Update the account with _id:5eaabe1d4769a60017e8d666 )
(you can check through the account home page URL:https://easiparking.herokuapp.com/account )

5. Method: GET URL: https://easiparking.herokuapp.com/account/:id/delete
Explanation: Delete a specific account by giving its _id
e.g. GET https://easiparking.herokuapp.com/account/5eabac956a978400172dd972/delete
(Delete the account with _id 5eabac956a978400172dd972)

6. Method: GET URL: https://easiparking.herokuapp.com/account/:id/payment-details
Explanation: only show the payment detail for a specific account.
e.g. GET https://easiparking.herokuapp.com/account/10003/payment-details

7. Method: GET URL: https://easiparking.herokuapp.com/account/:id/history
e.g. GET https://easiparking.herokuapp.com/account/10003/history

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

Parking: 
1. Method: GET  URL: https://easiparking.herokuapp.com/parking
Explanation: To access the homepage of parking.

2. Method: GET https://easiparking.herokuapp.com/parking/viewing_status
Explanation: display all parking information. 

3. Method: POST https://easiparking.herokuapp.com/parking/newparking
Explanation: insert a new parking record, e.g. 
{"id":"1000009","user_id":"Mearia","license_plate":"12389A","location":"Parkville","session":"1 hour","start_time":"12.00","end_time":"13.00","min_before":"5","status":"finished"}

5. Method: GET https://easiparking.herokuapp.com/parking/done_newparking
Explanation: inform user that new record is successfully created; only used in insomnia.rest

6. Method: GET https://easiparking.herokuapp.com/parking/setting_notification/:id
Explanation: display notification time for a specific parking record id, e.g. 
https://easiparking.herokuapp.com/parking/setting_notification/5eabb35df45ee5aef30ad2d5

7. Method: GET https://easiparking.herokuapp.com/parking/finding_car/:id
Explanation: display parking location for a specific parking record id, e.g.
https://easiparking.herokuapp.com/parking/finding_car/5eabb35df45ee5aef30ad2d5

8. Method: GET https://easiparking.herokuapp.com/parking/paying
Explanation: display a message that user has already paid for his session

9. Method: GET https://easiparking.herokuapp.com/parking/:id
Explanation: display parking record with a specific id, e.g. 
https://easiparking.herokuapp.com/parking/1000010