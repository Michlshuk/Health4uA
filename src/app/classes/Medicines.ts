//תרופות
export class Medicines{
    constructor( 
        public Id: number,
        public Name:string,
        public Prescription:string,
        public Age:boolean,
        public FromAgeNum: number,
        public FromTimeId: number,
        public ToTimeId: number,
        public Img:string,
        public MedicineTypeCode: number,
        public ToAgeNum: number,
        ){}
}