    // ATM UYGULAMASI ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

console.log("----- HOŞGELDİNİZ ----- Katır Bank ----- HOŞGELDİNİZ -----");
let hesap = 10000;
let vadeliHesap = 0;
let baskasininHesabi = 300;
let sayac = 0;
let sifreGirildi = false;

while (true) {
    if (!sifreGirildi) {
        const sifre = prompt("Şifrenizi Giriniz");
        if (sifre !== "1905") {
            console.log("Şifre Yanlış");
            sayac++;
            if (sayac === 3) {
                console.log("Kartınız Bloke Oldu");
                break;

            }
        } else {
            console.log("Şifre Doğru Girildi");
            sifreGirildi = true;
        }
    } else {
        const birinciDeger = parseInt(prompt("1-Hesaba Para Yatırma\n 2-Para Çekme \n 3-Bakiye Sorgulama \n 4-Havale-Eft \n 5- Vadeli Hesap İşlemleri \n 6-Kredi İşlemleri \n 7-Çıkış \ Lütfen Yapmak İstediğiniz İşlemi Seçniz"));
        if (birinciDeger === 1) {
            const yatirilanPara = parseInt(prompt("Lütfen Yatırmak İstediğiniz Miktarı Giriniz"));
            if (yatirilanPara > 0) {
                hesap += yatirilanPara;
                console.log("Yatırılan Miktar:", yatirilanPara);
                console.log("Toplam Hesap Bakiyeniz:", hesap);
            } else {
                console.log("Hatalı Giriş");
            }
        } else if (birinciDeger === 2) {
            const hizliCekim = parseInt(prompt("1-20 tl \n 2-50 tl \n 3-100 tl \n 4-200 tl \n 5-500 \n 6-Diğer Tutar"));
            if (hizliCekim === 1) {
                hesap -= 20;
                console.log("Çekilen Miktar:", 20);
                console.log("Kalan Bakiyeniz:", hesap);
            } else if (hizliCekim === 2) {
                hesap -= 50;
                console.log("Çekilen Miktar:", 50);
                console.log("Kalan Bakiyeniz:", hesap);
            } else if (hizliCekim === 3) {
                hesap -= 100;
                console.log("Çekilen Miktar:", 100);
                console.log("Kalan Bakiyeniz:", hesap);
            } else if (hizliCekim === 4) {
                hesap -= 200;
                console.log("Çekilen Miktar:", 200);
                console.log("Kalan Bakiyeniz:", hesap);
            } else if (hizliCekim === 5) {
                hesap -= 500;
                console.log("Çekilen Miktar:", 500);
                console.log("Kalan Bakiyeniz:", hesap);
            } else if (hizliCekim === 6) {
                const girilenMiktar = parseInt(prompt("Lütfen Çekmek İstediğiniz Miktarı Giriniz"));
                if (girilenMiktar > 0) {
                    hesap -= girilenMiktar;
                    console.log("Çekilen Miktar:", girilenMiktar);
                    console.log("Kalan Bakiyeniz:", hesap);
                } else {
                    console.log("Hatalı Giriş");
                }
            } else {
                console.log("Hatalı Giriş");
            }

        } else if (birinciDeger === 3) {
            console.log("Bakiye Sorgulama");
            console.log("Hesabınızdaki Para Miktarı:", hesap);
        } else if (birinciDeger === 4) {

            const hesapNo = prompt("Havale Yapmak İstediğiniz Hesap No Giriniz");
            if (hesapNo === "12345678") {
                console.log("Hesap Sahibinin İsmi: Ahmet");
                const havaleMiktari = parseInt(prompt("Lütfen Miktar Girinz"));
                if (havaleMiktari > 0) {
                    hesap -= havaleMiktari;
                    console.log("Ahmetin Hesabına:", havaleMiktari, "TL Gönderilmiştir");
                    console.log("Kalan Bakiyeniz: ", hesap);
                } else {
                    console.log("Hatalı Giriş");
                }
            } else {
                console.log("Hatalı Giriş");
            }
        } else if (birinciDeger === 5) {
            const vadeliMiktar = parseInt(prompt("Lütfen Aktarılacak Miktarı Giriniz"));
            hesap -= vadeliMiktar;
            vadeliHesap += vadeliMiktar;
            const gun = parseInt(prompt("Vadeli Gün Sayısını Giriniz"));
            const faizOrani = 0.10;
            const toplamFaiz = gun * faizOrani;
            vadeliHesap = (vadeliMiktar * toplamFaiz) + vadeliMiktar;
            console.log("Vadeli Hesap Bakiyeniz", vadeliHesap);
            console.log("Vadeli Bakiyeniz" + (vadeliHesap, hesap));
        } else if (birinciDeger === 6) {
            const krediMiktari = parseInt(prompt("Çekmek İstediğiniz Kredi Miktarını Giriniz"));
            if (krediMiktari > 0) {
                const krediHesabi = hesap + vadeliHesap;
                console.log("Krediniz Onaylanmıştır \n Yeni Bakiyeniz: ", krediHesabi);
                if (krediHesabi >= krediMiktari) {
                    hesap += krediMiktari;
                    console.log(krediMiktari + "TL Krediniz İşleme Alınmıştır");
                    console.log("Yeni Bakiyeniz: ", hesap);
                } else {
                    console.log("Kredi Miktarı Hesabınızda Yeterli Bakiye Olmadığı İçin Kredi Talebiniz REDDEDİLMİŞTİR");

                }
            } else {
                console.log("Hatalı Giriş");
            }
        } else if (birinciDeger === 7) {
            console.log("Çıkış Yapılıyor.");
            break;
        } else {
            console.log("Hatalı Giriş");
        }

    }


    }
