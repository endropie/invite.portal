module.exports = {
  label: "Opening",
  icon: "home",
  contents: [
    {
      mode: "title",
      context: {
        value: "The Wedding of",
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "coupletext",
      context: {
        value: ["Budi", "Nita"],
        fontType: "whisper-font",
        fontSize: "text-4xl",
      },
      transite: {
        name: "zoom",
        duration: "slower",
      },
    },
    {
      mode: "image-avatar",
      context: {
        value: "http://invite.local:8000/storage/sample/couple1.jpg",
        size: "8.5rem",
      },
      transite: {
        name: "runnext-right",
        delay: "delay-1s",
      },
    },
  ],
};
