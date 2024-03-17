
export enum AppActionsTypes {
    LoadTaxPayers = '[TaxPayer] Load TaxPayers',
    LoadTaxReceipts = '[TaxReceipt] Load TaxReceipts',
    LoadTaxReceiptsByTaxpayerId = '[TaxReceipt] Load TaxReceipts by taxpayerId',
}

export class LoadTaxPayers {
  static readonly type = AppActionsTypes.LoadTaxPayers;
  readonly type = AppActionsTypes.LoadTaxPayers;
    constructor() { }
  }

  export class LoadTaxReceipts {
    static readonly type = AppActionsTypes.LoadTaxReceipts;
    readonly type = AppActionsTypes.LoadTaxReceipts;
    constructor() { }
  }

  export class LoadTaxReceiptsByTaxpayerId { 
    static readonly type = AppActionsTypes.LoadTaxReceiptsByTaxpayerId;
    readonly type = AppActionsTypes.LoadTaxReceiptsByTaxpayerId;
    constructor(public taxpayerId: number) { }
  }
  