$(document).ready(function() {
    // Initialize DataTable
    const table = $('#employeeTable').DataTable({
        paging: true,
        ordering: true,
        responsive: true,
        // scrollX: true,
        autoWidth: false,
        columnDefs: [
            { responsivePriority: 1, targets: 0 }, // Employee Number
            { responsivePriority: 2, targets: 1 }, // Name
            { responsivePriority: 3, targets: -1 } // Trainings
        ],
        columns: [
            { data: 'employeeNumber' },
            { data: 'name' },
            { data: 'gender' },
            { data: 'position' },
            {
                data: 'training', // Use the existing `training` field
                render: function(data) {
                    // Format the array of training objects for display
                    return data.map(item => item.name).join(', ');
                }
            }
        ]
    });

    const employeeData = [
        { "employeeNumber": "001", "name": "Alice Johnson", "gender": "Female", "position": "Manager", "training": [{ "name": "Leadership", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }, { "name": "Communication", "from": "2024-12-15", "to": "2024-12-20", "address": "Online" }] },
        { "employeeNumber": "002", "name": "Bob Smith", "gender": "Male", "position": "Developer", "training": [{ "name": "ReactJS", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "003", "name": "Charlie Brown", "gender": "Male", "position": "Designer", "training": [{ "name": "UX Design", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "004", "name": "David Clark", "gender": "Male", "position": "Tester", "training": [{ "name": "Selenium", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "005", "name": "Eve Martinez", "gender": "Female", "position": "Analyst", "training": [{ "name": "Data Analysis", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }, { "name": "SQL", "from": "2024-12-05", "to": "2024-12-05", "address": "Online" }] },
        { "employeeNumber": "006", "name": "Fiona Lee", "gender": "Female", "position": "HR", "training": [{ "name": "Recruitment", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "007", "name": "George Hall", "gender": "Male", "position": "Support", "training": [{ "name": "Customer Support", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "008", "name": "Hannah Davis", "gender": "Female", "position": "Marketing", "training": [{ "name": "Content Marketing", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "009", "name": "Ian Bell", "gender": "Male", "position": "Engineer", "training": [{ "name": "Safety", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "010", "name": "Jane Evans", "gender": "Female", "position": "Consultant", "training": [{ "name": "Project Management", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "011", "name": "Kevin White", "gender": "Male", "position": "Technician", "training": [{ "name": "Networking", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "012", "name": "Laura Adams", "gender": "Female", "position": "Accountant", "training": [{ "name": "Taxation", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "013", "name": "Michael Scott", "gender": "Male", "position": "Sales", "training": [{ "name": "CRM", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "014", "name": "Nina Young", "gender": "Female", "position": "Secretary", "training": [{ "name": "Administration", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "015", "name": "Oscar Hill", "gender": "Male", "position": "Advisor", "training": [{ "name": "Financial Planning", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "016", "name": "Paula Knight", "gender": "Female", "position": "Coach", "training": [{ "name": "Mentoring", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "017", "name": "Quinn Moore", "gender": "Male", "position": "Trainer", "training": [{ "name": "E-Learning", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "018", "name": "Rachel Scott", "gender": "Female", "position": "Supervisor", "training": [{ "name": "Time Management", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "019", "name": "Sam Green", "gender": "Male", "position": "Consultant", "training": [{ "name": "Risk Management", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "020", "name": "Tina Brown", "gender": "Female", "position": "Executive", "training": [{ "name": "Leadership", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "021", "name": "Umar Patel", "gender": "Male", "position": "Coordinator", "training": [{ "name": "Planning", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "022", "name": "Vicky Carter", "gender": "Female", "position": "Clerk", "training": [{ "name": "Organization", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "023", "name": "William Ford", "gender": "Male", "position": "Auditor", "training": [{ "name": "Compliance", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "024", "name": "Xavier Cruz", "gender": "Male", "position": "Driver", "training": [{ "name": "Logistics", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "025", "name": "Yvonne Gray", "gender": "Female", "position": "Manager", "training": [{ "name": "Leadership", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }, { "name": "Communication", "from": "2024-12-15", "to": "2024-12-20", "address": "Online" }] },
        { "employeeNumber": "026", "name": "Zack Miller", "gender": "Male", "position": "Assistant", "training": [{ "name": "Communication", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "027", "name": "Amy Parker", "gender": "Female", "position": "Specialist", "training": [{ "name": "Analytics", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] },
        { "employeeNumber": "028", "name": "Brian Carter", "gender": "Male", "position": "Officer", "training": [{ "name": "Security", "from": "2024-12-01", "to": "2024-12-01", "address": "Online" }] }
    ];
    table.rows.add(employeeData).draw();

    const trainingTemplate = document.getElementById('trainingTemplate').content;

    // Add Training
    $('#addTrainingBtn').click(function() {
        const trainingClone = trainingTemplate.cloneNode(true);
        $('#trainingList').append(trainingClone);
    });

    // Remove Training
    $('#trainingList').on('click', '.remove-training-btn', function() {
        $(this).closest('.training-entry').remove();
    });

    // Add Employee Modal
    const addEmployeeModal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));

    $('#addEmployeeBtn').click(function() {
        $('#addEmployeeForm')[0].reset();
        $('#trainingList').empty();
        addEmployeeModal.show();
    });

    $('#addEmployeeForm').submit(function(e) {
        e.preventDefault();

        const trainings = [];
        $('#trainingList .training-entry').each(function() {
            const trainingName = $(this).find('.training-name').val();
            const dateFrom = $(this).find('.training-date-from').val();
            const dateTo = $(this).find('.training-date-to').val();
            const address = $(this).find('.training-address').val();
            trainings.push(`${trainingName} (${dateFrom} to ${dateTo}, ${address})`);
        });

        const newEmployee = {
            employeeNumber: $('#employeeNumber').val(),
            name: $('#employeeName').val(),
            gender: $('#employeeGender').val(),
            position: $('#employeePosition').val(),
            trainings: trainings.join('<br>')
        };

        table.row.add(newEmployee).draw();
        addEmployeeModal.hide();
    });
});