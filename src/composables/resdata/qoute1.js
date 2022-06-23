module.exports = {
  label: "Quote",
  icon: "format_quote",

  contents: [
    {
      mode: "image",
      context: {
        value: "http://invite.local:8000/storage/sample/couple2.jpg",
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "quote",
      context: {
        caption:
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. \nSungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
        author: "AR-RUM: 21",
      },
      transite: {
        name: "runback-down",
      },
      attrs: {},
    },
  ],
};
