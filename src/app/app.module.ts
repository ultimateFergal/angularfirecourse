import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

const fireBaseConfig = {
  apiKey: 'AIzaSyBe-g3ooa9vq3_ur3R7v0gtT2cnm74evs4',
  authDomain: 'bulidingappswithangularf-35ef9.firebaseapp.com',
  databaseURL: 'https://bulidingappswithangularf-35ef9.firebaseio.com',
  projectId: 'bulidingappswithangularf-35ef9',
  storageBucket: 'bulidingappswithangularf-35ef9.appspot.com',
  messagingSenderId: '40429766882'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
