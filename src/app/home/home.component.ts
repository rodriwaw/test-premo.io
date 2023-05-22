import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { Navigation, Pagination, SwiperOptions } from 'swiper';
import { MaterialModule } from '../components/material/material.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None,
  standalone:true,
  imports:[
    SwiperDirective,
    MaterialModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
 
})
export class HomeComponent {
  public config: SwiperOptions = {
    modules: [Navigation],
    spaceBetween: 47,
    navigation: {
      nextEl:".swiper-button-next-unique",
      prevEl:".swiper-button-prev-unique"
    },
    slidesPerView: "auto",
    }
  }
