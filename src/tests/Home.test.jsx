/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Home from "../routes/Home";

describe("renderiza la página de inicio", () => {
  test("muestra el titulo", () => {
    render(<Home />);

    const componente = screen.getByText("Listado de Dentistas");

    expect(componente).toBeInTheDocument();
  });
});
