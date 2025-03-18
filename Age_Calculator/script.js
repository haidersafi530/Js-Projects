const birthday = prompt("Enter your age: syntax example 01.01.2000");

function calculateAge() {
    const [day, month, year] = birthday.split('.');
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    return { years, months, days };
}

const { years, months, days } = calculateAge(birthday);
document.write(`${years} years, ${months} months, ${days} days`);


