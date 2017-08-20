import { Episode } from '../../interfaces/episode';
import { Show } from '../../interfaces/show';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SearchProvider {

  tvMazeShowURl: string = 'https://api.tvmaze.com/singlesearch/shows';
  tvMazeEpisodesURL: string;
  tvMazeEpisodeDetailsURL: string;

  constructor(public http: Http) {
  }

  search(query: any): Observable<Show> {
    let search: URLSearchParams = new URLSearchParams();
    search.set('q', query);
    return this.http.get(this.tvMazeShowURl, {search}).map((response: Response) => <Show> response.json()).do(data => console.log(data)).catch(this.handleError);
  }

  searchEpisodes(id): Observable<Episode[]>{
    this.tvMazeEpisodesURL = 'https://api.tvmaze.com/shows/' + id + '/episodes';
    return this.http.get(this.tvMazeEpisodesURL).map((response: Response) => <Episode[]> response.json()).do(data => console.log(data)).catch(this.handleError);
  }

  private handleError = (error: Response) => {
    let msg = 'Error status code ' + error.status + ' at ' + error.url;
    return Observable.throw(msg);
  }

}
