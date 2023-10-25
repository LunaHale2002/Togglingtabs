const select = document.getElementById ("sortBy")
const radioPrice = document.querySelector ("#price")
const radioName = document.querySelector ("#name")
const radioRelevance = document.querySelector ("#relevance")

function changeSelect() {
    if (radioPrice.checked) {
        select.value = "price";
    }
    else if (radioName.checked) {
        select.value = "name";
    }
    else {
        select.value = "relevance";
    }
}

radioPrice.addEventListener("change",  changeSelect)
radioName.addEventListener("change",  changeSelect)
radioRelevance.addEventListener("change",  changeSelect)

function changeRadio() {
    document.getElementById(select.value).checked = true;
}

select.addEventListener("change", changeRadio)