import { render, screen } from "@testing-library/react";
import Field from "./index";

test("Render Field", () => {
  render(<Field label="Test Label" />);

  const title = screen.getByText(/Test Label/i);
  expect(title).toBeInTheDocument();
});
