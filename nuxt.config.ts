// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  routeRules: {
    "/game-info/code": { redirect: "/info/code" },
    "/free-stamina": { redirect: "https://youtu.be/g3jCAyPai2Y?si=1f8a-6_i9v-cc7W7&t=66" },
    "/free-ether": { redirect: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  },

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: "active",
      },
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "th",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://wcqoupeoqnvolpczgpkx.supabase.co/storage/v1/object/public/WebAssets/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
          integrity:
            "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH",
          crossorigin: "anonymous",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Thai:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
          integrity:
            "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz",
          crossorigin: "anonymous",
        },
        {
          type: "application/ld+json",
          innerHTML: {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NorneDB",
            url: "https://nornedb.online/",
          },
        },
      ],
      bodyAttrs: {
        "data-bs-theme": "dark",
      },
    },
  },

  css: ["~/assets/css/global.css"],
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect:false
  }
});