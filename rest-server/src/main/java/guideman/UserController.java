package guideman;

import guideman.storage.DaoFactory;
import guideman.storage.User;
import guideman.storage.UserDao;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
@RestController
@CrossOrigin
public class UserController {
  private UserDao userDao = DaoFactory.INSTANCE.getUserDao();

  @GetMapping
  public List<User> getAll() {
    return userDao.getAll();
  }

  @GetMapping("{id}")
  public User getById(@PathVariable long id) {
    return userDao.getById(id);
  }

  @PostMapping
  public User save(@RequestBody User user) {
    System.out.println(user);
    return userDao.save(user);
  }
  @DeleteMapping("{id}")
  public boolean delete(@PathVariable long id) {
    return userDao.delete(id);
  }
}
