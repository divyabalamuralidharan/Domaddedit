// Get a reference to the <main> element
const mainEle = document.querySelector("main");

// Create a container div to hold form elements
const container = document.createElement("div");
mainEle.appendChild(container);

// Create a label and input for Name
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
nameLabel.style.textAlign = "center";
container.style.display = "flex"; // Apply flex display for centering
container.appendChild(nameLabel);

const nameTextbox = document.createElement("input");
nameTextbox.type = "text";
nameTextbox.placeholder = "Enter your name";
container.appendChild(nameTextbox);

container.appendChild(document.createElement("br"));

// Create a label and input for Age
const ageLabel = document.createElement("label");
ageLabel.textContent = "Age:";
container.appendChild(ageLabel);

const ageTextbox = document.createElement("input");
ageTextbox.type = "text";
ageTextbox.placeholder = "Enter your age";
container.appendChild(ageTextbox);

container.appendChild(document.createElement("br"));

// Create a label and input for Qualification
const qualificationLabel = document.createElement("label");
qualificationLabel.textContent = "Qualification:";
container.appendChild(qualificationLabel);

const qualificationTextbox = document.createElement("input");
qualificationTextbox.type = "text";
qualificationTextbox.placeholder = "Enter your qualification";
container.appendChild(qualificationTextbox);

// Get references to the table and table body
const tableele = document.querySelector("table");
const tablebody = document.querySelector("tbody");

let count = 0; // Counter for serial number

// Add event listener to the Submit button
const submitBut = document.getElementById("submitButton");
submitBut.addEventListener("click", () => {
    // Create table row and cells
    const tabrow = document.createElement('tr');
    const nameTab = document.createElement('td');
    const agetab = document.createElement('td');
    const quatab = document.createElement('td');

    // Populate table cells with input values
    nameTab.innerText = nameTextbox.value;
    agetab.innerText = ageTextbox.value;
    quatab.innerText = qualificationTextbox.value;
    count++; // Increment counter for serial number

    // Append cells to the table row and add the row to the table body
    tabrow.append(count, nameTab, agetab, quatab);
    tablebody.append(tabrow);
});

// Reset input fields function
function resetInput() {
    nameTextbox.value = '';
    ageTextbox.value = '';
    qualificationTextbox.value = '';
}
