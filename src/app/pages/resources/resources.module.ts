import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourcesPage } from './resources.page';

import { ResourcesPageRoutingModule } from './resources-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResourcesPageRoutingModule
  ],
  declarations: [ResourcesPage]
})
export class ResourcesPageModule {}
