// doing dis so that the script does'nt run before the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const tasks = [
        "Water the plants",
        "Read a book",
        "Go for a walk",
        "Clean the house",
        "Cook a meal",
        "Do the laundry",
        "Exercise for 30 minutes",
        "Write in your journal",
        "Coded by Mohit!",
        "Take a nap",
        "Go to the gym",
        "Take a shower",
        "Organize your desk",
        "Call a friend",
        "Meditate for 10 minutes",
        "Plan your day",
        "Listen to a podcast",
        "Watch a documentary",
        "Try a new recipe"
    ];

    const taskElement = document.getElementById('task');
    const button = document.getElementById('generate-task');

    button.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * tasks.length);
        const randomTask = tasks[randomIndex];
        taskElement.textContent = randomTask;
    });
});
