CREATE TABLE `Clients` (
  `identifier` varchar(25) UNIQUE PRIMARY KEY,
  `denomination` varchar(25),
  `entreprise` boolean,
  `acheteur` boolean,
  `vendeur` boolean,
  `commentaire` varchar(255),
  `vip` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `Particulier` (
  `identifier` varchar(25) PRIMARY KEY,
  `titre` varchar(25),
  `email` varchar(255),
  `telephone` varchar(20),
  `nom` varchar(50),
  `prenom` varchar(50),
  `nationalite` varchar(50) NOT NULL,
  `numero_identite` varchar(255) NOT NULL
);

CREATE TABLE `Entreprise` (
  `identifier` varchar(25) PRIMARY KEY,
  `denomination` varchar(25),
  `numero_rcs` varchar(50) NOT NULL,
  `numero_tva` varchar(50) NOT NULL,
  `telephone` varchar(20),
  `email` varchar(20)
);

CREATE TABLE `Employe` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `identifier` varchar(25) NOT NULL,
  `titre` varchar(25),
  `email` varchar(255),
  `telephone` varchar(20),
  `nom` varchar(50),
  `prenom` varchar(50)
);

CREATE TABLE `Documents` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `identifier` varchar(25),
  `type` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `date_added` varchar(255) NOT NULL,
  `status`varchar(25) NOT NULL,
  `valid_until` timestamp
);

CREATE TABLE `Addresse` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `identifier` varchar(25),
  `titre` varchar(50) NOT NULL,
  `pays` varchar(255),
  `ville` varchar(255),
  `code_postal` varchar(5),
  `addresse` VARCHAR(255)
);

ALTER TABLE `Particulier` ADD FOREIGN KEY (`identifier`) REFERENCES `Clients` (`identifier`);

ALTER TABLE `Entreprise` ADD FOREIGN KEY (`identifier`) REFERENCES `Clients` (`identifier`);

ALTER TABLE `Employe` ADD FOREIGN KEY (`identifier`) REFERENCES `Entreprise` (`identifier`);

ALTER TABLE `Documents` ADD FOREIGN KEY (`identifier`) REFERENCES `Clients` (`identifier`);

ALTER TABLE `Addresse` ADD FOREIGN KEY (`identifier`) REFERENCES `Clients` (`identifier`);
