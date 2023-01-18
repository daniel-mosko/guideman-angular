package guideman.storage;

import java.util.Objects;

public class Location {

  private Long id;
  private String country;
  private String city;
  private String street;
  private Integer streetNumber;

  public Location() {

  }

  public Location(Long id, String country, String city, String street, Integer streetNumber) {
    this.id = id;
    this.country = country;
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
  }

  public Location(String country, String city, String street, Integer streetNumber) {
    this.country = country;
    this.city = city;
    this.street = street;
    this.streetNumber = streetNumber;
  }

  public Location(Long id, String country, String city, String street) {
    this.id = id;
    this.country = country;
    this.city = city;
    this.street = street;
  }

  public Location(String country, String city, String street) {
    this.country = country;
    this.city = city;
    this.street = street;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public String getStreet() {
    return street;
  }

  public void setStreet(String street) {
    this.street = street;
  }

  public Integer getStreetNumber() {
    return streetNumber;
  }

  public void setStreetNumber(Integer streetNumber) {
    this.streetNumber = streetNumber;
  }

  @Override
  public String toString() {
    return "Location{" +
      "id=" + id +
      ", country='" + country + '\'' +
      ", city='" + city + '\'' +
      ", street='" + street + '\'' +
      ", streetNumber=" + streetNumber +
      '}';
  }

  @Override
  public int hashCode() {
    return Objects.hash(city, country, id, street, streetNumber);
  }

  @Override
  public boolean equals(Object obj) {
    if (this == obj)
      return true;
    if (obj == null)
      return false;
    if (getClass() != obj.getClass())
      return false;
    Location other = (Location) obj;
    return Objects.equals(city, other.city) && Objects.equals(country, other.country)
      && Objects.equals(id, other.id) && Objects.equals(street, other.street)
      && Objects.equals(streetNumber, other.streetNumber);
  }
}
