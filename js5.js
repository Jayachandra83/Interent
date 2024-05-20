function btnSubmit() {
    const usernameinput = document.getElementById("username");
    const username = usernameinput.value;
    document.getElementById("displayName").innerHTML =`${username}`;
}