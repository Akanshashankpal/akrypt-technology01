# WEB - akrypt Library Management App

## Submission Instructions [Please note]

## Maximum Marks - 10

```
 ✅ Able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit is Working Fine - 1 mark.
 ✅ Check the Data after multiple forms submit - 1 mark.
 ✅ Check the Dashboard page's Table - 1 mark.
 ✅ Check the total Table size - 1 mark.
 ✅ Check Filtering is Done - 0.5 mark.
 ✅ Check sort is Done - 0.5 mark.
 ✅ Add To My Books and Check the Deleting- 1 mark.
 ✅ Add To Bookmark and Check the Deleting- 1 mark.
 ✅ Visit My Books Page and Check Table and sort by name- 1 mark.
 ✅ Check The Bookmark Page and total price- 1 mark. 

```
## Folder structure

- Evaluation-01
- index.html
- dashboard.html
- buy.html
- bookmark.html

## Description

#### Use the template provided below to write your code (Mandatory)
## Problem Statement:-

- Before writing any code please read the problem statement very carefully.
- Here you have to build a Library Management System.
- Your application had a Navbar that contains 4 tabs (this is already in the template no need to build).
- Home
- Dashboard
- My Books
- Bookmark
#### Home Page:-
- This page contains a form with 5 input boxes and one select tag having the following fields (this is already in the template no need to build).
- Book Name
- Author Name
- Book Description
- Added Date
- Book Category(Select)
- On clicking on form submit (form submit event) you should store students' data in your local storage with the key "book-list"
- Hint : localStorage.setItem("book-list",JSON.stringify)

#### Dashboard Page:-
- On this page, all the data from the book list will be shown in a table format.
- The table will have the following columns:-
- Name
- Author
- Description
- Added Date
- Category
- Price
- Buy
- Bookmark
- Here the values will come from the LacalStorage Except for the last 2 columns.
- In the Buy column for each row you should put the value Buy.
- In the Bookmark column for each row you should put the value Add.
- These texts Add and Buy are case-sensitive so please make sure there is no spelling mistake.
- When you click on the Buy button that particular row should be deleted and should be added in a new localStorage with the key buy-list
- Hint : localStorage.setItem("buy-list",JSON.stringify)
- Similarly when you click on the Add button that particular row should be deleted and should be added in a new localStorage with the key bookmark-list
- On this page, we will also have a part that counts the no of current books added. It should be updated along with adding new books or deleting books.
- We will have a select tag. Using this we can filter books by category.
- We will also have a select tag. Using this we can sort books by price.

#### My Books Page:-
- On this page, all the data from the buy list will be shown in a table format.
#### The table will have the following columns:-
- Name
- Author
- Description
- Added Date
- Category
- Price
- Here the values will come from the Local storage.
- We will also have a select tag. Using this we can sort books by name.

#### Bookmark Page:-
- On this page, all the data from the bookmark list will be shown in a table format.
- The table columns are same as the My Books Page.
- We will also have a h2 tag. Using this we can find total price of books.
