import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs=[];
  constructor() { 
    this.blogs=JSON.parse(localStorage.getItem('blog'));
    console.log(this.blogs)
  }
  deleteBlog(index:number){
    console.log(this.blogs)
    this.blogs.splice(index,1)
    console.log(this.blogs)
    localStorage.setItem('blog',JSON.stringify(this.blogs))
  }
  ngOnInit(): void {
    if(!localStorage.getItem('blog')){
      let blog=[];
      localStorage.setItem('blog',JSON.stringify(blog))
    }
  }

}