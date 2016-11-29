import React from "react";
require('./stylesheets/main.scss');

import { render } from 'react-dom';
import App from 'components/app';

render(<App />, document.getElementById('app'));
