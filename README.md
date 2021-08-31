# Employee Management System

A command-line **content management system** application that manages a company's employee database using Node.js, Inquirer, and MySQL.



[TOC]



## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Instructions

Create a database schema containing three tables to organize by employee, department, & role (job title), as pictured.

![12-sql-homework-demo-01](./assets/12-sql-homework-demo-01.png)

## Installation

Enter the terminal and enter **"npm install"** to install all required dependencies needed to execute this application. The following packages must be installed: **Inquirer & MySQL2.** Next, type **"node index.js"** & enter in the terminal to start the app. 

## Project Description & Basic Structure

In this application, the user is able to manipulate data (specifically view, add, update, & remove data) in a SQL database, specifically three databases:

1. Employees - *contains a "title" that is a member of the "roles" database*
2. Roles - *each role is associated with a member of the "departments" database*
3. Departments

The user is first presented with the following options:

<img src="./assets/terminal1.PNG" alt="terminal options" style="zoom:35%;" />

<img src="./assets/terminal2.PNG" alt="terminal options" style="zoom:35%;" />

### View

- The user can select View Employees, Roles, or Departments and a table will be displayed in the terminal displaying detailed user-inputted information from the chosen database, as pictured below:

<img src="./assets/view.PNG" alt="view" style="zoom:25%;" />



- Selecting "Display employees by manager" will prompt you to choose a manager. Then, a list is generated showing all of the employees that report to the selected individual. Below, the CEO Selina Meyer was selected and all of her employees are presented.

<img src="./assets/displaymanager.PNG" alt="display by manager" style="zoom:35%;" />



- By selecting "View utilized budget for a department," the user can select a department and the app will sum up the salaries of all the individuals who work in that department.

<img src="./assets/budget.PNG" alt="budget" style="zoom:40%;" />



### Add

- The user can select to add a new employee, a new department, or a new role. This will prompt the user to fill in details which will then be added to the corresponding database.

<img src="./assets/add.PNG" alt="add" style="zoom:30%;" />

### Update

- By selecting "Update manager," the user can change the manager of an existing employee to another employee in the database.

  <img src="./assets/manager.PNG" alt="update manager" style="zoom:40%;" />

### Remove

- The user can remove an employee from the database by selecting "Delete an employee."

- The user can also remove a role from the "roles" database by selecting "Delete a role". This will cause any employees who had that role to display "null" in role-specific fields the next time "View Employees" is executed.
- Finally, the user can remove a department from the database by selecting "Delete a department."



## Walkthrough Video

See the application in action 

[here]: https://vimeo.com/595110754

