import { alertPopUp } from './alertLoad'
import '../scss/style.scss'
import './charts/charts'

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
});