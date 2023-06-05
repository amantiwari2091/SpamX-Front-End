const form = document.getElementById("form_predict");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    
    const msg = document.getElementById("msg").value;
    
    if(msg === ""){
        alert("please enter a message!");
        return;
    }
    const formData = new FormData();

    formData.append("message", msg)

    const res = await fetch("https://spamx.azurewebsites.net/predict", {
        method: "POST",
        body: formData,
        "Content-Type": "multipart/form-data"
    })
    
    const result = JSON.parse(await res.json());
    if(result.prediction[1] === "0"){
        document.getElementById("result").innerText = "It is not a spam!"
    } else {
        document.getElementById("result").innerText = "It is spam!"
    }
})