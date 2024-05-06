function overrideImportantStyle() {
    // Get all div elements in the document
    let divElements = document.getElementsByTagName('div');
    
    // Convert NodeList to an array to iterate safely
    let divElementsArray = Array.from(divElements);
    
    // Iterate through each div element
    for (let i = 0; i < divElementsArray.length; i++) {
        let divElement = divElementsArray[i];
        
        // Create a new span element
        let spanElement = document.createElement('span');
        
        // Move all child nodes from the div to the new span element
        while (divElement.firstChild) {
            spanElement.appendChild(divElement.firstChild);
        }
        
        // Copy attributes from the div to the span
        for (let attr of divElement.attributes) {
            spanElement.setAttribute(attr.name, attr.value);
        }
        
        // Set the width and height properties with `!important` priority
        spanElement.style.setProperty('width', '100vw', 'important');
        spanElement.style.setProperty('height', '100vh', 'important');
        
        // Replace the div element with the span element
        divElement.parentNode.replaceChild(spanElement, divElement);
    }
}

// Call the function to override the style and replace div elements with span elements
overrideImportantStyle();
