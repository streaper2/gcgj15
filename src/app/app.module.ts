import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RepertoirePage } from '../pages/repertoire/repertoire';
import { CapitalizePipe } from '../pipes/capitalize/capitalize';
import { MatiersProvider } from '../providers/matiers/matiers';
import { MatDetailsPage } from '../pages/mat-details/mat-details';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RepertoirePage,
    CapitalizePipe,
    MatDetailsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RepertoirePage,
    MatDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MatiersProvider
  ],
  exports: [CapitalizePipe]
})
export class AppModule {}
