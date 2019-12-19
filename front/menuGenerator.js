export const menu = () => {
  return { "menus":
              [ {
                  name: "Dashboard",
                  icon: "/src/assets/menuAssets/dashboardIco.svg",
                  route: "null",
                  child: []

              },
              {
                  name: "Clients",
                  icon: "/src/assets/menuAssets/dashboardIco.svg",
                  route: "null",
                  child: [ {
                      name: "Acheteur",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "Vendeur",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }]

              },
              {
                  name: "Inventaire",
                  icon: "/src/assets/menuAssets/dashboardIco.svg",
                  route: "null",
                  child: [ {
                      name: "En cours",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "En attente",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "Archive",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }]

              },
              {
                  name: "Enchères",
                  icon: "/src/assets/menuAssets/dashboardIco.svg",
                  route: "null",
                  child: [ {
                      name: "En cours",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "Prochaines",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "Archive",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }]

              },
              {
                  name: "Produits",
                  icon: "/src/assets/menuAssets/dashboardIco.svg",
                  route: "null",
                  child: [ {
                      name: "Vendus",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }, {
                      name: "Non Vendus",
                      icon: "/src/assets/menuAssets/dashboardIco.svg",
                      route: "null"
                  }]

              }

          ]
  }
}

export default menu;
