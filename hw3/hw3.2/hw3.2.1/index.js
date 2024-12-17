const data = [
    { region: 'US', model: 'A', sales: 150 },
    { region: 'US', model: 'B', sales: 120 },
    { region: 'US', model: 'C', sales: 350 },
    { region: 'EU', model: 'A', sales: 200 },
    { region: 'EU', model: 'B', sales: 100 },
    { region: 'EU', model: 'C', sales: 250 },
    { region: 'CA', model: 'A', sales: 200 },
    { region: 'CA', model: 'B', sales: 100 },
    { region: 'CA', model: 'C', sales: 230 },
    { region: 'CA', model: 'D', sales: 400 },
];

const tableBody = document.querySelector('#sales-table tbody');

// Group data by region and calculate sums
const sums = {};
data.forEach((item) => {
    if (!sums[item.region]) {
        sums[item.region] = { sum: 0, regionGroup: [] };
    }
    sums[item.region].sum += item.sales;
    sums[item.region].regionGroup.push(item);
});


// console.log(sums);

// Render table rows: sum row first, followed by model rows
Object.keys(sums).forEach((region) => {
    // Insert sum row
    const sumRow = document.createElement('tr');
    sumRow.innerHTML = `
            <td>${region}</td>
            <td>sum</td>
            <td>${sums[region].sum}</td>
        `;
    tableBody.appendChild(sumRow);

    // Insert region rows
    sums[region].regionGroup.forEach((item) => {
        const itemRow = document.createElement('tr');
        itemRow.innerHTML = `
                <td>${item.region}</td>
                <td>${item.model}</td>
                <td>${item.sales}</td>
            `;
        tableBody.appendChild(itemRow);
    });
});

