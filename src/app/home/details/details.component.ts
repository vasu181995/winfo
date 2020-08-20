import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TodoService } from './../../todo.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
// @Input() passuserdata;
dataFromListing:any;
titleName:any;
message:any;
comments:any;
commentNumber:any;
  constructor(private titleService: Title, private todo:TodoService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Winfo Solutions | Detail');
    
    this.dataFromListing = sessionStorage.getItem('userData');
    let displayData = JSON.parse(this.dataFromListing);
    console.log(displayData);
  this.titleName = displayData[0].title;
  this.message = displayData[0].body;
  let url = displayData[0].comments_url;
  this.todo.getComments(url)
  .subscribe(data => 
    {
      this.comments = data;
      this.commentNumber = this.comments.length;
      console.log(data);
    }
    );
  }
  

}
