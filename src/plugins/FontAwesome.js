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
  faComments
} from '@fortawesome/free-solid-svg-icons'

// Add the icons you want to use to the library
library.add(faChalkboard, faTasks, faBriefcase, faGlobe, faFolder, faNewspaper, faComments)

// Export the FontAwesomeIcon component
export { FontAwesomeIcon }
