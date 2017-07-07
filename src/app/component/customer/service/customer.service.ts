import { Injectable, OnInit } from '@angular/core';
import { ICustomer } from "app/component/customer/interface/customer.model";
import { Customer } from "app/component/customer/model/customer";

@Injectable()
export class CustomerService {
	mockCustomers: ICustomer[];
	constructor() { }

	mock(): void {
		this.mockCustomers = [
			{
				id: 1,
				name: "Kunde 1",
				customerId: "1704 83",
				orderId: "7z5893278923"
			}
		];
	}

	getCustomers(): Promise<ICustomer[]> {
		if (!this.mockCustomers) {
			this.mock();
		}

		return new Promise(resolve => {
			setTimeout(() => resolve(this.mockCustomers), 200);
		});
	}

	getCustomer(id: number): Promise<ICustomer> {
		return this.getCustomers().then(customers => customers.find((customer => customer.id == id)));
	}

	saveCustomer(customer: ICustomer) {

		if (customer.id) {
			this.getCustomers().then(customers => {
				customer = customers.find((customer => customer.id == customer.id))
				if (customer) {
					this.deleteCustomer(customer.id);
				}
			});
		}
		this.mockCustomers.push(customer);
	}

	deleteCustomer(id: number) {
		//remove existing entries
		this.mockCustomers = this.mockCustomers.filter((item) => item.id != id);
	}
}
