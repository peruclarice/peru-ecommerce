import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.scss']
})
export class TestimonialSliderComponent implements OnInit {
  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.sliderWrapper.nativeElement.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      this.sliderWrapper.nativeElement.appendChild(this.sliderWrapper.nativeElement.firstElementChild);
      this.sliderWrapper.nativeElement.style.transform = 'translateX(0)';
    }, 5000);
  }

  prevSlide() {
    this.sliderWrapper.nativeElement.style.transition = 'none';
    this.sliderWrapper.nativeElement.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      this.sliderWrapper.nativeElement.style.transition = 'transform 0.5s ease-in-out';
      this.sliderWrapper.nativeElement.insertBefore(this.sliderWrapper.nativeElement.lastElementChild, this.sliderWrapper.nativeElement.firstElementChild);
      this.sliderWrapper.nativeElement.style.transform = 'translateX(0)';
    }, 50);
  }

}
