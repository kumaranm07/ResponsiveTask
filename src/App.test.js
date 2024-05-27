import { render, screen } from '@testing-library/react';
import LandingPageSignIn from './LandingPageSignIn';

test('renders learn react link', () => {
  render(<LandingPageSignIn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
