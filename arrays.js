const anaTablo = [
  {
    key: "trafo_merkezi_id",
    name: "TM ID",
  },
  {
    key: "etiket",
    name: "Etiket",
  },
  {
    key: "lkp_bolge_mudurluk_qw_",
    name: "Bölge Müdürlüğü",
    ref: "seciliMudurluk",
  },
  {
    key: "lkp_isletme_mudurluk_qw_",
    name: "İşletme Müdürlüğü",
    ref: "seciliIsletme",
  },
  {
    key: "lkp_sorumlu_ytm_qw_",
    name: "Yük Tevzi Müdürlüğü",
    ref: "seciliYukTevzi",
  },
  {
    key: "lkp_tm_durum_qw_",
    name: "Transformatör Merkezi Durumu",
    ref: "seciliTransformatorMerkezi",
  },
  {
    key: "lkp_trafo_merkezi_tip_qw_",
    name: "Transformatör Merkezi Tipi",
    ref: "seciliTransformatorMerkeziTipi",
  },
  {
    key: "trafo_merkez_ad",
    name: "Transformatör Merkezi Adı",
  },
  {
    key: "max_salt_gerilim",
    name: "Sistem Nominal Gerilimi (kV)",
  },
  {
    key: "lkp_tm_scada_durum",
    name: "TM Scadalı Mı?",
    ref: "seciliTmScada",
  },
  {
    key: "lkp_mulkiyet_qw_",
    name: "Mülkiyet",
    ref: "seciliMulkiyet",
  },
  {
    key: "lkp_sorumluluk_qw_",
    name: "TM İşletme Bakım Sorumluluğu",
    ref: "seciliTmIsletme",
  },
  {
    key: "lkp_isletme_sekli_qw_",
    name: "İşletme Şekli",
    ref: "seciliIsletmeSekli",
  },
  {
    key: "lkp_isleten_firma_qw_",
    name: "İşleten Firma",
    ref: "seciliIsletenFirma",
  },
  {
    key: "lkp_il_qw_",
    name: "İl",
    ref: "seciliIl",
  },
  {
    key: "lkp_ilce_qw_",
    name: "İlçe",
  },
  {
    key: "lkp_mahalle_qw_",
    name: "Mahalle",
  },
  {
    key: "lkp_sokak_qw_",
    name: "CSB(Cadde-Sokak-Bulvar)",
  },
  {
    key: "adres",
    name: "Adres",
  },
  {
    key: "telefon",
    name: "Telefon",
  },
  {
    key: "fax",
    name: "Fax",
  },
  {
    key: "pax",
    name: "Pax",
  },
  {
    key: "rakim",
    name: "Rakım",
  },
  {
    key: "enlem_derece",
    name: "Enlem Derece",
  },
  {
    key: "enlem_dakika",
    name: "Enlem Dakika",
  },
  {
    key: "enlem_saniye",
    name: "Enlem Saniye",
  },
  {
    key: "boylam_derece",
    name: "Boylam Derece",
  },
  {
    key: "boylam_dakika",
    name: "Boylam Dakika",
  },
  {
    key: "boylam_saniye",
    name: "Boylam Saniye",
  },
  {
    key: "gecici_kabul_dt",
    name: "İlk Geçici Kabul Tarihi",
  },
  {
    key: "kesin_kabul_dt",
    name: "Kesin Kabul Tarihi",
  },
  {
    key: "muteselsil_sorumluluk",
    name: "Müteselsil Sorumluluk",
  },
  {
    key: "istimlak_saha_buyukluk",
    name: "İstimlak Saha Büyüklüğü",
  },
  {
    key: "insert_user_id_qw_",
    name: "Kaydeden",
  },
  {
    key: "insert_dttm",
    name: "Kayıt Tarihi",
  },
  {
    key: "version_user_id_qw_",
    name: "Son Düzenleyen",
  },
  {
    key: "version_dttm",
    name: "Son Düzenleme Tarihi",
  },
  {
    key: "aciklama",
    name: "Açıklama",
  },
  {
    key: "sorumlu_ekip",
    name: "Sorumlu Ekipler",
  },
];

