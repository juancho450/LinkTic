import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from '../../../environment/environment';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
    return this.httpClient.get<Post[]>(`${environment.API_URL}posts`);
  }

  public savePosts(data: Post){
    return this.httpClient.post<Post[]>(`${environment.API_URL}posts`,data);
  }
}
