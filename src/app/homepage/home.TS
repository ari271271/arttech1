import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Loading } from '../loading/loading';
@Component({
  selector: 'app-homepage',
    imports: [RouterModule,Loading],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Homepage {
  // buraya component kodların gelir
}
