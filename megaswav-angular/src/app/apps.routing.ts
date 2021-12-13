import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
    {path: '', component: AboutusComponent},
    {path: 'sobre-nosotros', component: AboutusComponent},
    {path: 'proyectos', component: ProjectsComponent},
    {path: 'productos', component: ProductsComponent},
    
    {path: 'crear-tarjetas', component: CreateDigitalBusinessCardsComponent},
    {path: 'crear-catalogos', component: CreateDigitalCatalogsComponent},
    {path: 'crear-videojuegos', component: CreateVideogamesComponent},
    {path: 'crear-websites', component: CreateWebsitesComponent},
    {path: 'crear-apps', component: CreateAppsComponent},

    {path: 'portafolio-apps', component: PortfolioAppsComponent},
    {path: 'portafolio-websites', component: PortfolioWebsitesComponent},
    {path: 'portafolio-tarjetas', component: PortfolioDigitalBusinessCardsComponent},
    {path: 'portafolio-catalogos', component: PortfolioDigitalCatalogsComponent},
    {path: 'portafolio-videojuegos', component: PortfolioVideogamesComponent},

    {path: 'contacto', component: ContactComponent},

    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);