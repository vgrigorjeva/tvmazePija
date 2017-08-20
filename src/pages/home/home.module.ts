import { SearchProvider } from './../../providers/search/search';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    HomePage
  ],
  providers: [
    SearchProvider
  ]
})
export class HomePageModule {}
