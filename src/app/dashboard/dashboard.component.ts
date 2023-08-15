import { Component } from '@angular/core';

export interface ITransaction {
  id: number;
  name: string;
  phoneNumber: number;
  transactionCategory: string;
  transactionSource: string;
  transactionAmount: number;
  accountType: string;
  balanceAmount: string;
}
export interface ISummery {
  title: string
  transaction: number
  growth: number
  bgColor: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  /**Transaction Details */
  tabledetails: ITransaction[] = [
    { id: 123456789, name: 'Monica James', phoneNumber: 9874563210, transactionCategory: 'Income', transactionSource: 'Salary', transactionAmount: 200, accountType: "Savings", balanceAmount: '6000' },
    { id: 123456789, name: 'Samantha', phoneNumber: 9874563210, transactionCategory: 'Income', transactionSource: 'Salary', transactionAmount: 200, accountType: "Savings", balanceAmount: '6000' },
    { id: 123456789, name: 'Catherine', phoneNumber: 9874563210, transactionCategory: 'Income', transactionSource: 'Salary', transactionAmount: 200, accountType: "Savings", balanceAmount: '6000' },
    { id: 123456789, name: 'Monica James', phoneNumber: 9874563210, transactionCategory: 'Income', transactionSource: 'Salary', transactionAmount: 200, accountType: "Savings", balanceAmount: '6000' },
    { id: 123456789, name: 'Ileana Sam', phoneNumber: 9874563210, transactionCategory: 'Income', transactionSource: 'Salary', transactionAmount: 200, accountType: "Savings", balanceAmount: '6000' },
  ]

  summery: ISummery[] = [
    { title: 'Total Users', transaction: 1567, growth: 2.36, bgColor: "bg-primary" },
    { title: 'Savings Account', transaction: 1500, growth: 2.36, bgColor: "bg-success" },
    { title: 'Savings Account', transaction: 1500, growth: 2.36, bgColor: "bg-primary" },
    { title: 'Savings Account', transaction: 1500, growth: 2.36, bgColor: "bg-success" },
  ]
}
