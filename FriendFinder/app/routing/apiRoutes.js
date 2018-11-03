// * A GET route with the url `/api/friends`. 
//This will be used to display a JSON of all possible friends.

// * A POST routes `/api/friends`. 
//This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic. 

retrieve form data from survey.html with ajax get command and apply the following conditions

for loop changes the user-selected answers & friend.js answers values
 from an array of string values to numbers.

 add all the answer values (of each individual user profile) together and compare, using for loop, user answers to database answers
 with the understanding that a perfect match is 50 (or zero) and least compatible is 10 (or 40)
 continue to loop to end even if perfect match is found in the instance that more than one user could be a "perfect match" 

 Take the database friends profile(s) that match and push back into modal on survey.html page
