import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test("renders Praveen's name in the header", () => {
    render(<App />);
    const elements = screen.getAllByText(/Praveen Raj/i);
expect(elements.length).toBeGreaterThan(0);
});