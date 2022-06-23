module.exports = {
  label: "Gift",
  icon: "redeem",
  contents: [
    {
      mode: "title",
      context: {
        value: "Kirim Hadiah",
        fontType: "whisper-font",
        fontSize: "text-4xl",
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "caption",
      context: {
        value:
          "Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberi hadiah kami sediakan fitur berikut",
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "gift-buttons",
      context: {
        bank: {
          label: "Hadiah",
          caption: "Anda dapat mengirim Hadiah melalui:",
          rows: [
            {
              name: "BUDI HERMAWAN",
              description: "BCA: 1234567890",
            },
            {
              name: "NISA WULANDARI",
              description: "BSI: 1234-567890-44-4",
            },
          ],
        },
        delivery: {
          label: "Kirim Kado",
          caption: "Anda dapat mengirim kado melalui:",
          rows: [
            {
              name: "BUDI HERMAWAN",
              description:
                "Jl. Ahmad Yani Km.4,5 No.437, Kecamatan Tarakan Timur,\n Kota Tarakan, Kalimantan Utara",
            },
          ],
        },
      },
      transite: {
        name: "runback-down",
      },
    },
  ],
};
