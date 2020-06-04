Application name: easiparking   

Introduction to the application:  
Our application will assist our users to find their most desirable parking space.    

Homepage:  
URL: https://easiparking.herokuapp.com  

Group Size: 3  

Currently Availble Functionalties:  Log In, Account Management, Parking Management

You can always return to the home page by clicking  "Easiparking" at the top left corner.  

Functionality 1:  
Log In - This allows user to  sign up an account or log in, cookies are used to set permissions to access the web page. e.g. only homepage and interface(1, 2, 3) can browsed without logging in  

1. Account Sign-up:  
URL: https://easiparking.herokuapp.com/sign-up  
By pressing sign up button on the top right corner of home page.  
User can sign up their own account by filling the information.  
Username is unique for each user and case sensitive, it can't be changed after signing up.  
When the user signing up, the system will detect if the username has been used by other users, if so, it will display a error message and the user will have to sign up using a different username.   
All informations are required(can not be empty) except gender  
views: views/signup.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js
models: models/account.js

2. Account Log-In  
URL: https://easiparking.herokuapp.com/account/log-in  
By pressing log in button on the top right corner.  
User can log into his/her own account and view more information and access more functionalities.  
You can test this with your own account or our sample account  
Sample account for testing (all lowercase): Username:zhangxiyan Password:zhangxiyan  
views: views/logIn.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js
models: models/account.js

3. Contact Us  
URL: https://easiparking.herokuapp.com/contact  
Click the 'Contact Us' on the middle bar, or click " The Fast and the Furious" at the bottom of the page.  
This page lists our email   
views: views/contact.pug  
routes: routes/contactRouter.js  


You need to log in before you can browse the other interfaces. Here are the features available after you log in  

Functionality 2:   
Account Management -  This allows user to view their account information and upadte informations, users can submit feedbacks.

4. Account overview  
After logging into the account.   
User can enter the overview page which includes information of himself by clicking the the username at the top right corner.  
There will be a few buttons to be clicked at the bottom and these will redirect the user to update the account information/password or view the parking history.  
views: views/viewaccount.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js
models: models/account.js

  
5. Updating account information  
After clicking the update information button on user's overview page, user will be redirected to the page where the user is allowed to type in new information to be updated. The page will be filled in automatically with your current information, you can adjust any of them according to your decision, these will not include the username since it cannot be modified after signing up.  
views: views/update.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js
models: models/account.js


6. Updating account password  
After clicking the update password button on user's overview page, user will be redirected to the password reset page where the user will be asked to type in the new password twice. The page will display the meassage wheather you've changed the password successfully.  
views: views/resetPassword.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js controllers/brypts.js
models: models/account.js


7. View parking history  
After clicking the parking history button on user's overview page, user will be redirected to the page where it displays the parking historys of the current user. It will display the basic information of each parking in a table form.  
For now, please use "zhangxiyan" account to test the parking history  
There is a link below the parking history if you have any feedback to submit  
views: views/parkingHistory.pug  
routes: routes/accountRouter.js  
controllers: controllers/parkingController.js
models: models/parkingHistory.js models/layer.js models/restriction.js


8. Feedback  
By clicking the link below the parking history, you can submit your feedback here, all informations are required(can not be empty).  
views: views/feedback.pug  
routes: routes/feedbackRouter.js  
models: models/feedback.js


9. Logout  
Log out anytime by clicking the 'log out' button at the top right corner.  
views: views/default.pug  
routes: routes/accountRouter.js  
controllers: controllers/accountController.js
models: models/account.js

Functionality 3:  
Parking Management - This allows user to see the real-time parking bay information of Melbourne city, and pick a most suitable parking bay, users can management their parking infomation, such as starting parking, finishing parking, paying.

10. Find Car Park  
URL: https://easiparking.herokuapp.com/findCarPark  
Click the 'Find Car Park' on the middle bar, user can overviews the parking information of the Melbourne city,  find a suitable parking bay from the map, enter the parking bay ID to start parking.  
views: views/findCarPark.pug  
routes: routes/findCarPark.js  


11. Parking status  
URL: https://easiparking.herokuapp.com/FindCarPark/parking  
After choosing a parking bay, you've started parking now.  
You can view your parking status by clicking the 'parking' button at the top right corner. You can management your parking status here, there is a button 'end parking and pay' to click below.  
views: views/parking.pug  
routes: routes/findCarPark.js  
controllers: controllers/parkingController.js
models: models/parkingHistory.js  

12. End parking   
End your parking and make a payment by clicking the 'end parking and pay' at the Parking status page.  
routes: routes/findCarPark.js  
controllers: controllers/parkingController.js
models: models/parkingHistory.js  




