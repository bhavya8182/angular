import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { JsonService } from '../jsonData/json.service';

@Component({
  selector: 'newpage',
  styleUrls: ['./newpage.component.css'],
  templateUrl: './newpage.component.html'
})
export class NewComponent implements OnInit{
  public Details:any = [];
  public details_keys:any = [];
  public unique_names:any = [];
  public unique_categories:any = [];
  public names:any = [];
  public amount:any = [];
  public categories:any = [];
  constructor(private route: ActivatedRoute, public json: JsonService) {
  }
   ngOnInit() {
    this.route.params.subscribe(params => {
       this.json.getJson('json')
         .subscribe(({data}) => {
           this.details_keys = Object.keys(data);
           this.Details = data;
           data.forEach((key)=>{ this.names.push(key.name); this.categories.push(key.category);});
            this.getAmount();
         });
     });
   }
   getAmount() {
    this.unique_names = this.names.filter((name,i)=>{return this.names.indexOf(name) == i});
    this.unique_categories = this.categories.filter((catg,i)=>{return this.categories.indexOf(catg) == i});
    let amt = {};
    this.unique_names.filter((name)=>{
        this.Details.filter((detail,i)=>{
          if(name == detail.name){
            if(this.Details[i].category === "C1" || this.Details[i].category === "C2" || this.Details[i].category === "C3"  ) {
              amt = {"index":i, "amount":detail.amount};
            } else{
              amt = {"index":i, "amount":"-"};
            }
            return this.amount.push(amt);
          }
        });
    })
   }
}
