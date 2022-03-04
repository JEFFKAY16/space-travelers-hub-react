import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/profile/Profile';

describe('The Profile component', () => {
  test('renders the Profile component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('My Rockets')).toBeInTheDocument();
  });
});
