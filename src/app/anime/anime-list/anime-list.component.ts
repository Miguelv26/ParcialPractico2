import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  selectedBAnime!: Anime;
  selected = false;
  selectedAnime: Anime | null = null;
  animes: Array<Anime> = [];
  constructor(private animeService: AnimeService) { }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
    });
  }

  getRatingPromedio(): number {
    const total = this.animes.reduce((sum, anime) => sum + Number(anime.Rating), 0);
    return Number((total / this.animes.length).toFixed(2));
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
    this.selectedAnime = anime;
  }

  onBack(): void {
    this.selectedAnime = null;
  }

  ngOnInit() {
    this.getAnimes();
  }

}
