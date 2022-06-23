const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/u/:slug",
    component: () => import("pages/Invite.vue"),
  },
  {
    path: "/u/:slug/share",
    props: {
      share: "whatsapp",
    },
    component: () => import("pages/Invite.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
