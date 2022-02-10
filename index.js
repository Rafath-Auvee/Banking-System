document.getElementById("submit").addEventListener("click", function() {
    const userName = document.getElementById("My-Name").value;
    const password = document.getElementById("My-Password").value;
    const email = document.getElementById("My-Email").value;

    console.log(userName);
    console.log(password);
    console.log(email);

    if (userName == "Rafath")
        window.location.href = 'bank.html'
});