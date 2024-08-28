import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { PostService } from '../../shared/services/post.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form-linktic',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, HttpClientModule, MatButtonModule],
  providers:[PostService],
  templateUrl: './form-linktic.component.html',
  styleUrl: './form-linktic.component.scss'
})
export class FormLinkticComponent implements OnInit {

  public postFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router){

  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  public handleSave(){

    if(!this.postFormGroup.valid){
      return;
    }

    const data = this.postFormGroup.value;
    this.postService.savePosts(data).subscribe({
      next:()=>{
        this.router.navigate(['/list']);
      }
    })
  }

  private createFormGroup() {
    this.postFormGroup = this.fb.group({
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
    })
  }
}
