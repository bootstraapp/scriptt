function changeDoctypeToXHTML() {
    // Create a new document fragment with the desired DOCTYPE
    const doctypeString = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">';
    const newHtmlContent = `
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>My XHTML Page</title>
                <!-- Include any additional head content here -->
            </head>
            <frameset rows="50%,50%">
                <frame src="frame1.html" />
                <frame src="frame2.html" />
            </frameset>
        </html>
    `;

    // Create a new document fragment
    const newDocFragment = document.implementation.createHTMLDocument('');
    
    // Set the DOCTYPE of the new document
    const newDoctype = newDocFragment.implementation.createDocumentType(
        'html',
        '-//W3C//DTD XHTML 1.0 Frameset//EN',
        'http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd'
    );
    newDocFragment.doctype = newDoctype;

    // Set the HTML content of the new document
    newDocFragment.documentElement.innerHTML = newHtmlContent;

    // Transfer the contents from the current document to the new document
    // You might need to transfer scripts, styles, and other content as necessary

    // Replace the current document's root element with the new document fragment
    // NOTE: This action will likely reload the entire page and may cause unexpected behavior.
    document.open();
    document.write(doctypeString + newHtmlContent);
    document.close();
}

// Call the function to change the DOCTYPE to XHTML 1.0 Frameset
changeDoctypeToXHTML();
