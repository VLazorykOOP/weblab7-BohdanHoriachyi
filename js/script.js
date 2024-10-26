window.onload = function() {
    alert("Сторінка повністю завантажена!");
};

window.onunload = function() {
    alert("Ви залишаєте сторінку. До побачення!");
};

let resizeTimeout;
window.onresize = function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        alert("Розмір вікна було змінено.");
    }, 500);
};

window.onfocus = function() {
    console.log("Вікно активоване.");
};

window.onblur = function() {
    console.log("Вікно втратило фокус.");
};

const elements = document.querySelectorAll("h1, h2, h3, b, i");

function changeStyle(element, color, fontSize) {
    element.style.color = color;
    element.style.fontSize = fontSize;
}

elements.forEach(element => {
    element.onclick = function() {
        console.log("Елемент клікнутий:", element.tagName);
        changeStyle(element, "blue", "1.2em");
    };

    element.ondblclick = function() {
        console.log("Елемент подвійно клікнутий:", element.tagName);
        changeStyle(element, "green", "1.5em");
    };

    element.onmouseover = function() {
        console.log("Курсор над елементом:", element.tagName);
        element.style.textDecoration = "underline";
    };

    element.onmouseout = function() {
        console.log("Курсор покинув елемент:", element.tagName);
        element.style.textDecoration = "none";
    };
});

function showDocumentProperties() {
    const properties = Object.keys(document);
    document.getElementById('output').value = properties.join('\n');
}

function countWords() {
    const text = document.getElementById("textInput").value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;
  
    document.getElementById("wordCount").innerText = wordCount;
  }
  
