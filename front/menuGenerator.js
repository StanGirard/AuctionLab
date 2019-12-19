export const menu = () => {
  return {
    "menus": [{
        parent: false,
        name: "dashboard",
        title: "DASHBOARD",
        icon: "../../../assets/menuAssets/dashboardIco.svg",
        route: "null",
        active: true
      }, {
        parent: false,
        name: "clients",
        title: 'CLIENTS',
        icon: "../../../assets/menuAssets/clientsIco.svg",
        route: "null",
        active: false,
      }, {
        parent: "clients",
        name: "acheteur",
        title: "ACHETEUR",
        icon: "../../../assets/menuAssets/acheteurIco.svg",
        route: "null"
      }, {
        parent: "clients",
        name: "vendeur",
        title: "VENDEUR",
        icon: "../../../assets/menuAssets/vendeurIco.svg",
        route: "null",
        last: true
      }, {
        parent: false,
        name: "inventaire",
        title: 'INVENTAIRE',
        icon: "../../../assets/menuAssets/inventaireIco.svg",
        route: "null",
        active: false,
      }, {
        parent: "inventaire",
        name: "enCours",
        title: "EN COURS",
        icon: "../../../assets/menuAssets/support.svg",
        route: "null"
      }, {
        parent: "inventaire",
        name: "enAttente",
        title: "EN ATTENTE",
        icon: "../../../assets/menuAssets/enAttenteIco.svg",
        route: "null"
      }, {
        parent: "inventaire",
        name: "archives",
        title: "ARCHIVES",
        icon: "../../../assets/menuAssets/archiveIco.svg",
        route: "null",
        last: true
      }, {
        parent: false,
        name: "encheres",
        title: "ENCHERES",
        icon: "../../../assets/menuAssets/enchereIco.svg",
        route: "null",
        active: false,
      }, {
        parent: "encheres",
        name: "enCours",
        title: "EN COURS",
        icon: "../../../assets/menuAssets/support.svg",
        route: "null"
      }, {
        parent: "encheres",
        name: "prochaines",
        title: "PROCHAINES",
        icon: "../../../assets/menuAssets/enAttenteIco.svg",
        route: "null"
      }, {
        parent: "encheres",
        name: "archives",
        title: "ARCHIVES",
        icon: "../../../assets/menuAssets/archiveIco.svg",
        route: "null",
        last: true
      }, {
        parent: false,
        name: "produits",
        title: "PRODUITS",
        icon: "../../../assets/menuAssets/produitsIco.svg",
        route: "null",
        active: false,
      }, {
        parent: "produits",
        name: "vendus",
        title: "VENDUS",
        icon: "../../../assets/menuAssets/vendusIco.svg",
        route: "null"
      }, {
        parent: "produits",
        name: "nonVendus",
        title: "NON VENDUS",
        icon: "../../../assets/menuAssets/nonVendusIco.svg",
        route: "null",
        last: true
      }, {
        parent: false,
        name: "caca",
        title: "CACA PROUT DANS LE SLIP",
        icon: "../../../assets/menuAssets/poop.svg",
        route: "null",
        last: true
      }, {
        parent: "caca",
        name: "caca",
        title: "SLIP",
        icon: "../../../assets/menuAssets/panties.svg",
        route: "null",
        last: true
      },
    ]
  }
}

export default menu;
