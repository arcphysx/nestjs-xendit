import { Injectable, Inject } from '@nestjs/common';
import { XenditConfig } from './enum/xendit-config.enum';
import { Xendit, Refund, Invoice, Payout, PaymentMethod, PaymentRequest, Customer, Transaction, Balance } from 'xendit-node'

@Injectable()
export class XenditService {

    public readonly refund: Refund;
    public readonly invoice: Invoice;
    public readonly payout: Payout;
    public readonly paymentMethod: PaymentMethod;
    public readonly paymentRequest: PaymentRequest;
    public readonly customer: Customer;
    public readonly transaction: Transaction;
    public readonly balance: Balance;

	constructor(
		@Inject(XenditConfig.INSTANCE)
        protected readonly instance: Xendit,
	) 
	{
        this.refund = instance.Refund
        this.invoice = instance.Invoice
        this.payout = instance.Payout
        this.paymentMethod = instance.PaymentMethod
        this.paymentRequest = instance.PaymentRequest
        this.customer = instance.Customer
        this.transaction = instance.Transaction
        this.balance = instance.Balance
    }
}