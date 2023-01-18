package guideman;

import guideman.storage.DaoFactory;
import guideman.storage.Location;
import guideman.storage.Tour;
import guideman.storage.User;

import java.sql.Blob;

public class TourModel {
  private Long id;
  private String title;
  private String bio;
  private Long maxSlots;
  private Location location;
  private User guideMan;
  private Blob image;

  public TourModel() {
  }

  public TourModel(Tour tour) {
    this.id = tour.getId();
    this.title = tour.getTitle();
    this.bio = tour.getBio();
    this.maxSlots = tour.getMaxSlots();
    this.location = DaoFactory.INSTANCE.getLocationDao().getById(tour.getLocationId());
    this.guideMan = DaoFactory.INSTANCE.getUserDao().getById(tour.getGuideManId());
    this.image = tour.getImage();
  }

  public TourModel(Long id, String title, String bio, Long maxSlots, long locationId, long guideManId, Blob image) {
    this.id = id;
    this.title = title;
    this.bio = bio;
    this.maxSlots = maxSlots;
    this.location = DaoFactory.INSTANCE.getLocationDao().getById(locationId);
    this.guideMan = DaoFactory.INSTANCE.getUserDao().getById(guideManId);
    this.image = image;
  }

  @Override
  public String toString() {
    return "TourModel{" +
      "id=" + id +
      ", title='" + title + '\'' +
      ", bio='" + bio + '\'' +
      ", maxSlots=" + maxSlots +
      ", location=" + location +
      ", guideMan=" + guideMan +
      ", image=" + image +
      '}';
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getBio() {
    return bio;
  }

  public void setBio(String bio) {
    this.bio = bio;
  }

  public Long getMaxSlots() {
    return maxSlots;
  }

  public void setMaxSlots(Long maxSlots) {
    this.maxSlots = maxSlots;
  }

  public Location getLocation() {
    return location;
  }

  public void setLocation(Location location) {
    this.location = location;
  }

  public User getGuideMan() {
    return guideMan;
  }

  public void setGuideMan(User guideMan) {
    this.guideMan = guideMan;
  }

  public Blob getImage() {
    return image;
  }

  public void setImage(Blob image) {
    this.image = image;
  }

  public Tour toTour() {
    if (this.location == null) {
      this.location = new Location();
    }
    if (this.guideMan == null) {
      this.guideMan = new User();
    }
    return new Tour(this.id, this.title, this.bio, this.maxSlots, this.location.getId(), this.guideMan.getId(), this.image);
  }
}
