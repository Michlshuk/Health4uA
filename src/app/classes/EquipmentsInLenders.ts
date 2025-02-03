//טבלת ציוד בגמ"ח
export class EquipmentsInLenders{
    constructor(
        public id?: number,
        public LenderCode?: number,
        public EquipmentCode?: number,
        public Description?: string,
        public Loaned?: boolean,
        public TimeLending?: number,
        public img?:string,
    ){}
}
 