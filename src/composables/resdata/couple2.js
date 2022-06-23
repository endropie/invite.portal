module.exports = {
  label: "Couple",
  icon: "ion-heart-half",
  contents: [
    {
      mode: "image-double-avatar",
      context: {
        value: [
          "http://invite.local:8000/storage/sample/couple1.jpg",
          "http://invite.local:8000/storage/sample/couple2.jpg",
        ],
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
        value: "Adam Zaki Hamzah",
        fontType: "whisper-font",
        fontSize: "text-3xl",
      },
      transite: {
        name: "zoomback-left",
        duration: "slower",
      },
    },
    {
      mode: "caption",
      context: {
        value: "Putra dari Bapak H. Amir Hamzah \n& Ibu Hj. Huraini",
      },
      transite: {
        name: "slidenext-down",
        delay: "delay-1s",
      },
      attrs: {
        class: "-mt-4 pb-6",
      },
    },
    {
      mode: "title",
      context: {
        value: "Haninun Putri Sibaban",
        fontType: "whisper-font",
        fontSize: "text-3xl",
      },
      transite: {
        name: "zoomback-right",
        duration: "slower",
      },
    },
    {
      mode: "caption",
      context: {
        value: "Putra dari Bapak H. Gilang Sibaban \n& Ibu Nilam sari",
      },
      transite: {
        name: "slidenext-down",
        delay: "delay-1s",
      },
      attrs: {
        class: "-mt-4 pb-6",
      },
    },
  ],
};
