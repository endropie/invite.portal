function getDefaultImage() {
  return `https://placeimg.com/640/480/people/${Math.round(
    Math.random() * 10000
  )}`;
}
module.exports = {
  label: "Galery",
  icon: "photo_library",
  contents: [
    {
      mode: "title",
      context: {
        value: "Galeri Mempelai",
        fontType: "whisper-font",
        fontSize: "text-4xl",
      },
      transite: {
        name: "runback-up",
      },
    },
    {
      mode: "photos",
      context: {
        values: [
          { span: "row-span-1", src: getDefaultImage() },
          { span: "row-span-2 col-span-2 ", src: getDefaultImage() },
          { span: "row-span-1", src: getDefaultImage() },
          { span: "row-span-2 col-span-1", src: getDefaultImage() },
          { span: "row-span-1", src: getDefaultImage() },
          { span: "row-span-1", src: getDefaultImage() },
          { span: "row-span-1", src: getDefaultImage() },
          { span: "row-span-1", src: getDefaultImage() },
        ],
      },
      transite: {
        name: "runback-down",
      },
    },
  ],
};
