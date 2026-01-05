import { fireEvent, render, screen } from "@testing-library/react";
import Post from "..";

describe("suite de teste dos comentários", () => {
  it("deve inserir 2 comentários", () => {
    render(<Post />);
    fireEvent.change(screen.getByTestId("comentario"), {
      target: {
        value: "Primeiro comentário",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("comentario"), {
      target: {
        value: "Segundo comentário",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
