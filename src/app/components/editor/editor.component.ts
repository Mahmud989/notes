import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  htmlContent: any;


  constructor() {
  }

  ngOnInit(): void {
  }

  printData() {
    console.log(this.htmlContent);
  }
}
