import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';

describe('Home should diplay the six categories', () => {
  test('Renders Home in DOM porperly', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.queryByText(/Money/)).toBeTruthy();
    expect(screen.queryByText(/Love/)).toBeTruthy();
    expect(screen.queryByText(/Job/)).toBeTruthy();
    expect(screen.queryByText(/Health/)).toBeTruthy();
    expect(screen.queryByText(/Protection/)).toBeTruthy();
    expect(screen.queryByText(/Energy/)).toBeTruthy();
  });
  it('render properly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
