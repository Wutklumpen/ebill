import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { BoardComponent } from "./component/customer/board/board.component";
import { CustomerFormComponent } from "./component/customer/customer-form/customer-form.component";


const routes = [
	{ path: '', redirectTo: '/customer', pathMatch: 'full' },
	{ path: 'board', component: BoardComponent },
	{ path: 'customer', component: CustomerFormComponent },
	{ path: 'customer/:id', component: CustomerFormComponent },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})

export class RoutingModule { }
