# The Procrastinator

## Description

Full stack app allowing users to find and save their favorite images based off of search results

![](/readImg/titlePage.png)

## Functionality

As a User 

- Preform multiple searchs of memes and gits, scrolling through multiple pages of results
-Save your favorite images to your personal library
-Download images from your library by clicking on them
-Remove images from your library
 
As a user 

- Test out the app by preforming one search of gifs and memes
-Limited access to images and personal library

## App Use

Once a user is signed into thier account, the user is brought to their home page with a customized header. A search bar is present in the middle of the screen where the user can search for memes and gifs based on keywords. A toggle function is used to next to the search bar to select how many results render per page. 

After you search, your meme and gif results will display side by side. Click on the save button to put them in your library, click the numbers at the bottom of the page to go to the next page, or type in new search at the top of the page to search by new key words

On the library page users can view their personal favorite images, delete them from their library or click on them to download them to the computer. On this page, as well as all the other pages, there are buttons that link you around the app for the users convenience.

## My Approach With This Project

1. Set up MVC
2. Set up server
3. Set up the routes
4. Link APIs so that infomation can be displayed on page
5. Filter the data
6. Build guest pages
7. Impliment Users
8. Make models
9. Link the middleware
10. Styling

## Wireframe
Main landing page
Also serves as login, sign up, and guest page

![](/readImg/wire1.png)

Home page

![](/readImg/wire2.png)

Search page

![](/readImg/wire3.png)

Library

![](/readImg/wire4.png)

## Technologies Used

- Node
- Express
- Mongo
- Javascript
- Giphy API
- Meme Generator API

## Interesting Code

![](/readImg/snip1.png)

In this piece of code I am displaying how I use the parameters in the query string. Since I am calling 2 API at the exact same time I chose to make variables that I call qs, page and number respectively so that I can change both of those values and have them apply to both API's. Also seen in the code is how I pass the API information as res.meme to the routers, where they will be called later

![](/readImg/snip2.png)

This code displays how my ejs code looks when displaying my favorites on the library page. The first thing I would like to point out is the if function included. For some (unknown) reason, when I saved something to favorites it would recieve my image and an empty object, my solution (along with booby's help) was to create an if function so only objects with an image name would render ro the page. Also seen in this image is that I put both API image results in one div with one delete button. Originally I had the two API rendering in two seperate collums, similar to my search page on actual app, but for stylistic purposes I decided to include them all in one div so that no matter what the user selects as a favorite the page will look equally pleasing.

## Installationo

If viewing this on Heroku, the app should work immediatly, all you need to do is make an account and start using it!

If you are forking it from github, in your terminal window do the command "npm install" to download all the packages needed to get this server to work. Next open up two terminal windows and put command nodemon in one and mongod in the other. Finally type localhost:3000 into the browser and log into your account!

## Sources

In addition to API aslo used these sources in completion of project

1. Trevor, for his hacky way of fixing my site that had no noticable issue
2. http://www.w3schools.com/howto/howto_js_alert.asp 
Used to get get information popups appear on page when clicked
3. MOST IMPORTANT bobby/rafa itune, which I referenced frequently to make sure I was on the right track

## Hurdles

1. Finding an API/ Idea for project I was excited about
2. DOing my first backend oriented project
3. Styling it the way I envisioned it
4. Debugging my own errors as I went as opposed to relying on someone all the time

## Unsolved Problems

In my initial purposal I wanted to be able to write text over my gifs and memes. The problem that I faced with that was that every time the page reloaded the text you had written went away. My solution was to use canvas to append text to the pictures, but when I did that the gifs would freeze, instead of play thier short videos. I ultimatly abandoned this plan and included a download feature so that the images could be saved to your computer with a click.



//code samples and explanations.
