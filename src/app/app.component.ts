import {Component, OnInit} from '@angular/core';
import * as CustomEditor from '@akilli/ckeditor5-media/demo/ckeditor';

@Component({
  selector: 'app-root',
  template: `
    <ckeditor [(ngModel)]="data" [editor]="editor" [config]="config" (change)="changes($event)"></ckeditor>
    <h2>Output HTML</h2>
    {{data}}
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public editor;
  public config = {
    fileStackApiKey: 'A18C8tiqiSLajuwagRYqtz',
    uploadPath: '/',
    getPath: (event) => {
      debugger;
      return '/';
    }
  };
  public data = '<h2>The three greatest things you learn from traveling</h2><p>Like all the great things on earth traveling teaches us by example. Here are some of the most precious lessons I’ve learned over the years of traveling.</p><figure class="video right"><video controls="controls" alt="" src="https://cdn.filestackcontent.com/ipAfKGjQceafDZdkjH9q">&nbsp;</video></figure><h3>Appreciation of diversity</h3><p>Getting used to an entirely different culture can be challenging. While it’s also nice to learn about cultures online or from books, nothing comes close to experiencing cultural diversity in person. You learn to appreciate each and every single one of the differences while you become more culturally fluid.</p><blockquote><p>The real voyage of discovery consists not in seeking new landscapes, but having new eyes.</p><p><strong>Marcel Proust</strong></p></blockquote><h3>Improvisation</h3><p>Life doesn\'t allow us to execute every single plan perfectly. This especially seems to be the case when you travel. You plan it down to every minute with a big checklist; but when it comes to executing it, something always comes up and you’re left with your improvising skills. You learn to adapt as you go. Here’s how my travel checklist looks now:</p><ul><li>buy the ticket</li><li>start your adventure</li></ul><h3>Confidence</h3><p>Going to a new place can be quite terrifying. While change and uncertainty makes us scared, traveling teaches us how ridiculous it is to be afraid of something before it happens. The moment you face your fear and see there was nothing to be afraid of, is the moment you discover bliss.</p><h2>Walking the capitals of Europe: Warsaw</h2><p>If you enjoyed my previous articles in which we discussed wandering around <a href="https://en.wikipedia.org/wiki/Copenhagen">Copenhagen</a> and <a href="https://en.wikipedia.org/wiki/Vilnius">Vilnius</a>, you’ll definitely love exploring <a href="https://en.wikipedia.org/wiki/Warsaw">Warsaw</a>.</p><h3>Time to put comfy sandals on!</h3><p>Best time to visit the city is July and August, when it’s cool enough to not break a sweat and hot enough to enjoy summer. The city which has quite a combination of both old and modern textures is located by the river of Vistula.</p><p>The historic <strong>Old Town</strong>, which was reconstructed after the World War II, with its late 18th century characteristics, is a must-see. You can start your walk from the <strong>Nowy Świat Street</strong> which will take you straight to the Old Town.</p><p>Then you can go to the <strong>Powiśle</strong> area and take a walk on the newly renovated promenade on the riverfront. There are also lots of cafes, bars and restaurants where you can shake off the exhaustion of the day. On Sundays, there are many parks where you can enjoy nature or listen to pianists from around the world playing Chopin.</p><p>For museum lovers, you can add these to your list:</p><ul><li><a href="http://www.polin.pl/en">POLIN</a></li><li><a href="http://www.1944.pl/en">Warsaw Uprising Museum</a></li><li><a href="http://chopin.museum/en">Fryderyk Chopin Museum</a></li></ul><h3>Next destination</h3><p>We will go to Berlin and have a night\'s walk in the city that never sleeps! Make sure you subscribe to our newsletter!</p>';

  ngOnInit(): void {
    this.editor = CustomEditor;
  }

  changes(event) {
    console.log(event.editor.getData());
  }
}
