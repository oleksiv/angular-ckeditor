import {Component, OnInit} from '@angular/core';
import * as CustomEditor from 'ckeditor5-build-classic/build/ckeditor';

@Component({
  selector: 'app-root',
  template: `<ckeditor [editor]="editor" [config]="config"></ckeditor>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public editor;
  public config = {
    fileStackApiKey: 'A78e38y7HQUG5OYrs7rDTz'
  };

  ngOnInit(): void {
    this.editor = CustomEditor;
  }
}
