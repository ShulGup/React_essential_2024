import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GetComponent from "./FetchGetComponent";

describe("GetComponent component test case", () => {
  test("renders data if fetching is successful", async () => {
    // Mock the window.fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
      ],
    });

    // Render the component
    render(<GetComponent />);

    // Wait for the component to finish rendering and data to be loaded
    await (() => {
      const linkElement = screen.getAllByRole("listitem");
      expect(linkElement).toHaveLength(1);
    });
  });
});
