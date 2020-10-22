import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {

  constructor(public _postsService: PostsService) {}

  onAddPost(form: NgForm) {
   this._postsService.addPost(null, form.value.title, form.value.content);
   form.resetForm();
  }
}
