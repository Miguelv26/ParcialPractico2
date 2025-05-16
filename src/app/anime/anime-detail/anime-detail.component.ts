import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent {
  @Input() animeDetail!: Anime;
  @Output() back = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onBack() {
    this.back.emit();
  }

}
