// src/plugins/FontAwesome.js

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChalkboard,
  faTasks,
  faBriefcase,
  faGlobe,
  faFolder,
  faNewspaper,
  faCog,
  faSignOutAlt,
  faUser,
  faUserCircle,
  faComments
} from '@fortawesome/free-solid-svg-icons'

// Add the icons you want to use to the library
library.add(
  faChalkboard,
  faUser,
  faUserCircle,
  faTasks,
  faBriefcase,
  faCog,
  faSignOutAlt,
  faGlobe,
  faFolder,
  faNewspaper,
  faComments
)

// Export the FontAwesomeIcon component
export { FontAwesomeIcon }
