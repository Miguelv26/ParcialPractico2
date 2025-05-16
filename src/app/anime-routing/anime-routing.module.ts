import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeRoutingComponent } from './anime-routing.component';
import { AnimeListComponent } from '../anime/anime-list/anime-list.component';
import { AnimeDetailComponent } from '../anime/anime-detail/anime-detail.component';

const routes = [
  {
    path: 'list',
    component: AnimeListComponent
  },
  {
    path: 'id',
    component: AnimeDetailComponent
  },
  ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AnimeRoutingModule { }
