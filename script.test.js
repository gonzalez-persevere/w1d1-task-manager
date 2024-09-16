// Import the functions to be tested
import { addTask, removeTask, toggleTaskCompletion, getTasks } from './script.js';

describe('Task Manager', () => {
  beforeEach(() => {
    // Clear the task list before each test
    while (getTasks().length > 0) {
      removeTask(0);
    }
  });

  test('Adding a task', () => {
    addTask('Buy groceries');
    expect(getTasks()).toEqual([{ name: 'Buy groceries', completed: false }]);
  });

  test('Marking a task as complete', () => {
    addTask('Buy groceries');
    toggleTaskCompletion(0);
    expect(getTasks()).toEqual([{ name: 'Buy groceries', completed: true }]);
  });

  test('Removing a task', () => {
    addTask('Buy groceries');
    removeTask(0);
    expect(getTasks()).toEqual([]);
  });

  test('Adding an empty task', () => {
    expect(() => addTask('')).toThrow('Task name cannot be empty');
  });

  test('Adding a duplicate task', () => {
    addTask('Buy groceries');
    expect(() => addTask('Buy groceries')).toThrow('Task already exists');
  });
});