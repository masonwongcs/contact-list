import { render, screen } from '@testing-library/react';
import App from './App';

test('Render Home List', () => {
  render(<App />);
  const linkElement = screen.getByText(/Contacts/i);
  expect(linkElement).toBeInTheDocument();
});
