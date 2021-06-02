# Focused KanBan

## Project Goals

---

- Fully Functionioning Backend.
  - User Accounts
  - Create/Update/Edit boards
- Cleaner UI - Made more apealing to auctually use. A tool I intend to use myself.
- Incorporate and Mobile tool. Not a slimmed down varient but one to use along side the board itself.



---

### June 1 2021:

- Removed old code, none of it is connected. Sits in a hidden folder for the time being.

- Rebuilt Board Itself.

  - NavBar component was, untethered to the dashboard. Now it is shareable, and both the dashboard and kanboard use it. It will take in components as a props, this allows the actions to be better tailored to each section.

  - KanBan board was built from scratch to incorporate a better look and to utilize redux.

    - New card & column components:

      - Trimmed down aesthetic, leaving for a cleaner and more focused look.
      - Components are connected to redux.
      - Components render based on data provided from the back-end.
      - React-DND is connected, these components move around and drag.
        - They do recognize drops but nothing happens. Currently building out system to track where card/column is dropped. Then after the drop the components needs to update the backend, of its new location and any relative entry changes.

    - Board is connected to redux, at the momment on load it will check to see if there is data to render, if/when there is the board will render column and cards in their correct locations.

    - Board navBar, behaves identically to the one on the dash board. Two buttons, one for settings, and the other one now access a board editing menu. 

      - Currently just contains two forms. One to create a new column, the other to create a new card.
        - New Column: Will append a column directly to the right. Following the last column seen.
        - New Card:
          - Shows a sample card as you create it.
          - The sample card can be dragged.
            - ---- Plans for new card ----
            - If user chooses to they can drag the "sample card" directly to the board, to confirm it.
            - Or, user can hit a submit button which will quickly add the card to the first column on the list.

      

### May 29 2021:

- Began connecting Back-End to the Front-End:
  - Currently Only working on basic post/get requests. All routes and logins a user will need to simply view the current contents. Once these routes/connections are made I plan on moving onto the puts and post.
    - I see a future struggle comming, when I reach the board, I have a custom made hook/state managing the cards and columns. The question I and trying to answer, is how do I intend to make the edits to the board accurently get reflected onto the back end.
      - Post should be simple, as they are created in the management tool, they should be correct for the database.
      - Moving cards/columns: My current running idea: I need to ensure that both the active card/column and the surounding cards/columns are accurately updated. I have a tool that ensures that spliced data has their IDs updated correctly, it checks the id, sees if its position is correct. This should reflect the database, so on the case this tool makes a change, I could have it also update the card on the backend. Question? Do I do a put and just change cards around that way, or do I delete and remake the cards.
  - Connected and have working:
    - The Login pages takes, validates and directs user. Still need input validation but not too crucial, if its wrong then the user simply would not have access, that being said I should atleast create a notification of this event.
    - Dashboard: onload, pull user's current boards and displays them. On clicking on project card, the user is redirected to the board route.
  - What I am actively building:
    - Connecting the board to the database. 
      - Have it load what has been saved to the database.
        1. Load into redux the board state.
        2. Have boardState management reflect the initial load.
      - This was mentioned earlier: Edits and updates.
        1. Insert new cards.
        2. Insert new column.
        3. Rearange cards and update database accordingly.
        4. Rearange column and update database accordingly.
        5. Delete card and udpate accordingly.
        6. Delete column and update accordingly.
      - I may want to create another table to store cards that stores the deleated cards, or I would want there to be an attribute to the existing cards/columns table, that states if trashed or not.
        - I think I would preffer the later. This may be quicker rather than moving contents from one table to another.



### May 27 2021:

- Base Backend has been built:
  - Login and generates a token.
  - Board Database is built.
- Front-End:
  - Seperated Project into two main sections.
  - Board:
    - Carry over from previous projects. 
    - Colors have been changed.
    - Minor tweaks to behavior.
  - Account End:
    - Built new form components.
    - Built card components.
    - Styles and components have been made reusable, and will affect the whole app when tweaked. Allowing for major updates to be made accross the whole app simply.
    - Base Login/Register and Dashboard pages have been made. Now I am connecting the Back-End to the Front-End.

---



# Old Readme: original ReadMe From Trello Clone

> I've returned to this project, I have some Idea to make it a tad more useful and interesting. To build something I potentially might want to use myself.
>
> There are enough changes panned to warrent a new repository. I am working with the original code; but most will be changed eventually. Also I think it would be good to keep the old repository clean just as reference as to what has changed.

# Project Goals:

* Improve personal ability to write react applications.
    * Learn to use and implement drag and drop functionality.
    * To Practice building react app components without styled-components.
    * To improve my documentation of work/code.
    ---
* Create and setup a python flask backend. Will be done in seperate repository.

