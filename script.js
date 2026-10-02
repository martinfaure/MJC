const ACTIVITES = {
  "en-corps": {
    id: "en-corps",
    categorie: "Spectacle",
    visuel: "En corps",
    classe: "carte__visuel--cyan",
    titre: "En corps",
    sousTitre: "Quand le sport fait danser",
    date: "Samedi 10 octobre 2026",
    heure: "20h00",
    duree: "1 h 15",
    lieu: "Salle de l'Étage",
    adresse: "12 rue du Tilleul, 69003 Lyon",
    ageMin: 6,
    ageMax: 12,
    tarif: 6,
    tarifEnfant: 4,
    places: 18,
    complet: true,
    resume:
      "Deux danseurs et un acrobate en baskets : le sport devient langage. Musique live, rires et cascades garanties.",
    description:
      "En corps raconte l'histoire de deux amis qui découvrent le sport en s'envolant, en tombant et en se relevant. Le spectacle mêle danse, acrobatie et projections, sans aucune parole : tout se comprend au mouvement.",
    infos: [
      ["Durée", "1 h 15, sans interruption"],
      ["Ouverture", "Portes ouvertes 15 minutes avant le début"],
      ["Lieu", "Salle de l'Étage, 2e étage avec ascenseur"],
      ["Langues", "Sans parole, musique originale"],
      ["Venir", "Bus 27, arrêt Tilleul, à 150 m"]
    ],
    public: [
      ["Tranche d'âge", "6 à 12 ans"],
      ["Accompagnement", "Un adulte accompagnateur gratuit par enfant"],
      ["Accessibilité", "Salle accessible aux personnes à mobilité réduite"],
      ["Sécurité", "Un secouriste est présent pendant tout le spectacle"]
    ],
    tarifs: [
      ["Plein tarif", "6 € par personne"],
      ["Tarif enfant", "4 € par enfant, jusqu'à 12 ans"],
      ["Accompagnateur", "Gratuit, un adulte par enfant"],
      ["Paiement", "Sur place, en espèces ou par carte"]
    ],
    faq: [
      {
        question: "Mon enfant a 5 ans, peut-il venir ?",
        reponse:
          "Non, cette activité est réservée aux 6-12 ans. Pour les plus jeunes, la projection des 101 Dalmatiens est ouverte dès 3 ans."
      },
      {
        question: "Faut-il prévoir une tenue de sport ?",
        reponse:
          "Non. Une tenue libre et des chaussures souples suffisent : une partie du spectacle se fait en chaussons."
      },
      {
        question: "Que se passe-t-il si j'arrive en retard ?",
        reponse:
          "La salle ferme au début du spectacle. Arrivez quinze minutes avant, l'accueil vous réserve une place au fond."
      },
      {
        question: "Puis-je annuler mon inscription ?",
        reponse:
          "Oui, jusqu'à 48 heures avant le spectacle : le remboursement se fait sur place, à l'accueil."
      }
    ]
  },
  dalmatiens: {
    id: "dalmatiens",
    categorie: "Cinéma",
    visuel: "Les 101 Dalmatiens",
    classe: "carte__visuel--ambre",
    titre: "Les 101 dalmatiens",
    sousTitre: "Projection",
    date: "Samedi 24 octobre 2026",
    heure: "14h30",
    duree: "1 h 35",
    lieu: "Salle Barbara",
    adresse: "12 rue du Tilleul, 69003 Lyon",
    ageMin: 3,
    ageMax: 99,
    tarif: 5,
    tarifEnfant: 4,
    places: 60,
    complet: false,
    resume:
      "Le dessin animé de 1961 revient en version numérique restaurée, pour un après-midi en famille.",
    description:
      "Cinq chiots, cent Dalmatiens et un manoir beaucoup trop grand : la copie restaurée du dessin animé de Walt Disney, présentée en numérique.",
    infos: [
      ["Durée", "1 h 35, sans pause"],
      ["Début", "14 h 30 précises"],
      ["Format", "Numérique 2D, son Dolby"],
      ["Salle", "60 places, accessible aux personnes à mobilité réduite"]
    ],
    public: [
      ["Tranche d'âge", "Dès 3 ans"],
      ["Langues", "Version française sous-titrée"],
      ["Confort", "Coussins de plain-pied pour les petits"],
      ["Accessibilité", "Boucle magnétique disponible sur demande"]
    ],
    tarifs: [
      ["Plein tarif", "5 € par personne"],
      ["Tarif enfant", "4 € par enfant"],
      ["Accompagnateur", "Un adulte gratuit par famille"],
      ["Paiement", "Sur place, en espèces ou par carte"]
    ],
    faq: [
      {
        question: "Un jeune enfant peut-il venir ?",
        reponse: "Oui, la projection est ouverte dès 3 ans."
      },
      {
        question: "Le film est-il sous-titré ?",
        reponse: "Oui, la version française est sous-titrée."
      }
    ]
  },
  "geant-de-fer": {
    id: "geant-de-fer",
    categorie: "Cinéma",
    visuel: "Le géant de fer",
    classe: "carte__visuel--violet",
    titre: "Le géant de fer",
    sousTitre: "Projection",
    date: "Samedi 24 octobre 2026",
    heure: "18h00",
    duree: "1 h 40",
    lieu: "Salle Barbara",
    adresse: "12 rue du Tilleul, 69003 Lyon",
    ageMin: 6,
    ageMax: 99,
    tarif: 6,
    tarifEnfant: 4,
    places: 60,
    complet: false,
    resume:
      "Un robot géant se réveille dans une campagne anglaise et découvre l'amitié. Film d'animation, présenté en numérique.",
    description:
      "Dans une campagne anglaise, un géant de fer conservé dans un musée s'échappe et croise un jeune garçon. Film d'animation de 1999, version numérique.",
    infos: [
      ["Durée", "1 h 40, sans pause"],
      ["Début", "18 h 00 précises"],
      ["Format", "Numérique, son Dolby"],
      ["Salle", "60 places, accessible aux personnes à mobilité réduite"]
    ],
    public: [
      ["Tranche d'âge", "Dès 6 ans"],
      ["Langues", "Version française sous-titrée"],
      ["Durée de concentration", "1 h 40, prévoyez un goûter avant"],
      ["Accessibilité", "Boucle magnétique disponible sur demande"]
    ],
    tarifs: [
      ["Plein tarif", "6 € par personne"],
      ["Tarif enfant", "4 € par enfant"],
      ["Accompagnateur", "Un adulte gratuit par famille"],
      ["Paiement", "Sur place, en espèces ou par carte"]
    ],
    faq: [
      {
        question: "Le film fait-il peur ?",
        reponse:
          "Quelques situations sont tendues, mais il n’y a ni violence ni scène inquiétante pour les plus jeunes."
      },
      {
        question: "Peut-on rester pendant toute la séance ?",
        reponse:
          "Oui, l’accès à la salle se fait avant le début du film. Une sortie est possible à la pause."
      }
    ]
  },
  sorcieres: {
    id: "sorcieres",
    categorie: "Spectacle",
    visuel: "Des sorcières comme les autres",
    classe: "carte__visuel--vert",
    titre: "Des sorcières comme les autres",
    sousTitre: "Spectacle jeune public",
    date: "Samedi 7 novembre 2026",
    heure: "15h00",
    duree: "50 min",
    lieu: "Salle Barbara",
    adresse: "12 rue du Tilleul, 69003 Lyon",
    ageMin: 4,
    ageMax: 10,
    tarif: 5,
    tarifEnfant: 4,
    places: 50,
    complet: false,
    resume:
      "Trois sorcières un peu étourdies, un chat et une potion qui déborde : un spectacle comique pour les plus jeunes.",
    description:
      "Un conte musical sur la fabrication d'une sorcière : des chansons, des costumes colorés et un chat qui fait diversion.",
    infos: [
      ["Durée", "50 minutes, sans pause"],
      ["Ouverture", "Portes ouvertes 15 minutes avant"],
      ["Lieu", "Salle Barbara, rez-de-chaussée"],
      ["Recommandation", "Prévoir un goûter avant le spectacle"]
    ],
    public: [
      ["Tranche d'âge", "4 à 10 ans"],
      ["Accompagnement", "Un adulte accompagnateur gratuit par enfant"],
      ["Accessibilité", "Salle accessible aux personnes à mobilité réduite"],
      ["Bruit", "Spectacle sonore, avec des chansons"]
    ],
    tarifs: [
      ["Plein tarif", "5 € par personne"],
      ["Tarif enfant", "4 € par enfant"],
      ["Accompagnateur", "Gratuit, un adulte par enfant"],
      ["Paiement", "Sur place, en espèces ou par carte"]
    ],
    faq: [
      {
        question: "Mon enfant a 3 ans, peut-il venir ?",
        reponse: "Il peut venir accompagné, mais le spectacle est conçu à partir de 4 ans."
      },
      {
        question: "Y a-t-il du bruit ?",
        reponse: "Le spectacle est sonore, avec des chansons, mais il n’y a ni violence ni moment qui fait peur."
      }
    ]
  },
  viok: {
    id: "viok",
    categorie: "Rencontre",
    visuel: "La viok",
    classe: "carte__visuel--cyan",
    titre: "La viok",
    sousTitre: "Se retranscrire en occitan",
    date: "Samedi 17 octobre 2026",
    heure: "20h00",
    duree: "2 h",
    lieu: "Salle Barbara",
    adresse: "12 rue du Tilleul, 69003 Lyon",
    ageMin: 16,
    ageMax: 99,
    tarif: 8,
    tarifEnfant: 8,
    places: 30,
    complet: false,
    resume:
      "Une soirée d'écriture en occitan, animée par deux habitantes du quartier autour de textes du quotidien.",
    description:
      "Une soirée pour écrire en occitan : les participantes choisissent une phrase du quotidien et la retranscrivent, avec l'aide de deux locutrices.",
    infos: [
      ["Durée", "2 h, avec une pause"],
      ["Ouverture", "Portes ouvertes 20 minutes avant"],
      ["Lieu", "Salle Barbara, rez-de-chaussée"],
      ["Matériel", "Papier et crayon fournis, apportez votre téléphone"]
    ],
    public: [
      ["Tranche d'âge", "Dès 16 ans"],
      ["Niveau", "Débutant accepté, aucun prérequis"],
      ["Accessibilité", "Salle accessible aux personnes à mobilité réduite"],
      ["Langue", "La soirée se déroule en occitan, traduite en français"]
    ],
    tarifs: [
      ["Plein tarif", "8 € par personne"],
      ["Tarif réduit", "5 € sur présentation d'un justificatif"],
      ["Paiement", "Sur place, en espèces ou par carte"]
    ],
    faq: [
      {
        question: "Faut-il parler occitan ?",
        reponse: "Non, la soirée est pensée pour les débutants : chaque phrase est traduite et commentée."
      },
      {
        question: "Y a-t-il un age minimum ?",
        reponse: "Oui, cette rencontre est réservée aux personnes âgées de 16 ans ou plus."
      }
    ]
  }
};

