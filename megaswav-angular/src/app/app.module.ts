import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './apps.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProductsComponent } from './components/products/products.component';
import { CreateDigitalBusinessCardsComponent } from './components/create-digital-business-cards/create-digital-business-cards.component';
import { CreateDigitalCatalogsComponent } from './components/create-digital-catalogs/create-digital-catalogs.component';
import { CreateVideogamesComponent } from './components/create-videogames/create-videogames.component';
import { CreateWebsitesComponent } from './components/create-websites/create-websites.component';
import { CreateAppsComponent } from './components/create-apps/create-apps.component';
import { PortfolioAppsComponent } from './components/portfolio-apps/portfolio-apps.component';
import { PortfolioWebsitesComponent } from './components/portfolio-websites/portfolio-websites.component';
import { PortfolioDigitalBusinessCardsComponent } from './components/portfolio-digital-business-cards/portfolio-digital-business-cards.component';
import { PortfolioDigitalCatalogsComponent } from './components/portfolio-digital-catalogs/portfolio-digital-catalogs.component';
import { PortfolioVideogamesComponent } from './components/portfolio-videogames/portfolio-videogames.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ProjectsComponent,
    ProductsComponent,
    CreateDigitalBusinessCardsComponent,
    CreateDigitalCatalogsComponent,
    CreateVideogamesComponent,
    CreateWebsitesComponent,
    CreateAppsComponent,
    PortfolioAppsComponent,
    PortfolioWebsitesComponent,
    PortfolioDigitalBusinessCardsComponent,
    PortfolioDigitalCatalogsComponent,
    PortfolioVideogamesComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
