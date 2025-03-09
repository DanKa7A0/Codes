// function attachEvents() {
//     const submitBtn = document.getElementById("submit");  
//     const refreshBtn = document.getElementById("refresh"); 

//     submitBtn.addEventListener("click", SendMessage);
//     refreshBtn.addEventListener("click", GetAllMessages);
// }

// async function SendMessage(e){
//     const URL_MESSENGER = "http://localhost:3030/jsonstore/messenger";
//     const authorEl = document.querySelector("#controls input[name=author]");
//     const contentEl = document.querySelector("#controls input[name=content]");

//     const author = authorEl.value;
//     const content = contentEl.value;

//     authorEl.value = "";
//     contentEl.value = "";

//     try{
//         const response = await fetch(URL_MESSENGER, {
//             method: "POST"
//             , headers: {
//                 // 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             }
//             , body: JSON.stringify({author, content})
//         });

//         // if(!response.ok){
//         //     throw new Error("Not ok");
//         // }

//         // alert("Sended");
//     }
//     catch(err){
//         alert(err);
//     }
    
//         // .then((response) => response.json())
//         // .then((result) => {
//         //     const messages = Object.values(result);
//         //     let text = "";
//         //     for (let i = 0; i < messages.length; i++) {
//         //         const message = messages[i];
//         //         text += `${message.author}: ${message.content}\n`;
//         //     }
//         //     messagesTxt.value = text;
//         // })
//         // .catch(err => alert(err));
// }
// function GetAllMessages(e){
//     const URL_MESSENGER = "http://localhost:3030/jsonstore/messenger";
//     const messagesTxt = document.getElementById("messages");
//     fetch(URL_MESSENGER)
//         .then((response) => response.json())
//         .then((result) => {
//             const messages = Object.values(result);
//             let text = "";
//             for (let i = 0; i < messages.length; i++) {
//                 const message = messages[i];
//                 text += `${message.author}: ${message.content}\n`;
//             }
//             messagesTxt.value = text;
//         })
//         .catch(err => alert(err));

// }



function attachEvents() {
    const submitBtn = document.getElementById("submit");  
    const refreshBtn = document.getElementById("refresh"); 

    submitBtn.addEventListener("click", SendMessage);
    refreshBtn.addEventListener("click", GetAllMessages);
}

async function SendMessage(e){
    const URL_MESSENGER = "http://localhost:3030/jsonstore/messenger";
    const authorEl = document.querySelector("#controls input[name=author]");
    const contentEl = document.querySelector("#controls input[name=content]");

    const author = authorEl.value.trim();
    const content = contentEl.value.trim();

    if (author === "" || content === "") {
        alert("Моля, попълнете и двете полета!");
        return;
    }

    try {
        const response = await fetch(URL_MESSENGER, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, content })
        });

        if (!response.ok) {
            throw new Error("Неуспешно изпращане!");
        }

        authorEl.value = "";
        contentEl.value = "";

        await GetAllMessages(); // Автоматично обновяване
    }
    catch (err) {
        alert(err.message);
    }
}

async function GetAllMessages() {
    const URL_MESSENGER = "http://localhost:3030/jsonstore/messenger";
    const messagesTxt = document.getElementById("messages");

    try {
        const response = await fetch(URL_MESSENGER);
        if (!response.ok) {
            throw new Error("Неуспешно зареждане на съобщенията!");
        }

        const result = await response.json();
        const messages = Object.values(result);
        messagesTxt.value = messages.map(m => `${m.author}: ${m.content}`).join("\n");
    }
    catch (err) {
        alert(err.message);
    }
}

attachEvents();