import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ViewBooksComponent } from './components/view-books/view-books.component';

export const routes: Routes = [
    {
        path: "add-book",
        component: FormComponent
    },
    {
        path: "view-all-books",
        component: ViewBooksComponent
    }
];
