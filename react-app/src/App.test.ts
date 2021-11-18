import { render, screen } from '@testing-library/react';
import App from './App';
import { Orders } from "./components/Orders";
import React from "react";
import { Navbar } from "./components/Navbar";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders the orders component', () => {
  render(<Orders />);
  const linkElement = screen.getByText(/All Orders/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders the refresh button", () => {
  render(<order />);
  const element = screen.getByText(/Refresh/i)
  expect(element).toBeInTheDocument();
});


