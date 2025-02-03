//משאילים-גמ"חים
export class Lenders{
    constructor(
        public Id?:number,
        public Name?:string,
        public Family?:string,
        public City?: string,
        public Street?: string,
        public Building?: number,
        public House?: number,
        public Available?: string,
        public Phone?: string,
        public Details?: string,
        public Gmach?: boolean, 
        public Password?: string
    ){}
}