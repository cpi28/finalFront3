import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Favs from "../routes/Favs";

describe("renderiza la pagina de favoritos", () => {
    test("muestra el titulo", () => {
      render(<Favs />);
      const componente = screen.getByText("Dentistas favoritos");
  
      expect(componente).toBeInTheDocument();
    });
  });
