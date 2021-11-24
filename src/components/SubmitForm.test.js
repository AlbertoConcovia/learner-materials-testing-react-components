import { render, screen} from "@testing-library/react";
import SubmitForm from "./SubmitForm";

test("renders submit form", () => {
  render(<SubmitForm />);
  const submitFormButton = screen.getAllByRole('button').find(b => b.textContent === "Submit form"); 
  // expect((submitFormButton)).toBeInTheDocument();
});
