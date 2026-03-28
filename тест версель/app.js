// Тестовая база данных
const productsData = [
    { id: 1, name: "Тестовый товар №1", price: 100 },
    { id: 2, name: "Тестовый товар №2", price: 200 }
];

const output = document.getElementById('output');

// Простая логика вывода
if (output) {
    output.innerHTML = `
        <p>Данные из скрипта загружены успешно!</p>
        <p>Товар: <b>${productsData[0].name}</b> — ${productsData[0].price} руб.</p>
    `;
    console.log("Скрипт работает на 100%");
}