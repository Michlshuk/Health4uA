//טבלת תרופות בגמ"ח
export class MedicinesInLenders{
    constructor(
        public Id:number,
        public LenderCode:number,
        public MedicineCode:number,
        public Amount: number,
        public AmountType: number,
        public ExpireDate:Date,
        public img:string,
        //Loaned-השאלה
        public Loaned:boolean,
        public Price: number
    ){}
        

   
}