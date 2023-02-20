import display from '../modules/displayfunction.js';
import Activity from '../modules/addingbook.js';
import navigation from '../modules/navigation.js';

import { DateTime } from '../modules/luxon.js';

const addbutton = document.querySelector('.btn');
const currentDate = document.querySelector('.date');
const now = DateTime.now();
currentDate.innerHTML = now.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY);

display();
const newAction = new Activity();
addbutton.addEventListener('click', () => {
  newAction.addbook();
});

navigation();