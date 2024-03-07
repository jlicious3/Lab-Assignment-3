/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Define state variable to store list of tasks
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View>
      {/* Pass tasks array to ToDoList component */}
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </View>
  );
}

export default App;

