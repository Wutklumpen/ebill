import { ICustomer } from "app/component/customer/interface/customer.model";

export interface IDocument {
	name?: string;
	customer?: ICustomer;
}

