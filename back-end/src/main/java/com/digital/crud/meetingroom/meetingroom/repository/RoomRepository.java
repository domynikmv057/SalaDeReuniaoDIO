package com.digital.crud.meetingroom.meetingroom.repository;

import com.digital.crud.meetingroom.meetingroom.model.Room;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface RoomRepository extends JpaRepository<Room, Long>{
}
