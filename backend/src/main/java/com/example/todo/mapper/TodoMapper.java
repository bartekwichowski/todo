package com.example.todo.mapper;

import com.example.todo.dto.TodoDto;
import com.example.todo.model.Todo;
import org.springframework.stereotype.Component;

@Component
public class TodoMapper {

    public TodoDto toDto(Todo entity) {
        TodoDto dto = new TodoDto();
        dto.setId(entity.getId());
        dto.setTitle(entity.getTitle());
        dto.setTask(entity.getTask());
        dto.setDateCreated(entity.getDateCreated());
        dto.setIsDone(entity.getIsDone());
        return dto;
    }

    public Todo toEntity(TodoDto dto) {
        Todo entity = new Todo();
        entity.setId(dto.getId());
        entity.setTitle(dto.getTitle());
        entity.setTask(dto.getTask());
        entity.setDateCreated(dto.getDateCreated());
        entity.setIsDone(dto.getIsDone());
        return entity;
    }

}
