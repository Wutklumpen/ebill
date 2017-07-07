import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RoutingModule } from "./routing.module";
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BoardComponent } from './component/customer/board/board.component';

import { CustomerComponent } from './component/customer/customer.component';
import { CustomerService } from './component/customer/service/customer.service';
import { CustomerFormComponent } from './component/customer/customer-form/customer-form.component';
import { CustomerCardComponent } from './component/customer/customer-card/customer-card.component';

@NgModule({
	declarations: [
		AppComponent,
		CustomerComponent,
		CustomerFormComponent,
		BoardComponent,
		CustomerCardComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RoutingModule
	],
	providers: [
		CustomerService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
