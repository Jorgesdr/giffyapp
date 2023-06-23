import { render, screen } from '@testing-library/react';

import Home from '../pages/Home';
import App from '../App';

test('home work as expected', () => {
 render(<App/>)
 const gifLink= screen.findBy('.Gif-link')
 expect(gifLink).toBeVisible()
});


