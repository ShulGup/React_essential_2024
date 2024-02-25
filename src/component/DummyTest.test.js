import { render, screen } from "@testing-library/react";
import DummyTest from "./DummyTest";
import userEvent from "@testing-library/user-event";

describe("DummyTest component test case", () => {
  test("check the content", () => {
    render(<DummyTest />);
    const buttonData = screen.getByRole("button");
    userEvent.click(buttonData);

    const linkElement = screen.queryByText("Content not displayed", {
      exact: false,
    });
    expect(linkElement).toBeNull();
  });
  test("when button !clicked", () => {
    render(<DummyTest />);
    const buttonData = screen.getByRole("button");
    userEvent.click(buttonData);

    const linkElement = screen.getByText("!clicked");
    expect(linkElement).toBeInTheDocument();
  });
});
