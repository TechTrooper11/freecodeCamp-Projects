let myLeads = [];
const inputEl = document.querySelector('.input-el');
const btnEl = document.getElementById('input-btn');
const ulEl = document.querySelector('.ul-el');
const deleteBtn = document.querySelector('.delete-btn');
const tabBtn = document.querySelector('.tab-btn');

const leadsFromLocalstorage = JSON.parse(localStorage.getItem('myLeads'));

console.log(leadsFromLocalstorage);

if (leadsFromLocalstorage) {
    myLeads = leadsFromLocalstorage;
    render(myLeads);
}
   
// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgan/"}
// ]
tabBtn.addEventListener('click', () => {
    // Application programming interface (API)
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        saveLeads();
        render(myLeads);

        /* let activeTab = tabs[0];
        let activeTabId = activeTab.id; */
    });
});

function render(lead) {
    let listItems = '';
    for (let i = 0; i < lead.length; i++) {
        listItems +=
        `
        <li>
            <a href='${lead[i]}'>
                ${lead[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener('click', () => {
    localStorage.clear('myLeads');
    myLeads = [];
    render(myLeads);
})

function saveLeads() {
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
}

btnEl.addEventListener('click', () => {
    myLeads.push(inputEl.value); 
    inputEl.value = ' ';
    saveLeads();
    render(myLeads);
});

inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        myLeads.push(inputEl.value);

        inputEl.value = '';
        saveLeads();
        render(myLeads);
    }
});
