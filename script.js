function overrideImportantStyle() {
    // Get all div elements in the document
    let divElements = document.getElementsByTagName('div');
    
    // Create an array from the NodeList to avoid modifying the collection during iteration
    let divElementsArray = Array.from(divElements);
    
    // Iterate through each div element
    for (let i = 0; i < divElementsArray.length; i++) {
        let divElement = divElementsArray[i];
        
        // Create a new span element
        let spanElement = document.createElement('hr');
        
        // Move all child nodes from the div to the new span element
        while (divElement.firstChild) {
            spanElement.appendChild(divElement.firstChild);
        }
        
        // Copy attributes from the div to the span
        for (let attr of divElement.attributes) {
            spanElement.setAttribute(attr.name, attr.value);
        }
        
        // Replace the div element with the span element
        divElement.parentNode.replaceChild(spanElement, divElement);
    }
}

// Call the function to override the style and replace div elements with span elements
overrideImportantStyle();
