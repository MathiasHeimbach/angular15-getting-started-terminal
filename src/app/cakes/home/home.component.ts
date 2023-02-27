import { Component, OnInit } from '@angular/core';
import {
  EntityCollectionService,
  EntityCollectionServiceFactory,
} from '@ngrx/data';
import { Observable } from 'rxjs';
import { Cakes } from '../store/cakes';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(serviceFactory: EntityCollectionServiceFactory) {
    this.cakeService = serviceFactory.create<Cakes>('Cake');
    this.allCakes$ = this.cakeService.entities$;
  }
 
  allCakes$: Observable<Cakes[]>;
  cakeService: EntityCollectionService<Cakes>;
 
  ngOnInit(): void {
    this.cakeService.getAll();
  }
}