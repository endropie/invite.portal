module.exports = {
  label: "Protokol",
  icon: "verified_user",

  contents: [
    {
      mode: "title",
      context: {
        value: "Protokol Kesehatan",
        fontType: "whisper-font",
        fontSize: "text-4xl",
      },
    },
    {
      mode: "caption",
      context: {
        value:
          "Mengingat kondisi pandemi saat ini, kami menghimbau Bapak/Ibu/Saudara/i tamu undangan agar tetap memperhatikan protokol kesehatan dalam rangka upaya pencegahan penyebaran virus Covid-19.",
      },
    },
    {
      mode: "prohealth",
      context: {
        wearmask: "Memakai Masker",
        washinghands: "Mencuci Tangan",
        distancing: "Menjaga Jarak",
        tempcheck: "Cek Suhu Tubuh",
      },
      transite: {
        name: "runback-down",
      },
      attrs: {},
    },
  ],
};
