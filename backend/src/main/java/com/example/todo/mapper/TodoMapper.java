package com.example.todo.mapper;

import com.example.todo.dto.TodoDto;
import com.example.todo.model.Todo;
import org.springframework.stereotype.Component;

@Component
public class TodoMapper {

    public TodoDto toDto(Todo entity) {
        TodoDto dto = new TodoDto();
        dto.setId(entity.getId());
        dto.setTask(entity.getTask());
        dto.setDateCreated(entity.getDateCreated());
        return dto;
    }

    public Todo toEntity(TodoDto dto) {
        Todo entity = new Todo();
        entity.setId(dto.getId());
        entity.setTask(dto.getTask());
        entity.setDateCreated(dto.getDateCreated());
        return entity;
    }

}
