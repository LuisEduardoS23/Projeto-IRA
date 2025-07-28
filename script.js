let numDisciplinas = 0;


function gerarCampos(){
    const numDisciplinas = parseInt(document.getElementById("numDisciplinas").value);
    const form = document.getElementById("dadosMaterias");
    form.innerHTML = '';
    

    for (let i = 1; i <= numDisciplinas; i++) {
        
        form.innerHTML += `
        <div class= "entradaDeDados">
        <label>Nota da Matéria ${i}: </label>
        <input type="number" name="nota${i}">
        <label>Carga Horária: </label>
        <input type = "number" name = "cargaHoraria${i}">
        </div>
        `;
    }
}

    function calcularIRA(){
        const resposta = document.getElementById("resposta")
        const form = document.getElementById("dadosMaterias");
        const inputs = form.querySelectorAll("input");

        let somatorio = 0;
        let cargaTotal = 0;


        for (let i = 0; i < inputs.length; i+= 2) {
            let nota = parseFloat(inputs[i].value);
            let cargaHoraria = parseFloat(inputs[i +1].value);

            somatorio += nota * cargaHoraria;
            cargaTotal += cargaHoraria;   
        }

        let IRA = (somatorio / cargaTotal);

        resposta.innerText = `Seu IRA aproximado é: ${IRA.toFixed(2)}`;

    }


