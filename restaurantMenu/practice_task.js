const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 
                        'Oatmeal -$21.99', 'Frittata -$15'];
const mainCourseMenu = ['Steak- $50', 'Pasta- $20', 'Burger- $30', 'Salmon- $42'];
const dessertMenu = ['Cake $12', 'Ice Cream -$9', 'Pudding- $6', 
                        'Fruit Salad- $15'];

const breakfastItems = breakfastMenu.map((item, i) =>
    `<p>Item ${i+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastItems;

let mainCourseItems = "";
mainCourseMenu.forEach((item, i) =>
     mainCourseItems += `<p>Item ${i+1}: ${item}</p>`);
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItems;

let dessertItems = "";
for(let i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;