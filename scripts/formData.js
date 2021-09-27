const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = [];

const provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon'];

const years = [];

const monthSelect = document.getElementById('month');
const daySelect = document.getElementById('day');
const provinceSelect = document.getElementById('province');
const yearsSelect = document.getElementById('year');

// add months to the dom

months.forEach(addMonth)


function addMonth(month){
    const option = document.createElement('option');
    option.innerHTML = month;
    monthSelect.appendChild(option);
}

// create days of the month

createDays = () => {
    for(let i = 1; i <= 31; i++){
        days.push(i);
    }
}

createDays();

// add days of month to the dom

days.forEach(addDay);

function addDay(day){
    const option = document.createElement('option');
    option.innerHTML = day;
    daySelect.appendChild(option);
}

// add provinces to the dom

provinces.forEach(addProvince);

function addProvince(province){
    const option = document.createElement('option');
    option.innerHTML = province;
    provinceSelect.appendChild(option);
}

// create years

createYears = () => {
    for(let i = 1950; i <= 2021; i++){
        years.push(i);
    }
}

createYears();

// add years to dom

years.forEach(addYear);

function addYear(year){
    const option = document.createElement('option');
    option.innerHTML = year;
    yearsSelect.appendChild(option);
}