import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts = async () => {
    await this.http.get<{msg: string, posts: Post[]}>('http://localhost:3000/api/posts')
          .subscribe(postData => {
            this.posts = postData.posts;
            this.postsUpdated.next([...this.posts]);
          });
  }

  getPostsUpdateListener = () => this.postsUpdated.asObservable();

  addPost = (id: null, title: string, content: string) => {
    const post: Post = {
      id: null,
      title: title,
      content: content
    }
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
