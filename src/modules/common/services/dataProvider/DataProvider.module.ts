import {NgModule} from '@angular/core';

import {DataProviderService} from './dataProvider.service';
import {DataProviderToken} from './constants';

@NgModule({
  providers: [
    {
      provide: DataProviderToken,
      useClass: DataProviderService
    }
  ]
})
export class DataProviderModule { }
