import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'photos', pathMatch: 'full'
    },
    {
        path: 'photos', children: [
            {path: '', loadComponent: () => import('./photos/photos.component').then(m => m.PhotosComponent)},        
            {path: ':id', loadComponent: () => import('./photo-page/photo-page.component').then(m => m.PhotoPageComponent)}
        
        ]
       
    },
    {
        path: 'favourites', loadComponent: () => import('./favourites/favourites.component').then(m => m.FavouritesComponent)
    }
];
