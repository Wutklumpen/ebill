import { Component, OnInit } from '@angular/core';
import { ICustomer } from "../interface/customer.model";
import { CustomerService } from "app/component/customer/service/customer.service";
import { Router } from "@angular/router";


@Component({
	selector: 'customer-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
	customers: ICustomer[];
	selectedCustomer: ICustomer;
	title: "Kunden"

	constructor(
		private customerService: CustomerService,
		private router: Router
	) { }

	ngOnInit() {
		this.initCustomers();
	}

	initCustomers() {
		this.customerService.getCustomers().then(customers => this.customers = customers)
	}

	onEditCustomer(customer: ICustomer) {
		this.router.navigate(['/customer', customer.id])
	}

	onDelete(cust: ICustomer) {
		this.customerService.deleteCustomer(cust.id);
		this.initCustomers();
	}
}
