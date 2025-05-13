let btnGerar = document.querySelector("#gerar-qr")
let box = document.querySelector(".box")
let divQrCode = document.querySelector(".qr-code")

function gerarCodigoQr() {
    let campoQR = document.querySelector("#campo-qr").value

    box.innerHTML = ""

if(campoQR.trim() != "") {
    var qrcode = new QRCode(box, {
        text: campoQR,
        width: 300,
        height: 300,
    });
    divQrCode.classList.add("display-hidden") 

setTimeout(() => {

    const img = box.querySelector("img");
    const download = document.querySelector("#download");
    
    download.href = img.src;
},300);

}else {
    divQrCode.classList.remove("diplay-hidden");
    alert("Campo vazio!")
}

}
btnGerar.addEventListener("click", gerarCodigoQr)