export class User {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public telNumber: string,
    public birthdate: string,
    public login: string,
    public password: string,
    public id?: number,
    public image?: Blob
  ) {
  }

}
