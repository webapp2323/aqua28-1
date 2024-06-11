package loginviagoogle.services;

import loginviagoogle.dto.AccountDTO;
import loginviagoogle.dto.TaskDTO;
import loginviagoogle.dto.TaskToNotifyDTO;
import loginviagoogle.model.Account;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;


public interface GeneralService {
    Account getAccountByEmail(String email);
    void addAccount(AccountDTO accountDTO);
    void addAccountWithTasks(AccountDTO accountDTO, List<TaskDTO> tasks);
    void addTask(String email, TaskDTO taskDTO);
    List<TaskDTO> getTasks(String email);
    List<TaskDTO> getTasksByStatus(String email, TaskStatus status, Pageable pageable);
    List<TaskDTO> getAllTasks(Pageable pageable);
    List<TaskToNotifyDTO> getTasksToNotify(Date now);
    Long count(String email);
    Long countAllTasks();
    void delete(List<Long> idList);
}
