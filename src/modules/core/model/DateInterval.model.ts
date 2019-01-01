import * as moment from 'moment';
import {Moment} from 'moment';

export class DateInterval {
  from: Moment;
  to: Moment;

  static twoWeeks() {
    return new DateInterval(moment(), moment().add(14));
  }

  constructor(from: Moment, to: Moment) {
    this.from = from;
    this.to = to;
  }
}
