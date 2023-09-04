//Script that tells you whether a task is due overdue, due today, due tomorrow,


// Sample task object with 'dateAdded' and 'dueDate' properties
const task = {
    dateAdded: new Date('2023-09-03T10:00:00'), // Replace with your actual date
    dueDate: new Date('2023-09-05T14:00:00'),   // Replace with your actual date
  };
  
  // Get the current date and time
  const currentDate = new Date();
  
  // Calculate the time difference in milliseconds between the due date and the current date
  const timeDifference = task.dueDate - currentDate;
  
  // Define time intervals in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  const oneMonth = 30 * oneDay;
  
  // Determine the due date category
  let dueDateCategory;
  
  if (timeDifference <= 0) {
    dueDateCategory = 'Overdue';
  } else if (timeDifference <= oneDay) {
    dueDateCategory = 'Today';
  } else if (timeDifference <= oneDay * 2) {
    dueDateCategory = 'Tomorrow';
  } else if (timeDifference <= oneWeek) {
    dueDateCategory = 'This Week';
  } else if (timeDifference <= oneMonth) {
    dueDateCategory = 'This Month';
  } else {
    dueDateCategory = 'Later';
  }
  
  console.log(`Due date category: ${dueDateCategory}`);


  
  /*
  // Modified script that takes into account whether a task within 24 hours and today

  // Sample task object with 'dateAdded' and 'dueDate' properties
const task = {
    dateAdded: new Date('2023-09-03T10:00:00'), // Replace with your actual date
    dueDate: new Date('2023-09-04T15:00:00'),   // Replace with your actual date
  };
  


  // Get the current date and time
  const currentDate = new Date();
  
  // Calculate the time difference in milliseconds between the due date and the current date
  const timeDifference = task.dueDate - currentDate;
  
  // Define time intervals in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  
  // Get the due date without the time component
  const dueDateWithoutTime = new Date(task.dueDate);
  dueDateWithoutTime.setHours(0, 0, 0, 0);
  
  // Get the current date without the time component
  const currentDateWithoutTime = new Date(currentDate);
  currentDateWithoutTime.setHours(0, 0, 0, 0);
  
  // Determine the due date category
  let dueDateCategory;
  
  if (timeDifference <= 0) {
    dueDateCategory = 'Overdue';
  } else if (dueDateWithoutTime.getTime() === currentDateWithoutTime.getTime()) {
    dueDateCategory = 'Today';
  } else if (
    dueDateWithoutTime.getTime() ===
    currentDateWithoutTime.getTime() + oneDay
  ) {
    dueDateCategory = 'Tomorrow';
  } else if (timeDifference <= oneDay) {
    dueDateCategory = 'Within 24 Hours';
  } else if (timeDifference <= oneDay * 7) {
    dueDateCategory = 'This Week';
  } else if (timeDifference <= oneDay * 30) {
    dueDateCategory = 'This Month';
  } else {
    dueDateCategory = 'Later';
  }
  
  console.log(`Due date category: ${dueDateCategory}`);

  */