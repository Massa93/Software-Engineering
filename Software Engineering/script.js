// Sample Data
const projects = [
    { id: 1, name: "Website Development", client: "Client A", status: "In Progress", amount: 5000 },
    { id: 2, name: "Mobile App", client: "Client B", status: "Completed", amount: 8000 },
    { id: 3, name: "API Integration", client: "Client C", status: "Pending", amount: 3000 }
];

const clients = [
    { id: 1, name: "Client A", email: "clienta@example.com", phone: "123-456-7890" },
    { id: 2, name: "Client B", email: "clientb@example.com", phone: "234-567-8901" },
    { id: 3, name: "Client C", email: "clientc@example.com", phone: "345-678-9012" }
];

const payments = [
    { id: 1, project: "Website Development", client: "Client A", amount: 2500, status: "Received" },
    { id: 2, project: "Mobile App", client: "Client B", amount: 8000, status: "Received" },
    { id: 3, project: "API Integration", client: "Client C", amount: 0, status: "Pending" }
];

// Functions to Populate Tables
function populateProjects() {
    const projectsTable = document.getElementById('projects-table').getElementsByTagName('tbody')[0];
    projects.forEach(project => {
        const row = projectsTable.insertRow();
        row.insertCell(0).innerText = project.id;
        row.insertCell(1).innerText = project.name;
        row.insertCell(2).innerText = project.client;
        row.insertCell(3).innerText = project.status;
        row.insertCell(4).innerText = `$${project.amount}`;
    });
}

function populateClients() {
    const clientsTable = document.getElementById('clients-table').getElementsByTagName('tbody')[0];
    clients.forEach(client => {
        const row = clientsTable.insertRow();
        row.insertCell(0).innerText = client.id;
        row.insertCell(1).innerText = client.name;
        row.insertCell(2).innerText = client.email;
        row.insertCell(3).innerText = client.phone;
    });
}

function populatePayments() {
    const paymentsTable = document.getElementById('payments-table').getElementsByTagName('tbody')[0];
    payments.forEach(payment => {
        const row = paymentsTable.insertRow();
        row.insertCell(0).innerText = payment.id;
        row.insertCell(1).innerText = payment.project;
        row.insertCell(2).innerText = payment.client;
        row.insertCell(3).innerText = `$${payment.amount}`;
        row.insertCell(4).innerText = payment.status;
    });
}

// Functions to Update Overview
function updateOverview() {
    document.getElementById('total-projects').innerText = projects.length;
    document.getElementById('total-clients').innerText = clients.length;
    const totalPayments = payments.reduce((sum, payment) => sum + payment.amount, 0);
    document.getElementById('total-payments').innerText = `$${totalPayments}`;
}

// Initialize Dashboard
function initDashboard() {
    populateProjects();
    populateClients();
    populatePayments();
    updateOverview();
}

window.onload = initDashboard;
