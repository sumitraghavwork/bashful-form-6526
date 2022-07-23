import { navbar,sidebar,userDetails } from "../components/navbar.js";
import { pagelinks } from "../components/pagelinks.js";

const nav = document.getElementById('navbar');
nav.innerHTML = navbar()

const sidbr = document.getElementById('sidebar');
sidbr.innerHTML = sidebar()

const page = document.getElementById('pages_link');
page.innerHTML = pagelinks()

userDetails()