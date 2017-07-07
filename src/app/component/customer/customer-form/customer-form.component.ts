import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";
import { FormGroup, FormArray, FormControl } from "@angular/forms";
import 'rxjs/add/operator/switchMap';

import { CustomerService } from "../service/customer.service";
import { ICustomer } from "../interface/customer.model";

@Component({
	selector: 'customer-form',
	templateUrl: './customer-form.component.html',
	styleUrls: ['./customer-form.component.css']
})

export class CustomerFormComponent implements OnInit {
	customer: ICustomer;
	title: "Kunden anlegen";

	@Output('saved') saved: EventEmitter<any>;
	constructor(
		// private router: Router,
		private customerService: CustomerService,
		private route: ActivatedRoute
		// private location: Location 
	) {
		this.saved = new EventEmitter;
	}

	saveCustomer(value: ICustomer) {
		this.customerService.saveCustomer(value);
		this.customer = value;
		this.saved.emit();
	}

	ngOnInit() {
		this.route.params.switchMap((params: Params) => this.customerService.getCustomer(+params['id'])).subscribe(customer => {
			this.customer = customer;
			if (!this.customer) {
				this.customer = {};
			}
		});
	}
}
