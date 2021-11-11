package com.example.petresempire.dao;

import com.example.petresempire.guests.Guest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200/")
public interface GuestsRepository extends JpaRepository<Guest, Integer> {
}
