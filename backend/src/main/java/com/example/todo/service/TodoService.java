package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public Todo create(Todo todo) {
        return todoRepository.save(todo);
    }
    public List<Todo> getAll() {
        return todoRepository.findAll();
    }

    public Todo getOne(Long id) {
        return todoRepository.getOne(id);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
}
