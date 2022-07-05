import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "/newReleases", pathMatch: "full" },
  { path: "newReleases", component: NewReleasesComponent },
  { path: "album", component: AlbumComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
