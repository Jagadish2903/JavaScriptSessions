// ======================= Encapsulation with Methods =======================

// Definition:
// Encapsulation is not only about hiding private variables,
// but also about hiding private methods (internal logic).
// In JavaScript, private methods are declared using '#'.
// They can only be accessed inside the class, not from outside.

// Example: Browser class
class Browser {
    launchBrowser() {
        console.log("Launching Browser");
        this.#checkRam();
        this.#checkUpgrade();
        this.#checkOSCompatible();
        console.log("Launched Browser");
    }

    // Private helper methods
    #checkRam() {
        console.log("Checking RAM");
    }

    #checkOSCompatible() {
        console.log("Checking OS Compatibility");
    }

    #checkUpgrade() {
        console.log("Checking Upgrade");
    }
}

let b1 = new Browser();
b1.launchBrowser(); //Launching Browser checking Ram Checking Upgrade checking OS Compatible Launched Browser
