import { SearchProvider } from './../../providers/search/search';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsModalPage } from './details-modal';

@NgModule({
  declarations: [
    DetailsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsModalPage),
  ],
  entryComponents: [
    DetailsModalPage
  ],
  providers: [
    SearchProvider
  ]
})
export class DetailsModalPageModule {}
