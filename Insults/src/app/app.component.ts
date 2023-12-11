import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
import { GetInsultService } from './get-insult.service';
=======
import { InsultGeneratorComponent } from './insult-generator/insult-generator.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InsultGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Insults';
myDrop: any;
}
