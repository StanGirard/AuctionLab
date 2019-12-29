export const menu = () => {
  return {
    "menus": [{
        parent: false,
        name: "dashboard",
        title: "DASHBOARD",
        icon: "../../../assets/menuAssets/dashboardIco.svg",
        route: '/',
        active: true
      }, {
        parent: false,
        name: "clients",
        title: 'CLIENTS',
        icon: "../../../assets/menuAssets/clientsIco.svg",
        route: '/',
        active: false,
      }, {
        parent: "clients",
        name: "acheteur",
        title: "ACHETEURS",
        icon: "../../../assets/menuAssets/acheteurIco.svg",
        route: '/clients/acheteurs',
      }, {
        parent: "clients",
        name: "vendeur",
        title: "VENDEURS",
        icon: "../../../assets/menuAssets/vendeurIco.svg",
        route: '/clients/vendeurs',
        last: true
      }, {
        parent: false,
        name: "inventaire",
        title: 'INVENTAIRE',
        icon: "../../../assets/menuAssets/inventaireIco.svg",
        route: '/',
        active: false,
      }, {
        parent: "inventaire",
        name: "enCours",
        title: "EN COURS",
        icon: "../../../assets/menuAssets/support.svg",
        route: '/',
      }, {
        parent: "inventaire",
        name: "enAttente",
        title: "EN ATTENTE",
        icon: "../../../assets/menuAssets/enAttenteIco.svg",
        route: '/',
      }, {
        parent: "inventaire",
        name: "archives",
        title: "ARCHIVES",
        icon: "../../../assets/menuAssets/archiveIco.svg",
        route: '/',
        last: true
      }, {
        parent: false,
        name: "encheres",
        title: "ENCHERES",
        icon: "../../../assets/menuAssets/enchereIco.svg",
        route: '/',
        active: false,
      }, {
        parent: "encheres",
        name: "enCours",
        title: "EN COURS",
        icon: "../../../assets/menuAssets/support.svg",
        route: '/',
      }, {
        parent: "encheres",
        name: "prochaines",
        title: "PROCHAINES",
        icon: "../../../assets/menuAssets/enAttenteIco.svg",
        route: '/',
      }, {
        parent: "encheres",
        name: "archives",
        title: "ARCHIVES",
        icon: "../../../assets/menuAssets/archiveIco.svg",
        route: '/',
        last: true
      }, {
        parent: false,
        name: "produits",
        title: "PRODUITS",
        icon: "../../../assets/menuAssets/produitsIco.svg",
        route: '/',
        active: false,
      }, {
        parent: "produits",
        name: "vendus",
        title: "VENDUS",
        icon: "../../../assets/menuAssets/vendusIco.svg",
        route: '/',
      }, {
        parent: "produits",
        name: "nonVendus",
        title: "NON VENDUS",
        icon: "../../../assets/menuAssets/nonVendusIco.svg",
        route: '/',
        last: false
      }
      , {
        parent: "produits",
        name: "inventories",
        title: "INVENTORIES",
        icon: "../../../assets/menuAssets/nonVendusIco.svg",
        route: '/',
        last: true
      }
    ]
  }
}

export default menu;
