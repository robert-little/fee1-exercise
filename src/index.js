const imageMap = {
    dog: 'assets/browser-images/Dog with shades.png',
    donuts: 'assets/browser-images/Donuts.png',
    pineapple: 'assets/browser-images/Pineapple Vacation.png',
    pizza: 'assets/browser-images/Pizza and Bears.png',
    trooper: 'assets/browser-images/Storm Trooper.png'
}

const toggleDrop = () => {
    const dropdownContainer = document.getElementById('heroDropdownOptionsContainer');
    dropdownContainer.classList.toggle('hero__dropdown_options_container--active');
}

const selectDropOption = (elem) => {
    toggleDrop();
    // We know the input is the first child and the label is the second
    // Using the id of the input to access the imageMap
    document.getElementById('heroImage').setAttribute('src', imageMap[elem.children[0].id])
    document.getElementById('heroDropdownCurrent').textContent = elem.children[1].textContent;
}

const init = () => {
    const dropdown = document.getElementById('heroDropdownCurrent');
    dropdown.addEventListener('click', toggleDrop); 

    const optionsList = document.querySelectorAll('.hero__dropdown_option');
    optionsList.forEach((option) => {
        // using mouseup to avoid double clicks
        option.addEventListener('mouseup', () => {
            selectDropOption(option);
        })
    })
}

window.onload=init;