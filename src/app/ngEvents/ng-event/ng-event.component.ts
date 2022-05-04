import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgEventsService } from '../ng-events.service';
import { TEvent } from '../type/type_data';

@Component({
  selector: 'app-ng-event',
  templateUrl: './ng-event.component.html',
  styleUrls: ['./ng-event.component.css']
})
export class NgEventComponent implements OnInit {
  @Input('evt') evt:TEvent;
  constructor(
    private activeRoute : ActivatedRoute,
    private _evtSer : NgEventsService
  ) { }

  ngOnInit(): void {
    
  }

}
