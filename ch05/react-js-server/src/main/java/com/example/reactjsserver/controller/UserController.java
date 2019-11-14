package com.example.reactjsserver.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.ArrayList;

@RestController
public class UserController {

	private List<User> users = new ArrayList<>();

	{
		users.add(new User(0, "Ivan"));
		users.add(new User(1, "Masha"));
		users.add(new User(2, "Oleg"));

	}

	@GetMapping("users")
	public List<User> getAllUsers() {
		return users;
	}

}

@Data
@NoArgsConstructor
@AllArgsConstructor
class User {
	private int id;
	private String name;	
}
