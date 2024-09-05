# Learn-NextJS
Mon Parcours d'Apprentissage de NextJS. Ce dépôt contient quelques exercices d'apprentissage de NextJS. Il inclut divers exemples, tutoriels, et projets personnels pour améliorer ma compréhension des concepts et des bonnes pratiques de NextJS.

# Créer notre projet NextJS
    npx create-next-app@13.4

# Routage
    Sur NextJS le routage est basé sur le système de fichier

# Rendu dans Next.js

Next.js propose plusieurs méthodes pour rendre le contenu d'une page web. Ce document explique les principales techniques de rendu disponibles dans Next.js.

## Rendu côté client (CSR)

Le rendu côté client dans Next.js signifie que la page est rendue entièrement dans le navigateur à l'aide de JavaScript. C'est généralement utilisé lorsque le contenu de la page est dynamique ou très interactif.

- **Comment l'implémenter** : Utilisez `useEffect()` ou d'autres hooks React pour récupérer les données côté client.
  
- **Avantages** :
  - Idéal pour les applications interactives où le contenu change fréquemment.
  
- **Inconvénients** :
  - Problèmes de SEO, car le contenu n'est pas pré-rendu pour les moteurs de recherche.
  - Temps de chargement perçu plus lent sur des réseaux ou des appareils plus lents.

## Rendu côté serveur (SSR)

Le rendu côté serveur dans Next.js signifie qu'une page est rendue sur le serveur à chaque requête. Le HTML généré par le serveur est envoyé au client, accompagné du JavaScript nécessaire pour rendre la page interactive.

- **Comment l'implémenter** : Utilisez `getServerSideProps()` pour récupérer les données à chaque requête.
  
- **Avantages** :
  - La page est pré-rendue sur le serveur, ce qui la rend optimisée pour le SEO.
  - Le contenu est toujours à jour, car il est généré à chaque requête.
  
- **Inconvénients** :
  - Légèrement plus lent, car le serveur doit générer la page à chaque requête.
  - Charge accrue sur le serveur en fonction du nombre de requêtes.

## Génération de site statique (SSG)

La génération de site statique dans Next.js permet de pré-rendre les pages au moment de la construction (build). Le HTML est généré une seule fois pendant la phase de build, puis réutilisé à chaque requête. Cette méthode est idéale pour le contenu qui ne change pas fréquemment.

- **Comment l'implémenter** : Utilisez `getStaticProps()` pour récupérer les données au moment de la construction.
  
- **Avantages** :
  - Très rapide, car les pages sont servies sous forme de fichiers statiques.
  - Optimisé pour le SEO, car le HTML est généré au préalable.
  
- **Inconvénients** :
  - Pas adapté aux pages avec du contenu qui change souvent, sauf en combinaison avec la technique de revalidation (`getStaticProps` avec revalidation).

## Génération incrémentale (ISR)

Next.js supporte également la génération statique incrémentale (Incremental Static Regeneration), ce qui permet de régénérer les pages à la demande tout en restant statiques.

- **Comment l'implémenter** : Utilisez `getStaticProps()` avec un paramètre `revalidate` pour régénérer la page périodiquement après la première génération statique.
  
- **Avantages** :
  - Combine les avantages du SSG avec la possibilité de mettre à jour les pages sans reconstruire l'ensemble du site.
  
- **Inconvénients** :
  - Le contenu peut ne pas être immédiatement mis à jour jusqu'à la prochaine revalidation.

---

