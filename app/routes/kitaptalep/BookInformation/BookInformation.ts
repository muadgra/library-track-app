export class BookInformation{
    kitapIsim: string;
    kitapTur: string; 
    kitapContent?: string; 
    kitapAltTur?: string;
    constructor(){
        this.kitapIsim = "";
        this.kitapTur = "" ; 
        this.kitapContent = ""; 
        this.kitapAltTur = "";
    }
}