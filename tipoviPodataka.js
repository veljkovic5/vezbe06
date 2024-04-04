//primitivni tipovi
var godine = 25;
var ime = "Veljko";
var studira = true;
//Nizovi
var predmeti = ["EPOS", "Klijentske", "CLOUD"];
var ocene = [10, 9, 8];
//Tuple
var tuple = ["Veljko", 21];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeEPOS"] = 0] = "TehnologijeEPOS";
    Modul[Modul["soft"] = 1] = "soft";
    Modul[Modul["info"] = 2] = "info";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeEPOS;
//objekti
var student = {
    ime: "Veljko",
    godine: 21,
    studira: true
};
//unija tipova
var brojIliString = 10;
//any tip
var biloKojiTip = "Moze bilo koji tip";
//void tip
function cao() {
    console.log("cao");
}
//null i undefined
var n = null;
var u = undefined;
//type assertions
var nekaVrednost = "neki string";
var duzinaStringa = nekaVrednost.length;
console.log("Duzina stringa je:", duzinaStringa);
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloKojiTip);
console.log(n, u);
