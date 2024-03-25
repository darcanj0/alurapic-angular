import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../service/photo.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/notification.service';
import { Notification } from 'src/app/shared/components/notification/notification';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'ap-photo-form',
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
      () => {
        this.router.navigate(['/user', this.authService.getUsername()]);
        this.notificationService.notify(Notification.success('Uploaded successfully'));
      }
    );
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly photoService: PhotoService,
    private router: Router,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService,
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
    console.log('criou');
  }

}
