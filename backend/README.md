# Stage-ISCOP – Backend

## Présentation

Partie Backend du projet Stage-ISCOP, un site web institutionnel développé dans le cadre de mon stage pour un centre situé à Meknès.

Cette application assure la gestion des données et la communication avec le frontend.

## Technologies utilisées

- PHP
- Laravel
- MySQL

## Fonctionnalités

- Gestion des données du site.
- Gestion des formations.
- Gestion des informations du centre.
- Gestion de la galerie photos.
- Gestion des fonctionnalités de l'espace administrateur.

## Installation

1. Cloner le projet.
2. Installer les dépendances :

```bash
composer install
```

3. Créer le fichier `.env` à partir de `.env.example`.
4. Configurer la connexion à la base de données MySQL.
5. Générer la clé de l'application :

```bash
php artisan key:generate
```

6. Exécuter les migrations :

```bash
php artisan migrate
```

7. Lancer le serveur :

```bash
php artisan serve
```

## Type de projet

Projet réalisé dans le cadre d'un stage professionnel.
