import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Box,
  Chip,
  Stack
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ExampleComponent: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Learn TypeScript', completed: false },
    { id: 3, text: 'Learn Material-UI', completed: false }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false
      }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Todo List Example
        </Typography>
        
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            label="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            size="small"
          />
        </Box>

        <Stack spacing={1}>
          {todos.map((todo) => (
            <Box key={todo.id} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Chip
                label={todo.text}
                color={todo.completed ? 'success' : 'default'}
                onClick={() => toggleTodo(todo.id)}
                sx={{ flexGrow: 1 }}
              />
              <Button
                size="small"
                color="error"
                onClick={() => deleteTodo(todo.id)}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            </Box>
          ))}
        </Stack>
      </CardContent>
      
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={addTodo}
          startIcon={<AddIcon />}
          disabled={!newTodo.trim()}
        >
          Add Todo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ExampleComponent; 