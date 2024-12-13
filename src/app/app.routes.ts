import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'photos', pathMatch: 'full'
    },
    {
        path: 'photos', loadComponent: () => import('./photos/photos.component').then(m => m.PhotosComponent)
    },
    {
        path: 'favourites', loadComponent: () => import('./favourites/favourites.component').then(m => m.FavouritesComponent)
    }
];
