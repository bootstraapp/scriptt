function overrideImportantStyle() {
    // Get all div elements in the document
    let divElements = document.getElementsByTagName('div');
    
    // Convert NodeList to an array to iterate safely
    let divElementsArray = Array.from(divElements);
    
    // Iterate through each div element
    for (let i = 0; i < divElementsArray.length; i++) {
        let divElement = divElementsArray[i];
        
        // Create a shadow root for encapsulation
        let shadowRoot = divElement.attachShadow({ mode: 'closed' });
        
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
        
        // Create a style element and set the styles you want
        let style = document.createElement('style');
        style.textContent = `
            span {
                width: 100vw !important;
                height: 100vh !important;
            }
        `;
        
        // Append the style and span element to the shadow root
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(spanElement);
        
        // Remove the original div element
        divElement.remove();
    }
}

// Call the function to override the style and replace div elements with span elements
overrideImportantStyle();
