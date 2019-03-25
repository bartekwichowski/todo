package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public Todo create(Todo todo) {

        log.info("{}", todo);

        if (todo.getId() == null) {
            return  todoRepository.save(todo);
        }

        Todo existing = todoRepository.getOne(todo.getId());
        existing.setTask(todo.getTask());
        return todoRepository.save(existing);

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
