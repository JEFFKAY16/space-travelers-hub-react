import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rocket from '../components/rockets/Rocket';

describe('Test Rocket components', () => {
  test('renders the rockets component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rocket rocket={{
            rocket_id: 'falcon9',
            rocket_name: 'Falcon 9',
            description: 'The Falcon 9 is a two-stage rocket developed by SpaceX and later partially funded by NASA. It is the second-to-last stage of the Falcon rocket family. The Falcon 9 is the second-stage booster to be developed for the Falcon Heavy, and the first to be developed for the Falcon 9.',
            flickr_images: 'https://farm1.staticflickr.com/835/29181844189_c7d9f9c8c3_o.jpg',
            reserved: false,
          }}
          />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText('Falcon 9')).toBeInTheDocument();
  });
});
