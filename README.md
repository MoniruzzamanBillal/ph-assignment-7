# course roster

---

#### Features of my project -

- I get data from json file , then show them in card dynamically
- I can add items and show them in my project
- I can calculate these based on items I select
  - Total credit hours
  - remaining credit hours
  - Total price of selected items

---

### How i manage states in my project :

1. **Datas State (datas):**
   - Stores data fetched from "blog.json" (courses or items).
   - Initialized as an empty array.
   - Updated using setDatas when data is fetched.
2. **SelectedData State (selectedData):**
   - Keeps track of selected items.
   - Initialized as an empty array.
   - Updated when a user selects an item.
3. **TotalCredit State (totalCredit):**
   - Keeps track of selected items.
   - Initialized as 0.
   - Updated when items are selected or deselected.
4. **RemainingCredit State (remainingCredit):**
   - Represents remaining credit hours available.
   - Initialized as 20.
   - Updated when items are selected, ensuring they don't exceed the limit.
5. **handleClick Function:**
   - Manages state updates when an item is selected.
   - Checks for duplicates, calculates credits, and updates relevant states.
6. **DataCard Component:**
   - Displays remaining credit hours and total price based on state values.
7. **ItemCard Component:**
   - Renders individual item cards.
   - Calls handleClick when the "Select" button is clicked.

---

### live link : https://pr-courseregistration.netlify.app/

---
