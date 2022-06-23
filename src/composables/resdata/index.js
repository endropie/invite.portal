const couple1 = require("./couple1");
const couple2 = require("./couple2");
const opening1 = require("./opening1");
const present1 = require("./present1");
const qoute1 = require("./qoute1");
const map1 = require("./map1");
const event1 = require("./event1");
const protocol1 = require("./protocol1");
const photos1 = require("./photos1");
const video1 = require("./video1");
const gift1 = require("./gift1");
const thanks1 = require("./thanks1");

const newTransitions = [
  {
    mode: "img",
    attrs: {
      src: "http://invite.local:8000/storage/invimages/water-color-boho/border1.png",
      class: "absolute-bottom-left",
      style: { width: "35vh" },
    },
    animate: {
      showName: "pulse",
      enterName: "backInDown",
      leaveName: "backOutUp",
    },
  },
  {
    mode: "img",
    attrs: {
      src: "http://invite.local:8000/storage/invimages/water-color-boho/border1.png",
      class: "absolute-top-right",
      style: { width: "35vh" },
    },
    animate: {
      showName: "pulse",
      enterName: "backInUp",
      leaveName: "backOutDown",
    },
  },
];

module.exports = {
  background:
    "http://invite.local:8000/storage/invimages/water-color-boho/background.png",
  audio: "http://invite.local:8000/storage/songs/ScottHolmes-UpbeatParty.mp3",
  frames: [
    {
      mode: "img",
      attrs: {
        src: "http://invite.local:8000/storage/invimages/water-color-boho/border1.png",
        class: "absolute-bottom-left",
        style: { width: "35vh" },
      },
      animate: {
        showName: "pulse",
        enterName: "backInDown",
        leaveName: "backOutUp",
      },
    },
    {
      mode: "img",
      attrs: {
        src: "http://invite.local:8000/storage/invimages/water-color-boho/border2.png",
        class: "absolute-top-right",
        style: { width: "35vh" },
      },
      animate: {
        showName: "pulse",
        enterName: "backInUp",
        leaveName: "backOutDown",
      },
    },
  ],
  autoplay: 10,
  attrs: {
    couple: "Budi & Nita",
  },
  sections: [
    opening1,
    // present1,
    qoute1,
    couple1,
    couple2,
    event1,
    map1,
    protocol1,
    photos1,
    video1,
    // { label: "RSVP", icon: "forum" },
    gift1,
    thanks1,
  ],
};
