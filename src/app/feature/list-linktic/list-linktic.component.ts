import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PostService } from '../../shared/services/post.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from '../../shared/interfaces/post.interface';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-linktic',
  standalone: true,
  imports: [MatTableModule, HttpClientModule, MatButtonModule],
  providers: [PostService],
  templateUrl: './list-linktic.component.html',
  styleUrl: './list-linktic.component.scss'
})
export class ListLinkticComponent implements OnInit {

  public posts: Post[] = [];
  public displayedColumns: string[] = ['id', 'userId', 'title', 'body'];

  constructor(private postService: PostService, private router: Router){

  }

  ngOnInit(): void {
    this.getPosts()
  }

  public handleGoToForm(){
    this.router.navigate(['/form'])
  }

  private getPosts(){
    this.postService.getPosts().subscribe({
      next:(response)=>{
          console.log(response);
          this.posts = response;
      }
    })
  }
}
