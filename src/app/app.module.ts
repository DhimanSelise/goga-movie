import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { GenresComponent } from './genres/genres.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmbedVideoComponent } from './single-movie/embed-video/embed-video.component';
import {ImageModule} from 'primeng/image';
import {AccordionModule} from 'primeng/accordion';
import { ImageGalaryComponent } from './single-movie/image-galary/image-galary.component';
import { CastsComponent } from './single-movie/casts/casts.component';
import { CrewsComponent } from './single-movie/crews/crews.component';
import {CarouselModule} from 'primeng/carousel';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvShowsComponent,
    GenresComponent,
    SliderComponent,
    ItemsBannerComponent,
    MovieItemComponent,
    SingleMovieComponent,
    CalculatorComponent,
    EmbedVideoComponent,
    ImageGalaryComponent,
    CastsComponent,
    CrewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    ImageModule,
    AccordionModule,
    CarouselModule,
    PaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
