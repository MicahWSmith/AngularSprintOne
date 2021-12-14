import { Component, OnInit } from '@angular/core';
import { Finance } from './finance.model';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  finances: Finance[] = [];

  displayedColumns: string[] = ['demo-id', 'demo-first', 'demo-last', 'demo-acct', 'demo-balance'];

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    //set recommended list to api call
    this.financeService.getFinances().subscribe(payload => {
      this.finances = payload.Accounts;
    });
  }

}