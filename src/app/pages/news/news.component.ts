import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private id:string | null = '0';
  newsPhotoUrl:string = '';
  newsCreditsUrl:string = '';
  newsTitle:string = '';
  newsShortContent = '';
  newsText:string = '';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => 
      this.id = value.get("id"))
      
    this.fetchFakeData(this.id);
  }

  fetchFakeData(id:string | null) {
    const result = fakeData.filter(article => article.id == id)[0]

    if(result) {
      this.newsPhotoUrl = result.photoUrl;
      this.newsCreditsUrl = result.creditsUrl;
      this.newsTitle = result.title;
      this.newsShortContent = result.shortContent;
      this.newsText = result.textContent;
    }
  }

}
