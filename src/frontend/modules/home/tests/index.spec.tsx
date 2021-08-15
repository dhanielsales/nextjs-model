import App from '@root/fr';
import { render } from '@testing-library/react';

test("should be show 'Home' text in document", () => {
  const { getByText } = render(<App />);
  expect(getByText('Home')).toBeInTheDocument();
});
