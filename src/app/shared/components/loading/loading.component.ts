import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Component({
  selector: 'ap-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  loading$: Observable<string>;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loading$ = this.loadingService.loading
      .pipe(map(value => value.valueOf()));
  }

}
