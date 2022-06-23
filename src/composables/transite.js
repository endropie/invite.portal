import { computed, reactive, readonly, watch } from "@vue/runtime-core";

export const transites = {
  none: ["none", "none"],
  fade: ["fadeIn", "fadeOut"],
  "runnext-up": ["backInUp", "backOutUp"],
  "runnext-down": ["backInDown", "backOutDown"],
  "runnext-right": ["backInLeft", "backOutRight"],
  "runnext-left": ["backInRight", "backOutLeft"],

  "runback-up": ["backInDown", "backOutUp"],
  "runback-down": ["backInUp", "backOutDown"],
  "runback-right": ["backInRight", "backOutRight"],
  "runback-left": ["backInLeft", "backOutLeft"],

  zoom: ["zoomIn", "zoomOut"],
  "zoomnext-up": ["zoomInUp", "zoomOutUp"],
  "zoomnext-down": ["zoomInDown", "zoomOutDown"],
  "zoomnext-right": ["zoomInLeft", "zoomOutRight"],
  "zoomnext-left": ["zoomInRight", "zoomOutLeft"],
  "zoomback-up": ["zoomInDown", "zoomOutUp"],
  "zoomback-down": ["zoomInUp", "zoomOutDown"],
  "zoomback-right": ["zoomInRight", "zoomOutRight"],
  "zoomback-left": ["zoomInLeft", "zoomOutLeft"],

  "slidenext-up": ["slideInUp", "slideOutUp"],
  "slidenext-down": ["slideInDown", "slideOutDown"],
  "slidenext-right": ["slideInLeft", "slideOutRight"],
  "slidenext-left": ["slideInRight", "slideOutLeft"],
  "slideback-up": ["slideInDown", "slideOutUp"],
  "slideback-down": ["slideInUp", "slideOutDown"],
  "slideback-right": ["slideInRight", "slideOutRight"],
  "slideback-left": ["slideInLeft", "slideOutLeft"],

  "speednext-right": ["lightSpeedInLeft", "lightSpeedOutRight"],
  "speednext-left": ["lightSpeedInRight", "lightSpeedOutLeft"],
  "speedback-right": ["lightSpeedInRight", "lightSpeedOutRight"],
  "speedback-left": ["lightSpeedInLeft", "lightSpeedOutLeft"],
};

export function useTransite(property) {
  var enter = ["animated"];
  var leave = ["animated"];

  if (property.name === false) {
    enter = [];
    leave = [];
  } else {
    enter.push(property.delay || "delay-2s");
    leave.push(property.delay || "delay-2s");
    enter.push(property.duration || "slow");
    leave.push(property.duration || "slow");

    const t = transites[property.name] || transites["fade"];
    enter.push(t[0]);
    leave.push(t[1]);
  }

  return {
    getEnterClass: () => {
      return enter.join(" ");
    },
    getLeaveClass: () => {
      return leave.join(" ");
    },
  };
}
