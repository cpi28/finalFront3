import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Detail from "../routes/Detail";

describe("renderiza la pagina de detalle", () => {
  test("muestra el titulo", () => {
    render(<Detail />);
    const componente = screen.getByText("Detalles del Dentista");

    expect(componente).toBeInTheDocument();
  });
});
