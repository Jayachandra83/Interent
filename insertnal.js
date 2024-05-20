function btnSubmit() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    document.getElementById("displayName").innerHTML = `${username}`
};