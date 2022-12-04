import Spinner from "./Spinner"
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from "react"
// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

test('spinner renders when set on', () => { 
  const {rerender} = render(<Spinner on={true} />);

  let spinner = screen.queryByText(/please wait/i)
  expect(spinner).toBeInTheDocument()
  rerender(<Spinner on={true}/>);

});
