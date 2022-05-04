import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgEventComponent } from '../ng-event/ng-event.component';
import { NgEventsService } from '../ng-events.service';
import { TEvent } from '../type/type_data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item : TEvent;
  constructor(
    private route : ActivatedRoute,
    private _eventSer : NgEventsService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param=> {
      this.item = this._eventSer.fetchAnEvent(+param.get('id')-1);
    })
  }

}
