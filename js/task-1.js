const categoriesList = document.getElementById('categories');
const items = categoriesList.querySelectorAll('.item');

// Завдання 1: Порахувати кількість категорій
console.log(`Total categories: ${items.length}`);

// Завдання 2: Вивести інформацію по кожній категорії
items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryItems = item.querySelectorAll('ul li').length;

    console.log(`Number of categories: ${categoryName}`);
    console.log(`Number of items: ${categoryItems}`);
    console.log('-------------------------');
});