const ICONES = {
  calendrier:
    '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  horloge:
    '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  lieu:
    '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  public:
    '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 5.5a3.2 3.2 0 0 1 0 6M18.5 20a6.6 6.6 0 0 0-2.2-4.8"/></svg>'
};

const AGE_PAR_DEFAUT = { min: 4, max: 13 };
const CLE_INSCRIPTION = "mjc-inscription";

function el(selecteur, racine) {
  return (racine || document).querySelector(selecteur);
}

function tous(selecteur, racine) {
  return Array.prototype.slice.call((racine || document).querySelectorAll(selecteur));
}

function sansAccents(texte) {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function activationInitiale() {
  const parametres = new URLSearchParams(window.location.search);
  return parametres.get("activite") || "en-corps";
}

function activiteIdValide(id) {
  return Object.prototype.hasOwnProperty.call(ACTIVITES, id) ? id : "en-corps";
}

function fiche(id) {
  return ACTIVITES[activiteIdValide(id)];
}

function chaineAge(fichee) {
  return fichee.ageMax >= 99 ? "Dès " + fichee.ageMin + " ans" : fichee.ageMin + " à " + fichee.ageMax + " ans";
}

function monterMenu() {
  const bouton = el("[data-bouton-menu]");
  const nav = el("[data-nav]");
  if (!bouton || !nav) return;

  nav.dataset.ouvert = "false";
  bouton.setAttribute("aria-expanded", "false");

  bouton.addEventListener("click", function () {
    const ouvert = nav.dataset.ouvert === "true";
    nav.dataset.ouvert = ouvert ? "false" : "true";
    bouton.setAttribute("aria-expanded", ouvert ? "false" : "true");
  });

  tous("a", nav).forEach(function (lien) {
    lien.addEventListener("click", function () {
      nav.dataset.ouvert = "false";
      bouton.setAttribute("aria-expanded", "false");
    });
  });
}

function monterOnglets() {
  tous("[data-onglets]").forEach(function (bloc) {
    const onglets = tous('[role="tab"]', bloc);
    const panneaux = tous('[role="tabpanel"]', bloc);
    if (!onglets.length) return;

    function activer(index) {
      onglets.forEach(function (onglet, position) {
        const actif = position === index;
        onglet.setAttribute("aria-selected", actif ? "true" : "false");
        onglet.setAttribute("tabindex", actif ? "0" : "-1");
      });
      panneaux.forEach(function (panneau, position) {
        panneau.hidden = position !== index;
      });
    }

    function focusIndex(index) {
      const total = onglets.length;
      const suivant = (index + total) % total;
      onglets[suivant].focus();
      activer(suivant);
    }

    onglets.forEach(function (onglet, index) {
      onglet.addEventListener("click", function () {
        activer(index);
      });
      onglet.addEventListener("keydown", function (evenement) {
        const touches = {
          ArrowRight: index + 1,
          ArrowLeft: index - 1,
          Home: 0,
          End: onglets.length - 1
        };
        if (!Object.prototype.hasOwnProperty.call(touches, evenement.key)) return;
        evenement.preventDefault();
        focusIndex(touches[evenement.key]);
      });
    });

    const dejaActif = onglets.findIndex(function (onglet) {
      return onglet.getAttribute("aria-selected") === "true";
    });
    activer(dejaActif === -1 ? 0 : dejaActif);
  });
}

function monterAccordeon() {
  tous("[data-accordeon]").forEach(function (bloc) {
    tous("[data-accordeon-bouton]", bloc).forEach(function (bouton) {
      const reponse = document.getElementById(bouton.getAttribute("aria-controls"));
      if (!reponse) return;
      reponse.hidden = bouton.getAttribute("aria-expanded") !== "true";
      bouton.addEventListener("click", function () {
        const ouvert = bouton.getAttribute("aria-expanded") === "true";
        bouton.setAttribute("aria-expanded", ouvert ? "false" : "true");
        reponse.hidden = ouvert;
      });
    });
  });
}

function focusablesDans(racine) {
  return tous(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    racine
  );
}

function monterModale() {
  const modale = el("[data-modale]");
  if (!modale) return;
  const boite = el("[data-modale-boite]", modale);
  let dernierFocus = null;

  function ouvrir() {
    dernierFocus = document.activeElement;
    modale.hidden = false;
    document.body.style.overflow = "hidden";
    const premier = focusablesDans(boite)[0];
    (premier || boite).focus();
  }

  function fermer() {
    modale.hidden = true;
    document.body.style.overflow = "";
    if (dernierFocus && typeof dernierFocus.focus === "function") dernierFocus.focus();
  }

  tous("[data-ouvrir-modale]").forEach(function (declencheur) {
    declencheur.addEventListener("click", ouvrir);
  });

  tous("[data-fermer-modale]", modale).forEach(function (element) {
    element.addEventListener("click", fermer);
  });

  modale.addEventListener("keydown", function (evenement) {
    if (evenement.key === "Escape") {
      evenement.preventDefault();
      fermer();
      return;
    }
    if (evenement.key !== "Tab") return;
    const focusables = focusablesDans(boite);
    if (!focusables.length) {
      evenement.preventDefault();
      return;
    }
    const premier = focusables[0];
    const dernier = focusables[focusables.length - 1];
    if (evenement.shiftKey && document.activeElement === premier) {
      evenement.preventDefault();
      dernier.focus();
    } else if (!evenement.shiftKey && document.activeElement === dernier) {
      evenement.preventDefault();
      premier.focus();
    }
  });
}

function monterFiltres() {
  const zone = el("[data-filtres]");
  if (!zone) return;

  const recherche = el("#recherche", zone);
  const type = el("#type-activite", zone);
  const age = el("#age-enfant", zone);
  const reinit = el("[data-reinit]");
  const compte = el("#resultat-compte");
  const vide = el("#aucun-resultat");
  const cartes = tous("[data-carte-activite]");

  function appliquer() {
    const rechercheTexte = sansAccents(recherche.value.trim());
    const typeChoisi = type.value;
    const ageChoisi = age.value;
    let visibles = 0;

    cartes.forEach(function (carte) {
      const texte = sansAccents(
        carte.dataset.titre +
          " " +
          carte.dataset.sousTitre +
          " " +
          carte.dataset.resume +
          " " +
          carte.dataset.categorie
      );
      const ageMin = Number(carte.dataset.ageMin);
      const ageMax = Number(carte.dataset.ageMax);
      let visible = true;

      if (rechercheTexte && texte.indexOf(rechercheTexte) === -1) visible = false;
      if (typeChoisi !== "toutes" && carte.dataset.categorie !== typeChoisi) visible = false;
      if (ageChoisi !== "tous" && (ageMin > ageChoisi || ageMax < ageChoisi)) visible = false;

      carte.hidden = !visible;
      if (visible) visibles += 1;
    });

    if (visibles === 0) {
      compte.textContent = "Aucune activité ne correspond à votre recherche.";
    } else if (visibles === 1) {
      compte.textContent = "1 activité affichée sur " + cartes.length + ".";
    } else {
      compte.textContent = visibles + " activités affichées sur " + cartes.length + ".";
    }

    vide.hidden = visibles !== 0;
  }

  [recherche, type, age].forEach(function (champ) {
    champ.addEventListener("input", appliquer);
    champ.addEventListener("change", appliquer);
  });

  reinit.addEventListener("click", function () {
    recherche.value = "";
    type.value = "toutes";
    age.value = "tous";
    appliquer();
    recherche.focus();
  });

  appliquer();
}

function listeDefinition(paires) {
  return (
    "<dl>" +
    paires
      .map(function (paire) {
        return "<dt>" + paire[0] + "</dt><dd>" + paire[1] + "</dd>";
      })
      .join("") +
    "</dl>"
  );
}

function valeursDe(fichee) {
  return {
    titre: fichee.titre,
    sousTitre: fichee.sousTitre,
    categorie: fichee.categorie,
    date: fichee.date,
    heure: fichee.heure,
    duree: fichee.duree,
    lieu: fichee.lieu,
    adresse: fichee.adresse,
    age: chaineAge(fichee),
    tarif: fichee.tarif + " €",
    tarifEnfant: fichee.tarifEnfant + " € par enfant",
    places: fichee.places + " places restantes",
    resume: fichee.resume,
    description: fichee.description
  };
}

function appliquerChamps(racine, fichee) {
  const valeurs = valeursDe(fichee);
  tous("[data-champ]", racine).forEach(function (element) {
    const cle = element.dataset.champ;
    if (Object.prototype.hasOwnProperty.call(valeurs, cle)) element.textContent = valeurs[cle];
  });
  return valeurs;
}

function rendreFiche() {
  const racine = el("[data-fiche]");
  if (!racine) return;

  const fichee = fiche(activationInitiale());
  appliquerChamps(racine, fichee);

  const panneaux = {
    "panel-infos": listeDefinition(fichee.infos),
    "panel-public": listeDefinition(fichee.public),
    "panel-tarifs": listeDefinition(fichee.tarifs)
  };
  Object.keys(panneaux).forEach(function (identifiant) {
    const panneau = document.getElementById(identifiant);
    if (panneau) panneau.innerHTML = panneaux[identifiant];
  });

  const conteneurFaq = el("[data-faq-liste]");
  if (conteneurFaq) {
    conteneurFaq.innerHTML = fichee.faq
      .map(function (item, index) {
        const boutonId = "faq-bouton-" + fichee.id + "-" + index;
        const panneauId = "faq-panneau-" + fichee.id + "-" + index;
        return (
          '<div class="faq__item">' +
          '<h3 class="faq__question">' +
          '<button type="button" class="faq__bouton" id="' +
          boutonId +
          '" data-accordeon-bouton aria-expanded="false" aria-controls="' +
          panneauId +
          '">' +
          item.question +
          '<span class="faq__icone" aria-hidden="true"></span>' +
          "</button></h3>" +
          '<div class="faq__reponse" id="' +
          panneauId +
          '" role="region" aria-labelledby="' +
          boutonId +
          '" hidden>' +
          item.reponse +
          "</div></div>"
        );
      })
      .join("");
    monterAccordeon();
  }

  const lienInscription = el("[data-lien-inscription]");
  if (lienInscription) lienInscription.href = "inscription.html?activite=" + fichee.id;

  const lienFiche = el("[data-lien-fiche]");
  if (lienFiche) lienFiche.href = "activite.html?activite=" + fichee.id;

  const mentionComplet = el("[data-mention-complete]");
  if (mentionComplet) mentionComplet.hidden = Boolean(fichee.complet);

  if (el('h1[data-champ="titre"]', racine)) {
    document.title = fichee.titre + " · " + fichee.sousTitre + " | MJC Tilleul";
  }
}

function monterFormulaire() {
  const formulaire = el("[data-formulaire]");
  if (!formulaire) return;

  const selectActivite = el("#activite", formulaire);
  const aideAge = el("#aide-age");

  function bornesAge() {
    if (!selectActivite) return AGE_PAR_DEFAUT;
    const courante = fiche(selectActivite.value);
    return { min: courante.ageMin, max: courante.ageMax };
  }

  function majAideAge() {
    if (!aideAge || !selectActivite) return;
    const bornes = bornesAge();
    aideAge.textContent =
      "Pour cette activité, l’âge doit être compris entre " + bornes.min + " et " + bornes.max + " ans.";
  }

  function majResumeActivite() {
    if (!selectActivite) return;
    const racine = el("[data-fiche]");
    if (!racine) return;
    appliquerChamps(racine, fiche(selectActivite.value));
    const lienFiche = el("[data-lien-fiche]");
    if (lienFiche) lienFiche.href = "activite.html?activite=" + selectActivite.value;
  }

  if (selectActivite) {
    selectActivite.value = activiteIdValide(activationInitiale());
    selectActivite.addEventListener("change", function () {
      majAideAge();
      majResumeActivite();
    });
    majAideAge();
  }

  const resume = el("#resume-erreurs", formulaire);
  const listeErreurs = el("#liste-erreurs", formulaire);

  function champs() {
    return tous("[data-valider]", formulaire);
  }

  function messageErreur(champ) {
    const valeur = (champ.value || "").trim();

    if (champ.type === "checkbox") {
      return champ.checked ? "" : "Cochez la case pour valider l’inscription simulée.";
    }
    if (!valeur) {
      return champ.hasAttribute("data-optional")
        ? ""
        : "Le champ « " + champ.dataset.nom + " » est obligatoire.";
    }
    if (champ.id === "prenom-enfant") {
      if (valeur.length < 2) {
        return "Indiquez au moins deux caractères pour le prénom.";
      }
      if (!/^[A-Za-zÀ-ÖØ-öø-ÿ’' -]{2,}$/.test(valeur)) {
        return "Le prénom ne peut pas contenir de chiffres. Exemple : Maëlys.";
      }
    }
    if (champ.id === "age-enfant") {
      if (!/^\d{1,2}$/.test(valeur)) {
        return "Saisissez l’âge avec un seul nombre, par exemple 8, sans lettre ni virgule.";
      }
      const bornes = bornesAge();
      const nombre = Number(valeur);
      if (nombre < bornes.min || nombre > bornes.max) {
        return (
          "L’âge doit être compris entre " +
          bornes.min +
          " et " +
          bornes.max +
          " ans pour cette activité. Vous avez saisi " +
          nombre +
          " ans."
        );
      }
    }
    if (champ.id === "email-parent") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valeur)) {
        return "L’adresse e-mail est incomplète. Format attendu : prenom.nom@exemple.fr";
      }
    }
    if (champ.id === "telephone-parent") {
      if (!/^[0-9][0-9 ]{9,13}$/.test(valeur)) {
        return "Le numéro doit contenir dix chiffres, par exemple 06 12 34 56 78.";
      }
    }
    return "";
  }

  function afficherErreur(champ, message) {
    const messageErreurDom = document.getElementById(champ.id + "-erreur");
    const aide = document.getElementById(champ.id + "-aide");
    if (messageErreurDom) {
      messageErreurDom.textContent = message;
      messageErreurDom.hidden = !message;
    }
    if (aide) aide.hidden = Boolean(message);
    if (message) {
      champ.setAttribute("aria-invalid", "true");
    } else {
      champ.removeAttribute("aria-invalid");
    }
  }

  function validerChamp(champ) {
    const message = messageErreur(champ);
    afficherErreur(champ, message);
    return message;
  }

  champs().forEach(function (champ) {
    champ.addEventListener("blur", function () {
      if (champ.getAttribute("aria-invalid") === "true" || (champ.value || "").trim()) {
        validerChamp(champ);
      }
    });
    champ.addEventListener("input", function () {
      if (champ.getAttribute("aria-invalid") === "true") validerChamp(champ);
    });
  });

  formulaire.addEventListener("submit", function (evenement) {
    evenement.preventDefault();
    const erreurs = [];

    champs().forEach(function (champ) {
      const message = validerChamp(champ);
      if (message) erreurs.push({ champ: champ, message: message });
    });

    if (erreurs.length) {
      listeErreurs.innerHTML = "";
      erreurs.forEach(function (item) {
        const li = document.createElement("li");
        const lien = document.createElement("a");
        lien.href = "#" + item.champ.id;
        lien.textContent = item.message;
        lien.addEventListener("click", function (evenementLien) {
          evenementLien.preventDefault();
          item.champ.focus();
        });
        li.appendChild(lien);
        listeErreurs.appendChild(li);
      });
      resume.querySelector("h2").textContent =
        erreurs.length === 1
          ? "Le formulaire contient une erreur à corriger"
          : "Le formulaire contient " + erreurs.length + " erreurs à corriger";
      resume.hidden = false;
      resume.focus();
      return;
    }

    resume.hidden = true;
    const choisie = selectActivite ? fiche(selectActivite.value) : fiche(activationInitiale());
    const donnees = {
      activite: choisie.id,
      titre: choisie.titre,
      sousTitre: choisie.sousTitre,
      date: choisie.date,
      heure: choisie.heure,
      duree: choisie.duree,
      lieu: choisie.lieu,
      adresse: choisie.adresse,
      ageMin: choisie.ageMin,
      ageMax: choisie.ageMax,
      tarif: choisie.tarifEnfant,
      prenom: el("#prenom-enfant").value.trim(),
      age: el("#age-enfant").value.trim(),
      email: el("#email-parent").value.trim(),
      telephone: el("#telephone-parent").value.trim(),
      situation: el("#situation").value,
      note: el("#message").value.trim()
    };

    try {
      window.sessionStorage.setItem(CLE_INSCRIPTION, JSON.stringify(donnees));
    } catch (erreur) {
      listeErreurs.innerHTML = "";
      const li = document.createElement("li");
      li.textContent =
        "Ce navigateur bloque le stockage local, donc la confirmation ne peut pas s’afficher. Autorisez les données du site, puis renvoyez le formulaire.";
      listeErreurs.appendChild(li);
      resume.querySelector("h2").textContent = "L’inscription n’a pas pu être enregistrée";
      resume.hidden = false;
      resume.focus();
      return;
    }
    window.location.href = "confirmation.html";
  });
}

