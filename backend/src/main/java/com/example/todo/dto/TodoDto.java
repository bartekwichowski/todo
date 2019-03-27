package com.example.todo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {

    private Long id;

    private String task;

    private String title;

    private LocalDateTime dateCreated;

    private Boolean isDone;

}
