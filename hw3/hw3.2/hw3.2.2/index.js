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
const regionFilter = document.getElementById('region-filter');
const modelFilter = document.getElementById('model-filter');


// Helper: Populate filter options
function populateFilterOptions() {
    const regions = new Set();
    const models = new Set();

    data.forEach(item => {
        regions.add(item.region);
        models.add(item.model);
    });

    regions.forEach(region => {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionFilter.appendChild(option);
    });

    models.forEach(model => {
        const option = document.createElement('option');
        option.value = model;
        option.textContent = model;
        modelFilter.appendChild(option);
    });
}

// Helper: Render table based on filters
function renderTable() {
    tableBody.innerHTML = ''; // Clear table
    const selectedRegion = regionFilter.value;
    const selectedModel = modelFilter.value;

    data.forEach(item => {
        if ((selectedRegion === 'all' || item.region === selectedRegion) &&
            (selectedModel === 'all' || item.model === selectedModel)) {
            const row = document.createElement('tr');
            row.innerHTML = `
                    <td>${item.region}</td>
                    <td>${item.model}</td>
                    <td>${item.sales}</td>
                `;
            tableBody.appendChild(row);
        }
    });
}

// Initialize filters and table
populateFilterOptions();
renderTable();

// Event listeners for filters
regionFilter.addEventListener('change', renderTable);
modelFilter.addEventListener('change', renderTable);


