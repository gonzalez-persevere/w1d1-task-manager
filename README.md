[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16168465&assignment_repo_type=AssignmentRepo)
# W1D4 Assignment: Task Manager

## Assignment Overview

You will create a JavaScript program that simulates a simple task management system. This project will reinforce your understanding of variables, data types, functions, basic DOM manipulation, and unit testing with Jest.

## Objectives

- Implement a task list using JavaScript objects
- Create functions to add, remove, and mark tasks as complete
- Use DOM manipulation to update the task list in the browser
- Apply proper variable scoping and naming conventions
- Implement error handling for user inputs
- Write and run unit tests using Jest

## Understanding GitHub Classroom

Before we begin, let's understand how GitHub Classroom works:

1. Template Repository: Your instructor has created a template repository with the basic structure and files for this assignment.

2. Automatic Forking: When you accept the assignment through the GitHub Classroom link, GitHub automatically creates a personal copy (fork) of the template repository just for you. This fork is private and only accessible to you and your instructors.

3. Your Working Repository: This forked repository is where you'll do your work. It's like having your own personal copy of the assignment that you can modify without affecting anyone else's work.

4. Submission via Commits: Every time you commit and push changes to your repository, your instructors can see these updates. This is how you "submit" your work - by pushing your changes to your GitHub repository.

5. Automated Testing: The repository may be set up with automated tests that run every time you push changes. This is what creates the "green checkmark" or "red X" you might see on GitHub, indicating whether your code passes the tests.

## Accessing the GitHub Classroom Assignment

1. Go to the Canvas page for this assignment.

2. Find the GitHub Classroom assignment link provided in the assignment description.

3. Click on the GitHub Classroom assignment link. This will take you to GitHub.

4. If prompted, authorize GitHub Classroom to access your GitHub account.

5. On the GitHub page, click the "Accept this assignment" button.

6. Wait for GitHub to create your personal copy (fork) of the assignment repository. This may take a few moments.

7. Once your repository is ready, you'll see a success message with a link to your new repository. Click on this link to go to your assignment repository.

## Cloning the Repository

1. On your assignment repository page in GitHub, click the green "Code" button.

2. Copy the URL provided for cloning the repository.

3. Open your terminal or command prompt.

4. Navigate to the directory where you want to store your assignment.

5. Clone the repository using the following command:
   ```
   git clone <repository-url>
   ```
   Replace `<repository-url>` with the URL you copied in step 2.

6. Navigate into the cloned repository:
   ```
   cd <repository-name>
   ```

7. Open the project in your preferred code editor.

## Project Structure

After cloning the repository, you should see the following file structure:

```
task-manager/
├── .gitignore
├── index.html
├── styles.css
├── script.js
└── test-script.js
```

The `.gitignore` file is included to prevent unnecessary files (like `node_modules/`) from being tracked by Git. If you install any additional dependencies or generate any files that shouldn't be in the repository, make sure to add them to `.gitignore`.

## Assignment Instructions

1. Review the provided files:
   - `index.html`: Contains the basic HTML structure for the task manager.
   - `styles.css`: Provides the styling for the task manager interface.
   - `script.js`: This is where you'll implement your JavaScript code.
   - `test-script.js`: Contains the Jest unit tests for your implementation.

2. Implement the task management system in `script.js`. Your implementation should include:
   - An array to store task objects (each object should have `name` and `completed` properties).
   - Functions to add, remove, and toggle the completion status of tasks.
   - DOM manipulation to update the task list in the browser.
   - Error handling for empty inputs and duplicate tasks.

3. Ensure your implementation passes all the test cases in `test-script.js`.

4. Test your implementation manually in the browser to verify its functionality.

## Setting Up and Running Jest Tests

This project uses Jest as the testing framework. To set up and run the unit tests, follow these steps:

1. Make sure you have Node.js installed on your computer.

2. Initialize a new Node.js project (if not already done):
   ```
   npm init -y
   ```

3. Install Jest and Babel (for ES6 support) by running:
   ```
   npm install --save-dev jest babel-jest @babel/core @babel/preset-env
   ```

4. Add the following to your `package.json` file:
   ```json
   {
     "scripts": {
       "test": "jest"
     },
     "jest": {
       "transform": {
         "^.+\\.jsx?$": "babel-jest"
       }
     }
   }
   ```

5. Create a `.babelrc` file in your project root with the following content:
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

6. Ensure your `test-script.js` file is set up correctly for Jest. It should look something like this:

   ```javascript
   import { addTask, removeTask, toggleTaskCompletion, getTasks } from './script.js';

   describe('Task Manager', () => {
     // Your test cases here
   });
   ```

7. Run the tests using:
   ```
   npm test
   ```

8. Jest will run all tests and provide you with a summary of passed and failed tests.

9. Ensure all tests pass before submitting your assignment.

## Test Cases

Your implementation should pass the following Jest test cases:

1. Adding a task
   ```javascript
   test('Adding a task', () => {
     addTask('Buy groceries');
     expect(getTasks()).toEqual([{ name: 'Buy groceries', completed: false }]);
   });
   ```

2. Marking a task as complete
   ```javascript
   test('Marking a task as complete', () => {
     addTask('Buy groceries');
     toggleTaskCompletion(0);
     expect(getTasks()).toEqual([{ name: 'Buy groceries', completed: true }]);
   });
   ```

3. Removing a task
   ```javascript
   test('Removing a task', () => {
     addTask('Buy groceries');
     removeTask(0);
     expect(getTasks()).toEqual([]);
   });
   ```

4. Adding an empty task
   ```javascript
   test('Adding an empty task', () => {
     expect(() => addTask('')).toThrow('Task name cannot be empty');
   });
   ```

5. Adding a duplicate task
   ```javascript
   test('Adding a duplicate task', () => {
     addTask('Buy groceries');
     expect(() => addTask('Buy groceries')).toThrow('Task already exists');
   });
   ```

Make sure your implementation in `script.js` passes all these test cases.

## Submission Instructions

1. Once you're satisfied with your implementation and all tests pass, commit your changes:
   ```
   git add .
   git commit -m "Implement task manager functionality"
   ```

2. Push your changes to GitHub:
   ```
   git push origin main
   ```

3. Go to your GitHub repository page and verify that your changes have been pushed successfully.

4. Look for the green checkmark indicating that your implementation has passed all tests.
   - If you see a red X instead, click on it to view the test results and identify which tests failed.
   - Make necessary corrections and push your changes again.

5. Submit the following in the Canvas assignment:
   - The link to your GitHub repository
   - A screenshot of your terminal showing the passing Jest tests

## Note on AI Usage

The use of AI tools (such as ChatGPT, GitHub Copilot, etc.) is encouraged as a learning aid, but not as a replacement for your own work and understanding. If you use AI in your assignment:

1. You must cite any AI assistance you received. Include a section in your `README.md` file titled "AI Assistance" where you document:
   - The specific AI tool used
   - The prompt(s) you provided to the AI
   - How you used the AI's response in your work

2. Remember that while AI can provide helpful suggestions, it's crucial that you understand every line of code you submit. Be prepared to explain your code in detail if asked.

3. Use AI as a learning tool to help you grasp concepts, debug issues, or get unstuck, rather than to complete the entire assignment for you.

4. Your final submission should reflect your own understanding and ability to implement the task manager functionality.

## Conclusion

This assignment will give you hands-on experience with JavaScript programming, DOM manipulation, and unit testing with Jest. Remember to follow JavaScript best practices, use appropriate variable declarations (const, let), and maintain clean, readable code.

If you have any questions or run into any issues, don't hesitate to ask for help.