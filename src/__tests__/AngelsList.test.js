import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import AngelsList from '../components/Pages/AngelsList';
import Categories from '../components/Categories';

describe('AngelsList should diplay the six categories', () => {
  test('Renders Category in DOM porperly', async () => {
    render(
      <Provider store={store}>
        <Router>
          <Categories />
        </Router>
      </Provider>,
    );
    const linkButton = screen.getByText(/Money/);
    fireEvent.click(linkButton);
    expect(screen.queryByText(/Money/)).toBeTruthy();
  });
  it('render properly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <AngelsList />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
