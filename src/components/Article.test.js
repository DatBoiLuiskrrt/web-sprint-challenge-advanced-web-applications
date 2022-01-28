import React from "react";
import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import MutationObserver from "mutationobserver-shim";

import Article from "./Article";
import { render } from "express/lib/response";

const mockArticle = {
  id: "1234",
  author: "John Cena",
  headline: "headline",
  createdOn: "01/28/22",
  summary: "lorem ipsum",
  body: "this is lorem ipsum",
};

test("renders component without errors", () => {
  render(<Article article={mockArticle} />);
});

test("renders headline, author from the article when passed in through props", () => {
  render(<Article article={mockArticle} />);
  const headline = screen.queryByTestId("headline");
  const author = screen.queryByTestId("author");

  expect(headline).toBeInTheDocument();
  expect(author).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
  render(<Article article={testArticle} />);

  const press = screen.queryByText(/Associated Press/i);

  expect(press).toBeInTheDocument();
});

test("executes handleDelete when the delete button is pressed", () => {
  const handleDelete = jest.fn();
  render(<Article article={mockArticle} handleDelete={handleDelete} />);

  const deleteButton = screen.getByTestId("deleteButton");
  userEvent.click(deleteButton);

  expect(handleDelete).toBeCalled();
});

//******************************************* */
//I'm getting a node error in which it says that it cannot read the property of 'req' of undefined.
/******************************************************* */

//Task List:
//1. Complete all above tests. Create test article data when needed.
