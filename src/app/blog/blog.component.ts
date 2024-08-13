import { Component } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

  blogs:Array<any>=[];

  constructor(data: BlogDataService) { 
    // subscribe to the request data from our service
    data.getBlogs().subscribe((blogs:any) => {
      //Map the data to a more useable array
      this.blogs = blogs.items.map((blog:any) => blog.fields)
      console.log(blogs)
    })
  }

  ngOnInit(): void {
  }

}
