import {navbar} from '../components/navbar.js'
import { footer } from '../components/footer.js';

const nav = document.getElementById('navbar');
nav.innerHTML = navbar()

const foot = document.getElementById('footer');
foot.innerHTML = footer()