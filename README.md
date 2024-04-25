# Inventory-Management-System

## Project Objective:
The objective of this project was to develop an efficient inventory management system capable of handling various types of items. Throughout the development process, emphasis was placed on integrating sound design patterns, adhering to SOLID principles, following clean code practices, and adopting behavioral-driven development methodologies.

### Key Constraints and Requirements:

#### Quality Degradation Rate:
- Once an item's sell date has passed, its quality degrades twice as fast as usual.
  
#### Quality Bounds:
- The quality of an item must never be negative.
- The quality of an item must never exceed 25.

#### Quality Enhancement:
- Certain items, like Cheese, increase in quality as they age.

#### Non-Decreasing Items:
- Some items never have to be sold and their quality does not decrease.
  
#### Organic Item Degradation:
- Organic items degrade in quality twice as fast as normal items.

#### Removal from Inventory:
- Once an item is 5 days past its sell date, it can no longer be sold and should be removed from the inventory.
  
These constraints guided the development process to ensure that the inventory management system effectively handled various scenarios while maintaining the integrity and quality of the items in the inventory.


## Steps to Run Application

Install dependencies: `npm install`

Run app: `npm run start`

Run tests: `npm run test`

Run tests with coverage: `npm run test:coverage`
