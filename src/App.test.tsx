import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    expect(getByText('Result: 0')).toBeInTheDocument();
    expect(getByPlaceholderText('Enter numbers')).toBeInTheDocument();
  });

  it('displays result for input entered numbers', async () => {
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputField = getByPlaceholderText('Enter numbers');
    const button = getByText('Calculate');

    fireEvent.change(inputField, { target: { value: '1,2' } });
    fireEvent.click(button);

    await waitFor(() => expect(getByText('Result: 3')).toBeInTheDocument());
  });

  it('handles errors', async () => {
    const alertSpy = jest.spyOn(window, 'alert');
    const { getByPlaceholderText, getByText } = render(<App />);
    const inputField = getByPlaceholderText('Enter numbers');
    const button = getByText('Calculate');
  
    fireEvent.change(inputField, { target: { value: '-1,2' } });
    fireEvent.click(button);
  
    await waitFor(() => expect(alertSpy).toHaveBeenCalledTimes(1));
    const errorMessage = alertSpy.mock.calls[0][0];
    expect(errorMessage).toContain('Negative numbers not allowed: -1');
  });
});