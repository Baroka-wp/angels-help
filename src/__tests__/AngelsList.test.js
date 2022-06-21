import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AngelsList from '../components/Pages/AngelsList';
import Categories from '../components/Categories';

describe('AngelsList should diplay the six categories', () => {
  test('Renders AngelsList in DOM porperly', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Categories />
        </Router>
      </Provider >,
    );
    expect(screen.queryByText(/CALIEL/)).toBeNull();
  });
  it('render properly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Categories />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})