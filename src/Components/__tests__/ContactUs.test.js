import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should render ContactUs component", () =>{
    render(<ContactUs />);
    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
});