function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap  = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {

    return cevap === this.dogruCevap;
};


const soruListesi = [
    new Soru("Gelir Vergisi Kanunu'na göre, beyan edilen gelirin yüzde kaçını aşmayan eğitim ve sağlık harcamaları matrahtan indirilebilir?", {a: "5", b: "10", c: "15", d: "20"}, "b"),
    new Soru("Kurumlar Vergisi Kanunu'na göre, kanunî ve iş merkezlerinin her ikisi de Türkiye'de bulunmayan kurumlar hangi statüdedir?", {a: "Tam Mükellef", b: "Muaf Mükellef", c: "Dar Mükellef", d: "Sorumlu Mükellef"}, "c"),
    new Soru("Damga Vergisi Kanunu uyarınca, bir kağıtta birbirinden tamamen bağımsız birden fazla akit bulunması halinde vergi nasıl alınır?", {a: "En yüksek olan", b: "Yarısı", c: "Sadece biri", d: "Her birinden ayrı ayrı"}, "d"),
    new Soru("Özel Tüketim Vergisi Kanunu'na göre, malın tesliminden önce fatura verilmesi halinde vergiyi doğuran olay ne zaman gerçekleşir?", {a: "Teslimde", b: "Fatura düzenlendiğinde", c: "Ödeme yapıldığında", d: "Gümrükte"}, "b"),
    new Soru("Vergi Usul Kanunu'na göre, fatura malın tesliminden itibaren en geç kaç gün içinde düzenlenmelidir?", {a: "3", b: "5", c: "7", d: "10"}, "c"),
    new Soru("Kurumlar Vergisi Kanunu'na göre, borçlanmanın örtülü sermaye sayılması için borcun öz sermayenin kaç katını aşması gerekir?", {a: "2", b: "3", c: "4", d: "5"}, "b"),
    new Soru("Gelir Vergisi Kanunu'na göre, binaların mesken kira gelirlerinde 2026 yılı için uygulanacak istisna tutarı kaç TL'dir?", {a: "21.000", b: "58.000", c: "120.000", d: "150.000"}, "b"),
    new Soru("Damga Vergisi Kanunu'na göre, resmi daireler ile kişiler arasındaki işlemlere ait kağıtların vergisini kim öder?", {a: "Resmi Daire", b: "Kişiler", c: "Noter", d: "Banka"}, "b"),
    new Soru("Özel Tüketim Vergisi Kanunu'na göre, (I) sayılı listedeki akaryakıt ürünlerinin mükellefi kimdir?", {a: "Tüketici", b: "Bayi", c: "İmalatçı veya İthalatçı", d: "Nakliyeci"}, "c"),
    new Soru("Kurumlar Vergisi Kanunu'na göre, en az iki tam yıl elde tutulan iştirak hissesi satış kazancının yüzde kaçı istisnadır?", {a: "25", b: "50", c: "75", d: "100"}, "c"),
    new Soru("Damga Vergisi Kanunu'na göre, nispi vergiye tabi kağıtlar birden fazla nüsha düzenlenirse kaç nüsha vergilendirilir?", {a: "Sadece biri", b: "İkisi", c: "Hepsi", d: "Nüsha sayısı kadar"}, "a"),
    new Soru("Gelir Vergisi Kanunu'na göre, tam mükellef kurumlardan elde edilen kâr paylarının ne kadarı gelir vergisinden müstesnadır?", {a: "Tamamı", b: "Yarısı", c: "Dörtte biri", d: "Yüzde 15'i"}, "b"),
    new Soru("Özel Tüketim Vergisi Kanunu'na göre, ihraç kaydıyla teslimde SCT'nin terkin edilmesi için ihracat kaç ayda yapılmalıdır?", {a: "1", b: "3", c: "6", d: "12"}, "b"),
    new Soru("Kurumlar Vergisi Kanunu uyarınca, kurumun ana statüsünde gösterilen merkez aşağıdakilerden hangisidir?", {a: "İş Merkezi", b: "Fiili Merkez", c: "Kanuni Merkez", d: "Yönetim Merkezı"}, "c"),
    new Soru("Gelir Vergisi Kanunu'na göre, tevkifata tabi olmayan menkul sermaye iratları 2026'da kaç TL'yi aşmazsa beyan edilmez?", {a: "10.000", b: "22.000", c: "45.000", d: "58.000"}, "b")
];