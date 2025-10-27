 Task Manager 

Project Overview:
This is a web-based Task Manager application designed to help users organize and manage their daily tasks easily. The application is built using HTML, CSS, and JavaScript, with data storage handled by the browser’s Local Storage. The interface is user-friendly and visually appealing, with features such as task priority, due dates, dark mode, and search functionality.

Features:
1. Add Task
   - Users can type a task name, select priority (Low, Medium, High), and optionally set a due date.
   - Clicking "Add Task" adds the task to the list.

2. Delete Task
   - Each task has a "Delete" button that allows users to remove it from the list instantly.

3. Mark Completed
   - Clicking on the task text marks it as completed or incomplete, visually shown with a line-through.

4. Edit Task
   - Double-clicking on the task text opens a prompt where users can rename the task.

5. Persistence
   - All tasks, including their completed status, priority, and due date, are saved in the browser’s Local Storage.
   - Tasks remain available after refreshing or closing the browser.

6. Search Tasks
   - A search box filters tasks by name in real time.

7. Dark Mode
   - Users can toggle between light and dark themes for better viewing comfort.

8. Attractive Design
   - The app uses colors to differentiate task priorities.
   - Smooth animations and hover effects make the interface more interactive.

Technologies Used:
- HTML5 for the structure and layout.
- CSS3 for styling, animations, and themes.
- JavaScript (ES6) for functionality and Local Storage management.

How to Use:
1. Open the folder named "task-manager".
2. Open the file "index.html" in a modern web browser (such as Chrome, Firefox, Edge).
3. Enter a task name, select priority and due date, then click "Add Task".
4. Click on a task to mark it completed or incomplete.
5. Double-click on a task to edit its name.
6. Use the search bar to filter tasks by name.
7. Click "Delete" to remove unwanted tasks.
8. Click "Toggle Dark Mode" to switch between light and dark themes.
9. Refresh the page to confirm that tasks are saved automatically.

Testing Scenarios:
- Add tasks with different priorities and due dates.
- Mark tasks completed and refresh to ensure persistence.
- Use the search function to filter tasks.
- Toggle between light and dark modes.
- Delete tasks and confirm they are removed.
- Try adding a task with an empty name to see the alert.

Local Storage:
- All data is stored locally in the browser’s storage area.
- You can inspect this data through browser developer tools under Application → Local Storage.

Folder Structure:
task-manager/
├── index.html    → Main HTML file
├── style.css     → Styling file with themes and animations
└── script.js     → JavaScript functionality and Local Storage management

Future Enhancements (Optional):
- Task sorting by due date or priority.
- Notification reminders.
- User accounts for cloud synchronization.

Author:
Hriday Dewan

Date:
10/27/2025