function rendreConfirmation() {
  const racine = el("[data-confirmation]");
  if (!racine) return;

  let donnees = null;
  try {
    const brut = window.sessionStorage.getItem(CLE_INSCRIPTION);
    donnees = brut ? JSON.parse(brut) : null;
  } catch (erreur) {
    donnees = null;
  }

  if (!donnees) {
    el("[data-confirmation-ok]").hidden = true;
    el("[data-confirmation-vide]").hidden = false;
    return;
  }

  const valeurs = {
    titre: donnees.titre,
    sousTitre: donnees.sousTitre,
    date: donnees.date,
    heure: donnees.heure,
    duree: donnees.duree,
    lieu: donnees.lieu,
    adresse: donnees.adresse,
    tarif: donnees.tarif + " €",
    prenom: donnees.prenom,
    age: donnees.age + " ans",
    email: donnees.email,
    telephone: donnees.telephone || "Non renseigné",
    situation: donnees.situation || "Non précisée",
    note: donnees.note || "Aucun message"
  };

  tous("[data-recap]", racine).forEach(function (element) {
    const cle = element.dataset.recap;
    if (Object.prototype.hasOwnProperty.call(valeurs, cle)) element.textContent = valeurs[cle];
  });

  el("[data-email-confirmation]").textContent = donnees.email;
  el("[data-modifier]").href = "inscription.html?activite=" + donnees.activite;

  const imprimer = el("[data-imprimer]");
  if (imprimer) {
    imprimer.addEventListener("click", function () {
      window.print();
    });
  }

  const nouvelle = el("[data-nouvelle]");
  if (nouvelle) {
    nouvelle.addEventListener("click", function () {
      try {
        window.sessionStorage.removeItem(CLE_INSCRIPTION);
      } catch (erreur) {
        return;
      }
    });
  }
}

function avancer() {
  document.documentElement.classList.remove("no-js");
  tous("[data-icone]").forEach(function (element) {
    element.innerHTML = ICONES[element.dataset.icone] || "";
  });
  monterMenu();
  monterOnglets();
  monterAccordeon();
  monterModale();
  monterFiltres();
  rendreFiche();
  monterFormulaire();
  rendreConfirmation();
  tous("[data-annee]").forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", avancer);
} else {
  avancer();
}