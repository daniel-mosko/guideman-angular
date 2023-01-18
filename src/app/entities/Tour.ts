import {User} from "./User";
import {Location} from "./Location";

export class Tour {
  constructor(public title: string, public bio: string, public maxSlots: number, public location: Location, public guideMan: User, public id?: number, public image?: Blob) {
  }
}
