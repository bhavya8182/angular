import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { JsonService } from './json.service';

@Component({
  selector: 'jsonData',
  styleUrls: ['./jsonData.component.css'],
  templateUrl: './jsonData.component.html'
})
export class JsonComponent implements OnInit{
  public Details:any = [];
  public details_keys:any = [];
  constructor(private route: ActivatedRoute, public json: JsonService) {
  }
   ngOnInit() {
    this.route.params.subscribe(params => {
       this.json.getJson('json')
         .subscribe(({data}) => {
           this.details_keys = Object.keys(data);
           this.Details = data;
         });
     });
   }
   sort(){
       this.Details.reverse();
     }
}
