import { Component, OnInit } from '@angular/core';
import { KeyProviderService } from '../key-provider.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

table;

  constructor(private service:KeyProviderService) {
    this.service.getNews().subscribe((data)=>{
      console.log(data)
      this.table = data;
    })
  }

  ngOnInit() {
  }

}
