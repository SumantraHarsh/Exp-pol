document.getElementById("more-info").addEventListener("click", function() {
    var extraInfo = document.getElementById("extra-info");
    if (extraInfo.style.display === "none") {
        extraInfo.style.display = "block";
        this.textContent = "Less Information";
    } else {
        extraInfo.style.display = "none";
        this.textContent = "More Information";
    }
});