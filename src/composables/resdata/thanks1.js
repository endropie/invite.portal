module.exports = {
  label: "Thanks",
  icon: "priority",
  contents: [
    {
      mode: "image-intersect",
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
      mode: "caption",
      context: {
        value:
          "Merupakan suatu kebahagiaan bagi kami atas kehadiran Bapak/Ibu untuk memberikan doa restu",
      },
      transite: {
        name: "slidenext-up",
        delay: "delay-1s",
      },
      attrs: {
        class: "-mt-4 pb-6",
      },
    },
    {
      mode: "respectfull",
      context: {
        title: "Hormat Kami yang mengundang",
        value: "Adam & Nani",
        fontType: "whisper-font",
        fontSize: "text-3xl",
      },
      transite: {
        name: "zoomback-down",
        duration: "slower",
      },
    },
  ],
};