const altTablo = [
  {
    name: "Şalt ID",
    key: "salt_id",
  },
  {
    name: "Bölge Müdürlüğü",
    key: "lkp_bolge_mudurluk_qw_",
  },
  {
    name: "İşletme Müdürlüğü",
    key: "lkp_isletme_mudurluk_qw_",
  },
  {
    name: "İşletme Bakım Sorumluluğu",
    key: "lkp_isletme_bakim_sorumluk_qw_",
  },
  {
    name: "Transformatör Merkezi Durumu",
    key: "lkp_tm_durum_qw_",
  },
  {
    name: "Transformatör Merkezi",
    key: "trafo_merkezi_id_qw_",
  },
  {
    name: "Şalt Tipi",
    key: "lkp_salt_tip_qw_",
  },
  {
    name: "Sistem Nominal Gerilimi(kV)",
    key: "gerilim",
  },
  {
    name: "Şalt Adı",
    key: "salt_ad",
  },
  {
    name: "Bara Sistemi",
    key: "gerilimli_bara_sistem",
  },
  {
    name: "Şalt Durum",
    key: "lkp_salt_durum_qw_",
  },
  {
    name: "Fider Sayısı",
    key: "fider_sayi",
  },
  {
    name: "Kapalı Şalt Tipi",
    key: "lkp_kapali_salt_tip_qw_",
  },
  {
    name: "Marka",
    key: "marka_qw_",
  },
  {
    name: "Model",
    key: "model",
  },
  {
    name: "İmal Yılı",
    key: "imal_year",
  },
  {
    name: "Römork Plakası",
    key: "kumanda_seri_no",
  },
  {
    name: "Kumanda Seri Numarası",
    key: "romark_plaka",
  },
  {
    name: "Yedek Transformatör Cebi Adedi",
    key: "yedek_trafo_cebi_adet",
  },
  {
    name: "Donanımsız Fider Yeri Sayısı",
    key: "donanimsiz_fider_yeri_sayi",
  },
  {
    name: "Kayıt Tarihi",
    key: "insert_dttm",
  },
  {
    name: "Kaydeden",
    key: "insert_user_id_qw_",
  },
  {
    name: "Son Düzenleme Tarihi",
    key: "version_dttm",
  },
  {
    name: "Son Düzenleyen",
    key: "version_user_id_qw_",
  },
];

const gridTabloTabler = [
  "Şalt",
  "Bara",
  "Fider",
  "Kesici",
  "Ayırıcı",
  "Akım Transformatörü",
  "Gerilim Transformatörü",
  "Parafudr",
  "Transformatör",
  "Reaktör",
  "Buşing",
  "Nötr Direnç",
  "Kapasitör",
  "Geçit",
  "Mesnet",
  "Akümülatör",
  "Hat Tıkaçları",
  "OG Kablo Başlığı",
  "Metal Clad",
  "Yangın Söndürme Sistemi",
];

