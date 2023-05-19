import { HalfDaySlots } from "../utils/types";

export const MOCK_ACTIVITIES = [
  "Révision module d'authentification.",
  "Dév feature recherche avancée",
  "Rédaction documentation service de messagerie",
  "Réunion team back - architecture new projet",
  "Test fonctions de traitement des paiements",
  "Conférence IA",
  "Apprentissage Swift pour iOS.",
  "Exploration lib D3.js",
  "Configuration env de développement",
  "Préparation + envoi proposition de projet",
  "Optimisation perfs",
  "Setup feat paiement",
  "Élaboration diagramme de flux process login",
  "Call planification de sprint #8",
  "Apprentissage React hooks",
  "R&D NoSQL avec MangoDB",
  "Conf env. de prod",
  "Analyse exigences client + proposition technique détaillée",
];

export const AM_SLOTS: HalfDaySlots[] = [
  [
    { start: 7, end: 10 },
    { start: 11, end: 13 },
  ],
  [
    { start: 8, end: 10 },
    { start: 10, end: 12 },
  ],
  [
    { start: 8, end: 11 },
    { start: 11, end: 12 },
  ],
  [
    { start: 7, end: 9 },
    { start: 10, end: 13 },
  ],
];

export const PM_SLOTS: HalfDaySlots[] = [
  [
    { start: 14, end: 16 },
    { start: 16, end: 18 },
  ],
  [
    { start: 14, end: 15 },
    { start: 16, end: 18 },
  ],
  [
    { start: 13, end: 15 },
    { start: 15, end: 16 },
  ],
  [
    { start: 13, end: 14 },
    { start: 14, end: 15 },
  ],
];
