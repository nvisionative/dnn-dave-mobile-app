import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../pages/videos/videos.module').then(m => m.VideosPageModule)
      },
      {
        path: 'videos/:id',
        loadChildren: () => import('../pages/videos/video/video.module').then(m => m.VideoPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../pages/info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/videos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/videos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
