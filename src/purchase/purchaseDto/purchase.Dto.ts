export class PurchaseDto{
    purchaseId : string;
    productName: string;
    quantity : number;
    price : number;
    purchaseOn : Date;
}

export class UpdatePurchaseDto{
    purchaseId : string;
    productName: string;
    quantity : number;
    price : number;
    updatedOn : Date;
}