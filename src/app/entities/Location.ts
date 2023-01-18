export class Location {
  constructor(
    public country: string,
    public city: string,
    public street: string,
    public streetNumber: number,
    public id?: number
  ) {
  }
}
