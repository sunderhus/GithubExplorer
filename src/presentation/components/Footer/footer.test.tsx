import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Footer from ".";

const makeSut = (): void => {
  render(<Footer />);
};

describe("Footer", () => {
  it("should render redirectLink with correct url", () => {
    makeSut();

    const redirectLink = screen.getByRole("link");

    expect(redirectLink).toHaveProperty(
      "href",
      "https://www.linkedin.com/in/matheus-sunderhus/"
    );
  });

  it("should present the repository author name", () => {
    makeSut();

    const authorName = screen.getByTestId("author");

    expect(authorName.textContent).toBe("Matheus Sunderhus");
  });
});