---

## Jan 14 2021:
### What was done.
* Bug Fix:
  * Yes, id correction was causing the issue with both card and column behavior.
  * Simple syntax error within the new Id assignement.
    * ` arr.id = i ` needed to be ` arr[i].id = i`
* New Bug:
  * ~~When columns created and surpass the view window, the left most column gets clipped, and can eventually be made in-accesible.~~
    * I believe that this is a complete css/styling issue.
    * Possible solution:
      * Introduce padding to the left?
      * I need to make it so that there is a limit on the left where the columns do not get pushed beyond that point.
  * **SOLUTION**: Using display flex to layout to place out the column layout created unwanted behavior. Simply removing it had fixed the issue.
    * It was originally there, simply due to overthinking the layout.
    * WIth it gone, it both works as intended and looks far more like a trello board.
* New Features:
  * Columns and Cards can now be deleated.
    * Cards and Columns can be dragged to the trash bin on the bottom right corner of the view.
    * When the Trash bin is clicked, it displays all of the cards and columns that have been deleted.
      * These are stored in their own state objects nested with in the cardManage hook.
  * **New Hooks:**
    * `[removedCard, setRemovedCards]` and `[removedColumns, setRemovedCards]` are the new state objects. 
    * `binCard()`: Takes two arguments, column_Id and card_id.
      * It will remove the card from the `cardState` object.
      * Calls `idCorrection()` to update the card IDs.
      * Then the `setRemovedCards()`is called to update the `removedCards`state.
    * `binColumn()`: Takes one argument, the column_id.
      * This will remove the column from the `cardState` object.
      * Then will call `setRemoveColumns()`, to add the `removedColumns` state object.
* Went through fixed some of the css stylings and effects.
  * Card Hover Effects.
    * Now scales rather than shift
  * Cleaned input forms.
  * Fixed button content alignment.

---





---



## Jan 13 2021:
### What was done.
* Boke up "Col.jsx" component:
  * "innerCol.jsx": Contains column contents and drag destination for cards.
  * "popUpMenu.jsx": Made popup menu modular, this to clean code and help keep it dry.
* Implemented Column Draggin.
  * "Col.jsx" Acts as both the drag and drop reference for Column dragging.
  *  To the cardManage hook:
    * Added "relocateColumn()," it takes two arguements, "columnId" and "desitnation."
    * It stores the column data in a variable, then splices it out of the arrfay.
    * Then with the splice method, inserts the column in its new location.
    * Calls the idCorrection, to update all of the column ids. **BUG!!**

### BUG FOUND:
* "idCorrection()", is not updating Ids.
  * I believe this is  causing the board to crash when cards are moved too much.
  * Found it when logging column movement, the values did not reflect the new position.
#### Possible Solution:
* I think if rather than setting their id by the lenght of the array, simply assign by getting its index.
  * This won't fix the idCorrection function but will potentially limit how often errors are made, along with maybe simplifying prop handling.


---
## Jan 12 2021:
### What was done.
Created Custome Hook To Manage Card/Column State:
#### cardManage:
* insertNewColomn():
  * Takes an argumen, "column_title."
  * Appends a new colomn object, assigning id, title, and card array
* insertNewCard():
  * Takes two arguments "location" and "contents"
  * Using "location" it will append the new card to the corresponding column.
  * Using "Contents" it will populate card with appropriate data.
    * It will also assign a date of creation and id to the card
* relocateCard():
  * Takes two argument "dragId" and "destination".
  * The "dragId", is an array of ids, ["column_id", "card_id"].
  * Destination is the column_id of the card that we wish to move to.
  * With this, it will:
    1. Check if the destination is in fact different.
    2. Update state by adding card to the its new destination.
    3. Splice the card from its source.
    4. Run idCorrection(), to insure that the source is in order.
* idCorrection():
   * This function is internal to the custom hook.
   * It will loop through a given array, check if the index of the array matches the id. If id does not match, it will then update and correct the Id.
   Replaced old state management with the new custome hooks. Cleaning up the code.
---

---
## Jan 11 2021:
### What was done.
Created Basic Layout Of Trello Clone.
Worked out state logic for cards and columns.
* Created base state object structure.
Implemented Click and drag functionality.
### What is currently being worked on.
Refactor card logic and column logic.
Creating custom hooks to manage board state.
* Make Code more legible.
* Improve overall performance.
* Improve modularity.
* Ensure state consistency.
---

---
## Packages Used:
* React
   * ReactDnD
   * React Hook Form
---
## Color Pallete:
1. Ivory: 
   * #F5F9E9
2. Ebony: 
   * #515751
3. Cadet: 
   * #596869
4. Kombu:
   * #36453B
5. Sage: 
   * #C2C1A5
