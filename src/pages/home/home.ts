import { Episode } from '../../interfaces/episode';
import { SearchProvider } from './../../providers/search/search';
import { Show } from '../../interfaces/show';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@IonicPage()
@Component({
  templateUrl: 'home.html',
})

export class HomePage {

  searchForm: FormGroup;
  show: Show;
  errorMessage: string;
  episodes: Episode[];
  foundInSummary: any = [];

  constructor(public fb: FormBuilder, public navParams: NavParams, public searchProvider: SearchProvider, public modalCtrl: ModalController) {
    this.searchForm = this.fb.group({
      query: ['', [Validators.required]]
    });
  }

  findText(searchText) {
    let searchString = searchText.toLowerCase();
    let stringArray = searchString.split(" ");
    this.foundInSummary = [];
    for (let epis in this.episodes) {
      let episode = this.episodes[epis];
      // console.log(this.episodes[epis].summary);
      if (episode.summary !== null) {
        let containsAllWords = true;
        let toLowerCase = episode.summary.toLowerCase();
        for (let i = 0; i < stringArray.length; i++) {
          if (!toLowerCase.includes(stringArray[i])) {
            containsAllWords = false;
          }
        }
        if (containsAllWords) {
          this.foundInSummary.push(episode);
        }
      }
    }
  }

  searchShows({ value }: { value: any }) {
    this.resetSearch();
    this.searchProvider.search(value.query).subscribe(show => {
      this.show = show;
      this.searchProvider.searchEpisodes(this.show.id).subscribe(episodes => {
        this.episodes = episodes;
        this.foundInSummary = episodes;
      },
        error => this.errorMessage = <any>error
      )
    },
      error => this.errorMessage = <any>error
    );
  }

  showEpisodeDetails(showId, episode) {
    let detailsModal = this.modalCtrl.create('DetailsModalPage', { showId: showId, episode: episode });
    detailsModal.present();
  }

  resetSearch() {
    this.errorMessage = null;
    this.show = null;
    this.searchForm.reset();
  }
}
