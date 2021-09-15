


const inp = document.getElementById('inp');
const ascii = document.getElementById('ascii');
const binary = document.getElementById('binary');
const hexa = document.getElementById('hexa');


inp.addEventListener('input' , (e) => {
    var inp_value = inp.value;
    var ascii_text = '';
    var binary_text = '';
    var hexa_text = '';
    // console.log(inp_value);

    for(let i = 0 ; i < inp_value.length ; i ++) {
        ascii_text += inp_value.charCodeAt(i) + ' ';
        binary_text += inp_value.charCodeAt(i).toString(2).padStart(8,'0') + ' ';
        hexa_text += `${'' + inp_value.charCodeAt(i).toString(16).padStart(3,'0')} `;
    }
    ascii.innerText = `Ascii : ${ascii_text}`;
    binary.innerText = `Nhị phân : ${binary_text}`;
    hexa.innerText = `Hexa : ${hexa_text}`;
});