import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';
import { observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit(){
    this._router.navigate(['/home']);
  }

}