import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgEventsService } from '../ng-events.service';
import { TEvent } from '../type/type_data';


@Component({
  selector: 'app-ng-events',
  templateUrl: './ng-events.component.html',
  styleUrls: ['./ng-events.component.css']
})
export class NgEventsComponent implements OnInit {
  evts : TEvent[]=[];
  constructor(
    private _event:NgEventsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.evts = this._event.event;
  }

}
