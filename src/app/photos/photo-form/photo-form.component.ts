import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../service/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

  photoForm: FormGroup;
  file: File;
  preview: string;

  upload() {
    const metadata = this.photoForm.getRawValue();
    this.photoService.upload(
      metadata.description,
      metadata.allowComments,
      this.file
    ).subscribe(
      () => this.router.navigate([''])
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly photoService: PhotoService,
    private router: Router,
  ) {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['',
        [Validators.minLength(3),
        Validators.maxLength(300),
        Validators.required]
      ],
      allowComments: [true]
    });
  }

  ngOnInit() {
  }

}
