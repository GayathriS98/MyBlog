import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  blog = JSON.parse(localStorage.getItem('blog'));
  
  addBlog(title,content){
    if(title=="" || content==""){
      alert("Cannot create blog without any content.")
    }
    else{
      var obj={};
      obj["title"]=title;
      obj["content"]=content;
      this.blog.push(obj)
      localStorage.setItem('blog',JSON.stringify(this.blog))
      $("#myform").trigger('reset');
      this.route.navigate([""])
    }
  }
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('blog')){
      let blog=[];
      localStorage.setItem('blog',JSON.stringify(blog))
    }
  }

}
