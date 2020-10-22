import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public _postsService: PostsService ) {}

  ngOnInit() {
    this._postsService.getPosts();
    this.postsSub = this._postsService.getPostsUpdateListener()
                    .subscribe((posts: Post[]) => {
                        this.posts = posts;
                    })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
