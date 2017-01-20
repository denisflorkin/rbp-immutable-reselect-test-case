/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.Header.header',
    defaultMessage: 'Home',
  },
  links: {
    homepage: {
      id: 'app.components.Header.links.homepage',
      defaultMessage: 'Dashboard',
    },
    about: {
      id: 'app.components.Header.links.about',
      defaultMessage: 'About',
    },
  },
});
