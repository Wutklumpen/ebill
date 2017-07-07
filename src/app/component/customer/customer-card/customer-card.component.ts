import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ICustomer } from "app/component/customer/interface/customer.model";

@Component({
	selector: 'app-customer-card',
	templateUrl: './customer-card.component.html',
	styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
	@Input() customer: ICustomer;

	@Output('editCustomer') editEvent: EventEmitter<ICustomer>;

	constructor() {
		this.editEvent = new EventEmitter;
	}

	ngOnInit() {
	}

	onEdit(customer: ICustomer) {
		console.log("edit customer " + customer.name);
		this.editEvent.emit(this.customer);
	}
}
