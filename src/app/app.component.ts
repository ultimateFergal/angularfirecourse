import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFireCourse';

  constructor(private af: AngularFireModule ) {
    this.af.database.object(`connected`)
      .subscribe(console.log);

  }
}
