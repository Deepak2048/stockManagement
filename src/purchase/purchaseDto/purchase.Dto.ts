export class PurchaseDto{
    id : number;
    purchaseId : string;
    productName: string;
    purchaseQuantity : number;
    purchasePrice : number;
    purchaseOn : Date;
}

export class UpdatePurchaseDto{
    id : number;
    purchaseId : string;
    productName: string;
    purchaseQuantity : number;
    purchasePrice : number;
    updatedOn : Date;
}