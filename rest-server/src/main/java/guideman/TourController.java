package guideman;

import guideman.storage.DaoFactory;
import guideman.storage.Tour;
import guideman.storage.TourDao;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tours")
public class TourController {
  private TourDao tourDao = DaoFactory.INSTANCE.getTourDao();

  @GetMapping
  public List<TourModel> getAll() {
    List<TourModel> tourModels = new ArrayList<>();
    for (Tour tour : tourDao.getAll()) {
      tourModels.add(new TourModel(tour));
    }
    return tourModels;
  }

  @GetMapping("{id}")
  public TourModel getById(@PathVariable long id) {
    return new TourModel(tourDao.getById(id));
  }

  @PostMapping
  public TourModel save(@RequestBody TourModel tourModel) {
    System.out.println(tourModel.toTour());
    return new TourModel(tourDao.save(tourModel.toTour()));

  }

  @DeleteMapping("{id}")
  public boolean delete(@PathVariable long id) {
    return tourDao.delete(id);
  }
}
