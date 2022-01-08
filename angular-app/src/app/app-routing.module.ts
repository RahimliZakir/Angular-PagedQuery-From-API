import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsPagedComponent } from './components/brands-paged/brands-paged.component';

const routes: Routes = [
  {
    path: 'brands-paged',
    component: BrandsPagedComponent,
  },
  {
    path: '',
    redirectTo: 'brands-paged',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
