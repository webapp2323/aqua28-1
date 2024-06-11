package loginviagoogle.repos;


import loginviagoogle.dto.TaskStatus;
import loginviagoogle.dto.TaskToNotifyDTO;
import loginviagoogle.model.Task;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findByAccountEmail(String email);

    List<Task> findByAccountEmailAndStatus(String email, TaskStatus status, Pageable pageable);

    List<Task> findAll();
    Long countByAccountEmail(String email);
    @Query("SELECT count(*) from Task t")
    Long countAllTasks();

    @Query("SELECT NEW ua.kiev.prog.oauth2.loginviagoogle.dto.TaskToNotifyDTO(a.email, t.date, t.address)" +
            "FROM Account a, Task t WHERE t.date >= :from AND t.date < :to")
    List<TaskToNotifyDTO> findTasksToNotify(@Param("from") Date from,
                                            @Param("to") Date to);
}
