<template>
  <q-page class="flex flex-center">
    <q-card class="box">
      <q-img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />
      <q-card-actions align="center">
        <q-btn color="primary" label="Cookie" @click="fetchCookie()" />
        <q-btn color="primary" label="USER" @click="fecthUser()" />
        <q-btn color="primary" label="TEST" @click="fetchTest()" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { api } from "src/boot/axios";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const fetchTest = function () {
      const params = {
        dates: [
          ["2022-05-25", "2022-05-26"],
          ["2022-05-25", "2022-05-26"],
        ],
      };
      console.log(qs.stringify(params, { arrayFormat: "brackets" }));
      api
        .request({ url: "/api/test/123", params })
        .then((res) => console.warn(res.config.baseURL, res.config.url, res))
        .catch((err) => console.error(err));
    };

    const fetchCookie = function () {
      api
        .get("/sanctum/csrf-cookie")
        .then((res) => console.warn(res.config.baseURL, res.config.url, res))
        .catch((err) => console.error(err));
    };

    const fecthUser = function () {
      api
        .get("/api/user")
        .then((res) => console.warn(res.config.baseURL, res.config.url, res))
        .catch((err) => console.error(err));
    };

    return { fetchCookie, fecthUser, fetchTest };
  },
});
</script>
