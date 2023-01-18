package guideman;

import guideman.storage.DaoFactory;
import guideman.storage.Location;
import guideman.storage.LocationDao;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/locations")
@RestController
@CrossOrigin
public class LocationController {
  private LocationDao locationDao = DaoFactory.INSTANCE.getLocationDao();

  @GetMapping
  public List<Location> getAll() {
    return locationDao.getAll();
  }

  @GetMapping("{id}")
  public Location getById(@PathVariable long id) {
    return locationDao.getById(id);
  }

  @PostMapping
  public Location save(@RequestBody Location location) {
    return locationDao.save(location);
  }

  @DeleteMapping("{id}")
  public boolean delete(@PathVariable long id) {
    return locationDao.delete(id);
  }
}
