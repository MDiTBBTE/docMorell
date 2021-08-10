export const breadcrumbs = (type) => {
  return {
    uber: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Über",
        route: "",
      },
    ],
    "haufige-fragen": [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Häufige Fragen",
        route: "",
      },
    ],
    kasse: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Warenkorb",
        route: "/cart",
      },
      {
        text: "Zur Kasse",
        route: "",
      },
    ],
    kontakte: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Kontakte",
        route: "",
      },
    ],
    artikel: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Artikel",
        route: "",
      },
    ],
    cart: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: "Warenkorb",
        route: "/cart",
      },
    ],
    catalog: [
      {
        text: "Home",
        route: "/",
      },
      {
        text: type || "",
        route: "/",
      },
    ],
  };
};
