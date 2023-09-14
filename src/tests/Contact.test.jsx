import { render } from "@testing-library/react";
import { describe, test, expect, fireEvent } from "vitest";
import Contact from "../routes/Contact";

describe("renderiza la pagina de contacto", () => {
    test("muestra el titulo", () => {
      render(<Contact />);
      const componente = screen.getByText("Formulario de contacto");
  
      expect(componente).toBeInTheDocument();
    });

    test('se muestra un  mensaje al enviar el formulario', () => {
        render(<Contact />);
      
        const nombreInput = screen.getByPlaceholderText('Nombre');
        const emailInput = screen.getByPlaceholderText('Correo electronico');
        const submitButton = screen.getByText('Enviar');
      
        
        fireEvent.change(nombreInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      
        
        expect(nombreInput.value).toBe('John Doe');
        expect(emailInput.value).toBe('john@example.com');
      
        
        fireEvent.click(submitButton);
      
        
        expect(screen.getByText('Gracias John Doe, te contactaremos por john@example.com.')).toBeInTheDocument();
      });

      test('Muestra un mensaje de error cuando el formulario está incompleto', () => {
        render(<Contact />);
      
        const submitButton = screen.getByText('Enviar');
      
        
        fireEvent.click(submitButton);
      
        
        expect(screen.getByText('Por favor verifique su información nuevamente.')).toBeInTheDocument();
      });
  });