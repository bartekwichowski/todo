package com.example.todo.rest;

import com.example.todo.dto.TodoDto;
import com.example.todo.mapper.TodoMapper;
import com.example.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class TodoResource {

    @Autowired
    private TodoService todoService;

    @Autowired
    private TodoMapper todoMapper;

    @GetMapping("/todos")
    public ResponseEntity<List<TodoDto>> getAll() {
        return new ResponseEntity<>(todoService.getAll()
                .stream().map(todoMapper::toDto).collect(Collectors.toList()), HttpStatus.OK);
    }

    @PostMapping("/todo")
    public ResponseEntity<TodoDto> create(@RequestBody TodoDto todoDto) {
        return new ResponseEntity<>(todoMapper.toDto(todoService.create(todoMapper.toEntity(todoDto))), HttpStatus.OK);
    }

    @GetMapping("/todo/{id}")
    public ResponseEntity<TodoDto> get(@PathVariable("id") Long id) {
        return new ResponseEntity<>(todoMapper.toDto(todoService.getOne(id)), HttpStatus.OK);
    }

    @DeleteMapping("/todo/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id) {
        todoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
