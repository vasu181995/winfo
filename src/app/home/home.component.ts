import { Component, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
import { User } from './../todo.module';
import { Title } from '@angular/platform-browser';
import { DetailsComponent } from './details/details.component';
import {Router} from'@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
issues: any;
repo: any;
comments:any;
repoName: any;
repoLenghth:any;
UserData:any=[];
  constructor(private router: Router,private todo:TodoService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Winfo Solutions');
  }
  getIDofIssues(value) {
    let userData = [];
    userData = this.issues.filter((x)=> x.id == value);
    console.log(userData);
    let setData = JSON.stringify(userData)
    sessionStorage.setItem('userData',setData);
    this.router.navigate(['/details'])
  }

  keyup(event) {
    console.log(event);
    this.todo.getUser(event)
    .subscribe(data => 
      {
        this.issues = data;
        this.repoLenghth = this.issues.length;
        console.log(data);
      }
      );
      this.todo.getRepo(event)
    .subscribe(data => 
      {
        this.repo = data;
        this.repoName = this.repo.name;
        console.log(data);
      }
      );
}
}
