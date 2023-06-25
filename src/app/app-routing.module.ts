import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './content/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
        path: 'characters',
        loadChildren: () =>
            import('./content/characters/characters.module').then(
                (m) => m.CharactersModule
            ),
    }, {
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full'
    }]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
