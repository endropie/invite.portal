module.exports = {
  label: "Events",
  icon: "event",
  contents: [
    {
      mode: "title",
      context: {
        value: "Akad Nikah",
        fontType: "whisper-font",
        fontSize: "text-3xl",
        noSpace: true,
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "event",
      context: {
        title: "Akad Nikah",
        date: "Minggu, 12 Mei 2021",
        time: "Pukul 19:00 s/d selesai",
        address:
          "Tarakan Plaza Hotel\nJl. Ahmad Yani Km.4,5 No.437, Kecamatan Tarakan Timur,\n Kota Tarakan, Kalimantan Utara",
      },
      transite: {
        name: "zoom",
      },
      attrs: {
        class: "pb-5",
      },
    },
    {
      mode: "title",
      context: {
        value: "Resepsi",
        fontType: "whisper-font",
        fontSize: "text-3xl",
        noSpace: true,
      },
      transite: {
        name: "runback-down",
      },
    },
    {
      mode: "event",
      context: {
        title: "Resepsi",
        date: "Minggu, 12 Mei 2021",
        time: "Pukul 18:00 s/d selesai",
        address:
          "Tarakan Plaza Hotel\nJl. Ahmad Yani Km.4,5 No.437, Kecamatan Tarakan Timur,\n Kota Tarakan, Kalimantan Utara",
      },
      transite: {
        name: "zoom",
      },
      attrs: {
        class: "pb-5",
      },
    },
    {
      mode: "count-down",
      context: {
        value: 2 * 24 * 60 * 60 * 1000,
        fontType: "yanone-font",
      },
      transite: {
        name: "runback-down",
      },
    },
  ],
};
