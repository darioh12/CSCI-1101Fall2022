window.addEventListener("load", function()
{
    // Get click element refferences.
    let clickCounterElement = document.getElementById("click-counter");
    let clickButtonElement = document.getElementById("click-button");

    //counter value.
    let counter = 0;
    
    // Click button function.
    let clickButtonFunction = function ()
    {
        // Increment counter.
        counter++;
        
        // Update counter value.
        clickCounterElement.innerHTML = counter;
    };

    // Attach button function.
    clickButtonElement.addEventListener("click", clickButtonFunction);
});