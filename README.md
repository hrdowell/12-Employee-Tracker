# Employee Management System

A command-line **content management system** application that manages a company's employee database using Node.js, Inquirer, and MySQL.



[TOC]



## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

#### ********************"Mock Up Video"

## Bonus

Try to add some additional functionality to your application, such as the ability to do the following:

* Update employee managers.

* View employees by manager.

* View employees by department.

* Delete departments, roles, and employees.

* View the total utilized budget of a department&mdash;in other words, the combined salaries of all employees in that department.

### Walkthrough Video: 27%

* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file.
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

## Instructions

Create a database schema containing three tables to organize by employee, department, & role (job title), as pictured.

![12-sql-homework-demo-01](./assets/12-sql-homework-demo-01.png)

## Installation

Enter the terminal and enter **"npm install"** to install all required dependencies needed to execute this application. The following packages must be installed: **Inquirer & MySQL2.** Next, type **"node index.js"** & enter in the terminal to start the app. 

#### Project Description & Basic Structure

In this application, the user is able to manipulate data in a SQL database, specifically three databases:

1. Employees - *contains a "title" that is a member of the "roles" database*
2. Roles - *each role is associated with a member of the "departments" database*
3. Departments

The user is first presented with the following options:

<img src="./assets/terminal1.PNG" alt="12-sql-homework-demo-01" style="zoom:25%;" />

<img src="./assets/terminal1.PNG" alt="12-sql-homework-demo-01" style="zoom:25%;" />

The user can select View Employees, Roles, or Departments and a table will be displayed in the terminal displaying detailed user-inputted information from the chosen database, as pictured below:

<img src="./assets/view.PNG" alt="view" style="zoom:25%;" />



The user can select to a new employee, a new department, or a new role. This will prompt the user to fill in details which will then be added to the corresponding database.

<img src="./assets/add.PNG" alt="add" style="zoom:30%;" />