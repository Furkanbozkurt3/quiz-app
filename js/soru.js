function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap  = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {

    return cevap === this.dogruCevap;
};


const soruListesi = [
    new Soru("1-Hangisi Javascript paket yönetim uygulamasıdır?" , {a: "Node.js", b: "Typescript", c: "Nuget", d: "Npm"} , "d"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilemez?" , {a: "css", b: "html", c: "javascript", d: "sql"} , "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilebilir?" , {a: "Node.js", b: "Typescript", c: "Angular", d: "react"} , "a"),
    new Soru("4-Hangisi Javascript programlama dilini kullanmaz?" , {a: "React", b: "Angular", c: "Vuejs", d: "Asp.net"} , "d")
];

