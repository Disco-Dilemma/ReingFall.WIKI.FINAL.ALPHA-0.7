function registerUser(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const Idea = document.getElementById("Idea").value.trim();
   

    if (!name || !email || !Idea ){
        alert("Please fill up all of these fields");
        return;
    }

    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `
        <h3> REGISTER DETAILS </h3>
        <p> <strong>Name:</strong> ${name}</p>
        <p> <strong>Email:</strong> ${email}</p>
        <p> <strong>Idea:</strong> ${Idea}</p>
       
    `;

    document.getElementById('regForm').reset();
}