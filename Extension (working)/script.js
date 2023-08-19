let myLeads = []
let oldLeads = []

const inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")
let tabEl = document.getElementById("tab-btn")

// console.log(localStorage.getItem("myleads1"))
// console.log(name);

// localStorage.clear()
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsfromlocalstorage) {
    myLeads = leadsfromlocalstorage
    render(myLeads)
}

function render(Leads){
    let listItems = ""
    for(let i = 0; i < Leads.length; i++){
        console.log(myLeads[i])
        listItems += `<li>
            <a target = '_blank' href=${Leads[i]}>
                ${Leads[i]}
            </a>
        </li>`
    }

    ulEl.innerHTML = listItems
}

deletebtn.addEventListener("dblclick",function(){
    // console.log("doubleclcik");
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})




