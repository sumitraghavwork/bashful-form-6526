import navbar from "../components/navbar.js"
import { footer } from '../components/footer.js';

let nav = document.getElementById('navbar');
nav.innerHTML = navbar()
console.log(navbar)

let foot = document.getElementById('footer');
foot.innerHTML = footer()