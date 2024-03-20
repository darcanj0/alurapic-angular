import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
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
