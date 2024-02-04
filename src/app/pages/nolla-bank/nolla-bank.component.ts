import { Component } from '@angular/core';
import { UrlsService } from 'src/app/service/urls.service';

@Component({
  selector: 'app-nolla-bank',
  templateUrl: './nolla-bank.component.html',
  styleUrls: ['./nolla-bank.component.scss']
})
export class NollaBankComponent {
  images: any[] = [];

  constructor(private urlService: UrlsService) {}

  ngOnInit() {
    this.fetchImages();
  }

  fetchImages(): void {
    this.urlService.getImages().subscribe((data: any[]) =>{
      this.images = data;
      // console.log("FAQ content here" + this.faqs);
    });
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
