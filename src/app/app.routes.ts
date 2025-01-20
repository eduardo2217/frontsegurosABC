import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceUsersComponent } from './indice-users/indice-users.component';
import { MenuComponent } from './menu/menu.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

export const routes: Routes = [

    {path: '', component: LandingComponent},
    {path: 'users', component: IndiceUsersComponent},
    {path: 'users/create', component: CreateUserComponent},
    {path: 'users/edit/:id', component: EditUserComponent},
    
];
