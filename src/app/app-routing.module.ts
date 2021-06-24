import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeThreeComponent } from './components/home-three/home-three.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
    {path: '', component: HomeThreeComponent},
   
    {path: 'home-three', component: HomeThreeComponent},
    
    {path: 'blog-details', component: BlogDetailsComponent},
    // Here add new pages component

    {path: '**', component: HomeThreeComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }