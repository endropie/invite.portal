function getDefaultImage() {
  return `https://placeimg.com/640/480/people/${Math.random() * 10000}`;
}
module.exports = {
  label: "Video",
  icon: "smart_display",
  contents: [
    {
      mode: "ytube",
      context: {
        embed:
          '<iframe width="320" height="180" src="https://www.youtubex.com/embed/TuuHFEd79Mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      },
      transite: {
        name: "runback-down",
      },
    },
    {
      mode: "quote",
      context: {
        caption:
          "Tingkat ketenangan batin terbesar berasal dari pengembangan cinta dan kasih sayang. Semakin kita peduli pada kebahagiaan orang lain, semakin besar rasa sejahtera kita sendiri",
        author: "Dalai Lama",
      },
      transite: {
        name: "runback-up",
      },
    },
  ],
};
