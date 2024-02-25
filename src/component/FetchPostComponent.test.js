import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import PostComponent from "./FetchPostComponent";
import { postData } from "./http";

jest.mock("./http", () => ({
  postData: jest.fn(),
}));

describe("PostComponent component test case", () => {
  test("renders and posts data successfully", async () => {
    const mockPostedData = {
      userId: 1,
      id: 101,
      title: "Mock Title",
      body: "Mock Body",
    };

    // Mock the postData function
    postData.mockResolvedValueOnce(mockPostedData);

    // Render the component
    render(<PostComponent />);

    // Wait for the component to finish rendering and initial data posting
    const formElement = screen.queryByTestId("form");
    expect(formElement).toBeNull();

    // Fill and submit the form
    const titleInput = screen.queryByTestId("title");
    // const descriptionTextarea = screen.getByTestId("description");

    fireEvent.change(titleInput, { target: { value: "New Title" } });
    // fireEvent.change(descriptionTextarea, { target: { value: "Mock Body" } });
    expect(titleInput.value).toBe("New Title");

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    // Wait for the component to finish posting data
    const submittedDataElement = await screen.getByText("Mock Title");
    expect(submittedDataElement).toBeInTheDocument();
  });
});
