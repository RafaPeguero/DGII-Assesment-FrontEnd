import { Selector } from "@ngxs/store";
import { AppState, AppStateModel } from "./app.state";

export class AppSelectors {

    @Selector([AppState])
    static getTaxpayers(s: AppStateModel) { 
        return s.taxpayers;
    }

    @Selector([AppState])
    static getTaxReceipts(s: AppStateModel) { 
        return s.taxReceipts;
    }
    @Selector([AppState])
    static getTaxReceiptsByTaxpayerId(s: AppStateModel) { 
        return s.taxReceiptsByTaxpayerId;
    }

}