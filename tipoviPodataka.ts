//primitivni tipovi
let godine:number=25;
let ime:string="Veljko"
let studira:boolean=true;
//Nizovi
let predmeti:string[]=["EPOS","Klijentske","CLOUD"];
let ocene:number[]=[10,9,8];
//Tuple
let tuple:[string,number]=["Veljko",21];
//enum

enum Modul{
    TehnologijeEPOS,
    soft,
    info

}
let modul:Modul=Modul.TehnologijeEPOS;
//objekti
let student:{ime:string,godine:number,studira:boolean}={
    ime:"Veljko",
godine:21,
studira:true
};
//unija tipova
let brojIliString:number | String=10;
//any tip
let biloKojiTip:any="Moze bilo koji tip";
//void tip
function cao():void{
    console.log("cao");
}
//null i undefined
let n:null=null;
let u:undefined=undefined;

//type assertions
let nekaVrednost:any="neki string";
let duzinaStringa:number=(nekaVrednost as String).length
console.log("Duzina stringa je:",duzinaStringa);
console.log(godine,ime,studira)
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n,u);