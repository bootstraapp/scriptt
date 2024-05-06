function overrideStyles() {
    // Get all div elements in the document
    let divElements = document.getElementsByTagName('div');
    
    // Convert NodeList to an array for iteration
    let divElementsArray = Array.from(divElements);
    
    // Create a random class name
    const randomClassName = 'custom-style-' + Math.random().toString(36).substring(2, 15);
    
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Define the styles for the random class name
    styleElement.textContent = `
        .${randomClassName} {
            width: 100vw !important;
            height: 100vh !important;
        }
    `;
    
    // Append the style element to the document's head
    document.head.appendChild(styleElement);
    
    // Iterate through each div element
    divElementsArray.forEach(divElement => {
        // Create a new span element
        const spanElement = document.createElement('span');
        
        // Move all child nodes from the div to the new span element
        while (divElement.firstChild) {
            spanElement.appendChild(divElement.firstChild);
        }
        
        // Copy attributes from the div to the span
        for (let attr of divElement.attributes) {
            spanElement.setAttribute(attr.name, attr.value);
        }
        
        // Add the random class name to the span element
        spanElement.classList.add(randomClassName);
        
        // Replace the div element with the span element
        divElement.parentNode.replaceChild(spanElement, divElement);
    });
}

// Call the function to override the styles and replace div elements with span elements
overrideStyles();
