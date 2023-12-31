import { Route, Routes } from '@angular/router';
import { AuthlayoutComponent } from './modules/layouts/authlayout/authlayout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import("./modules/layouts/authlayout/auth.routes").then(m => m.AuthRoutes),
        
    },
    {
        path:'app',
        loadChildren: () => import("./modules/layouts/applayout/applayout.routes").then(m => m.AppRoutes),
        canActivate: [AuthGuard]
    }
];


