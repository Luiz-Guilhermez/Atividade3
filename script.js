function gerarTicket(){
    const nomeRaw = document.getElementById("input-nome").value;
    const nomeLimpo = nomeRaw.toUpperCase().trim();

    const select = document.getElementById("nivel");
    const nivel = select.value;

    const dataAtual = new Date();
    const dataPrazo = new Date();

    if (nomeLimpo.length >= 3){

        const partes = nomeLimpo.split(" ");
        const primeiro = partes[0];
        const ultimo = partes[partes.length - 1];

        if (partes.length === 1){
        document.getElementById("out-nome").innerText = primeiro;
        } else{
        document.getElementById("out-nome").innerText = primeiro + " " + ultimo;
        }

    } else{ 
        alert("O nome deve ter pelo menos 3 caracteres!");
        document.getElementById("out-nome").innerText = "";
        return;    
    }

    if (nivel === "1"){
        dataPrazo.setDate(dataAtual.getDate() + 10);
    } else if (nivel === "2"){
        dataPrazo.setDate(dataAtual.getDate() + 7);
    } else{
        dataPrazo.setDate(dataAtual.getDate() + 2);
    }

    document.getElementById("out-data").innerText = dataAtual.toLocaleDateString('pt-BR');
    document.getElementById("out-prazo").innerText = dataPrazo.toLocaleDateString('pt-BR');

    document.getElementById("ticket-resultado").style.display = "block";
}