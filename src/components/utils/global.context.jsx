/* eslint-disable react-refresh/only-export-components */

import { createContext } from "react";

export const estadoInicial = {
  tema: {
    claro: {
      nav: "#16537e",
      home: "#cfe2f3",
      footer: "#3d85c6",
      font: "#cfe2f3",
    },
    oscuro: {
      nav: "#6fa8dc",
      home: "#0b5394",
      footer: "#6fa8dc",
      font: "#073763",
    },
  },
};

export const ContextGlobal = createContext(estadoInicial);
