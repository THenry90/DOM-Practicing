document.getElementById("confirm").addEventListener("click", function() {
    // Capture the date and time when the confirm button is pressed
    const taskInitiation = new Date();

    // Get the user-selected due date and time
    const dueDate = document.getElementById("dueDate").value;
    const dueTime = document.getElementById("dueTime").value;

    // Combine due date and time into a single DateTime object
    const dueDateTimeString = `${dueDate} ${dueTime}`;
    const dueDateTime = new Date(dueDateTimeString);

    // Display the task initiation date and time
    document.getElementById("startDate").textContent = taskInitiation.toLocaleString();

    // Display the selected due date and time
    document.getElementById("selectedDueDate").textContent = dueDateTime.toLocaleString();

    // Calculate the difference between dates in milliseconds
    const timeDifference = dueDateTime - taskInitiation;

    // Calculate days, hours, and minutes
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesDifference = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Determine the task status
    let statusMessage = "";
    if (timeDifference < 0) {
        statusMessage = `The task is ${Math.abs(daysDifference)} days, ${hoursDifference} hrs, and ${minutesDifference} mins overdue.`;
    } else if (timeDifference === 0) {
        statusMessage = "The task is due now.";
    } else {
        statusMessage = `There are ${daysDifference} days, ${hoursDifference} hrs, and ${minutesDifference} min until the due date.`;
    }

    // Display the task status
    document.getElementById("timeDifference").textContent = statusMessage;

    // Show the task information section
    document.getElementById("taskInfo").style.display = "block";
});