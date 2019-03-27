package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
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
        modifyTitle(todo);

        if (todo.getId() == null) {
            return  todoRepository.save(todo);
        }

        Todo existing = todoRepository.getOne(todo.getId());
       existing.setTitle(todo.getTitle());
        existing.setTask(todo.getTask());
        existing.setDateCreated(todo.getDateCreated());
        existing.setIsDone(todo.getIsDone());
        return todoRepository.save(existing);

    }

    private void modifyTitle(Todo todo) {
        if (StringUtils.isEmpty(todo.getTitle())) {
            String tmp = todo.getTask().length() > 6 ? todo.getTask().substring(0, 6) + "..." : todo.getTask();
            todo.setTitle(tmp);
        } else {
            todo.setTitle(todo.getTitle());
        }
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