const mudurlukArray = [
  "GENEL MÜDÜRLÜK",
  "1. BÖLGE MÜDÜRLÜĞÜ",
  "2. BÖLGE MÜDÜRLÜĞÜ",
  "3. BÖLGE MÜDÜRLÜĞÜ",
  "4. BÖLGE MÜDÜRLÜĞÜ",
  "5. BÖLGE MÜDÜRLÜĞÜ",
  "6. BÖLGE MÜDÜRLÜĞÜ",
  "7. BÖLGE MÜDÜRLÜĞÜ",
  "8. BÖLGE MÜDÜRLÜĞÜ",
  "9. BÖLGE MÜDÜRLÜĞÜ",
  "10. BÖLGE MÜDÜRLÜĞÜ",
  "11. BÖLGE MÜDÜRLÜĞÜ",
  "12. BÖLGE MÜDÜRLÜĞÜ",
  "13. BÖLGE MÜDÜRLÜĞÜ",
  "14. BÖLGE MÜDÜRLÜĞÜ",
  "15. BÖLGE MÜDÜRLÜĞÜ",
  "16. BÖLGE MÜDÜRLÜĞÜ",
  "17. BÖLGE MÜDÜRLÜĞÜ",
  "18. BÖLGE MÜDÜRLÜĞÜ",
  "19. BÖLGE MÜDÜRLÜĞÜ",
  "20. BÖLGE MÜDÜRLÜĞÜ",
  "21. BÖLGE MÜDÜRLÜĞÜ",
  "22. BÖLGE MÜDÜRLÜĞÜ",
];
const isletmeArray = [
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "İKİTELLİ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "BALIKESİR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "ÇANAKKALE İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ALİAĞA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ (İZMİR)",
  "MANİSA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "TEPEÖREN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ZONGULDAK İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ESKİŞEHİR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "AFYON İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "KARAMAN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "SEYDİŞEHİR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ORDU İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "TOKAT İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "KIRŞEHİR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "SİVAS İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "NİĞDE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "KAHRAMANMARAŞ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "ŞANLIURFA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "MALATYA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "ADIYAMAN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "HOPA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ERZİNCAN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "KARS İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "DİYARBAKIR İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "MARDİN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "SİİRT İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "AĞRI İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "IĞDIR İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "TATVAN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ (BİTLİS)",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "İSKENDERUN İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "MERSİN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "ALANYA İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "FİNİKE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "TEKİRDAĞ İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "İŞLETME VE BAKIM MÜDÜRLÜ",
  "AYDIN İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "MUĞLA İLETİM ŞEBEKELERİ İŞLETME VE BAKIM MÜDÜRLÜĞÜ",
  "BİNGÖL İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
  "CİZRE İŞLETME VE BAKIM GRUP BAŞMÜHENDİSLİĞİ",
];
const yukTevziArray = [
  "DOĞU AKDENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ADANA )",
  "ORTA ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (GÖLBAŞI)",
  "BATI AKDENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (KEPEZ/ANTALYA)",
  "TRAKYA YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (İSTANBUL)",
  "GÜNEYDOĞU ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ELAZIĞ)",
  "DOĞU ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ERZURUM)",
  "BATI ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (İZMİR)",
  "KUZEYBATI ANADOLU YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (ADAPAZARI)",
  "ORTA KARADENİZ YÜK TEVZİ İŞLETME MÜDÜRLÜĞÜ (SAMSUN)",
];
const transformatorMerkeziArray = [
  "İŞLETMEDE",
  "TESİS AŞAMASINDA",
  "PLANLAMADA",
];
const transformatorMerkeziTipiArray = [
  "KLASİK",
  "GİS (GAZ İZOLELİ SİSTEM)",
  "SKM (SERİ KAPASİTÖR MERKEZİ)",
  "İNTERFACE",
];
const mulkiyetArray = ["TEİAŞ", "ORTAK", "DİĞER", "YURTDIŞI"];
const isletenFirmaArray = [
  "AKMAN ENERJİ HAYRİ SUVAY İŞ ORTAKLIĞI",
  "AKSÖZ ELEKTRİK",
  "AKTİF ENERJİ",
  "BATUM ELEKTRİK",
  "BMM A.Ş.",
  "BOZ-AK ENERJİ",
  "CEM BARAN",
  "ÇETİNKAYA ELEKTRİK",
  "DEMİSTAŞ",
  "ELBİM ELEKTRİK",
  "ELTEM TEK",
  "EMRE ENERJİ",
  "İŞSAN İNŞAAT",
  "MET ENERJİ",
  "MOSTAR GRUP",
  "ÖZAŞ ENERJİ",
  "REM MÜHENDİSLİK",
  "RM ELEKTRİK",
  "ŞAHİN YILMAZ ENERJİ",
  "TİMERK ENERJİ",
  "YAMANLAR",
  "EPD MÜHENDİSLİK",
  "MAT Enerji",
  "BATUM MERMER",
  "SUVAY ENERJİ",
  "SAF TEMİZLİK",
  "ANIK MÜHENDİSLİK",
  "ENERON MÜHENDİSLİK",
  "YAMAN ENERJİ",
  "GÜLKAR",
  "EMBİ",
  "RÖNESANS RESTERASYON A.Ş.",
  "SY ENERJİ YATIRIM A.Ş.",
  "BMM",
  "YAMANLAR-GÜLKAR İŞ ORTAKLIĞI",
  "ANIK - KAYA İŞ ORTAKLIĞI",
  "İŞSAN-RÖNESANS İŞ ORTAKLIĞI",
  "SAF ENERJİ",
  "AKMAN ENERJİ",
  "KAYA GRUP",
];
const ilArray = [
  "Adana",
  "Adıyaman",
  "Afyon",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkari",
  "Hatay",
  "Isparta",
  "İçel",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];
const maksimumSaltArray = ["6.3", "10.5", "15.8", "33", "66", "154", "400"];

module.exports = {
  anaTablo,
  altTablo,
  gridTabloTabler,
  mudurlukArray,
  isletmeArray,
  yukTevziArray,
  transformatorMerkeziArray,
  transformatorMerkeziTipiArray,
  mulkiyetArray,
  isletenFirmaArray,
  ilArray,
  maksimumSaltArray,
};
