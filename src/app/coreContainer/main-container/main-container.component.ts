import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {

  @Input() containerId: string;
  @Input() containerTitle: string;
  @Input() id: string;
  @Input() name: string;
  @Input() className: string = '';
  @Input() controlHeight: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
