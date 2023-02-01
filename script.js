// FIRST CODE
// document
//     .querySelectorAll('button')
//     .forEach(function(button){
//         button.addEventListener('click', function(getClass){
//             const target = getClass.target
//             const attributes = target.getAttribute('class')
//             // const img = target.firs

//             // addClass(attributes)
            
//             console.log(target, attributes);
//         })
//     })

// function addClass(attributes){
//     document.querySelectorAll('#tester')
//     .forEach(function(button){
//         button.removeAttribute('class')
//         button.setAttribute('class', attributes)
//         console.log(button);
//     })
// }



// SECOND CODE
// document
//     .querySelectorAll('button')
//     .forEach(function(button){
//         button.addEventListener('click', function(getClass){
//             const target = getClass.target
//             const attributes = target.getAttribute('class')
//             const attribute = attributes.split(' ')

//             addClass(attribute[1])
            
//             // console.log(target, attributes, attribute[1]);
//         })
//     })

// function addClass(attribute){
//     const button1 = document.getElementById('tester1')
//     button1.removeAttribute('class')
//     button1.classList.add(attribute, 'primary')
//     const button2 = document.getElementById('tester2')
//     button2.removeAttribute('class')
//     button2.classList.add(attribute, 'secondary')
//     const button3 = document.getElementById('tester3')
//     button3.removeAttribute('class')
//     button3.classList.add(attribute, 'tertiary')
    
//     // console.log(button);
// }



// THIRD CODE
document
    .querySelectorAll('button')
    .forEach(function(button){
        button.addEventListener('click', function(getElement){
            const element = getElement.target
            const button = element.outerHTML
            changeButtons(button)
        })
    })

async function changeButtons(button){    
    document.getElementById('explanations').innerText = ''

    await replace(button)

    document.querySelectorAll('#buttons')
        .forEach(el => {
        el.addEventListener('click', function(getElement){
            const element = getElement.target
            explanations(element)
        })
    })
}

function replace(button){
    if(button.includes('primary')){
        const button1 = button
        const button2 = button.replace('primary', 'secondary').replace('PRIMARY', 'SECONDARY')
        const button3 = button.replace('primary', 'tertiary').replace('PRIMARY', 'TERTIARY')
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    } else if (button.includes('secondary')){
        const button1 = button.replace('secondary', 'primary').replace('SECONDARY', 'PRIMARY')
        const button2 = button
        const button3 = button.replace('secondary', 'tertiary').replace('SECONDARY', 'TERTIARY')
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    } else if (button.includes('tertiary')){
        const button1 = button.replace('tertiary', 'primary').replace('TERTIARY', 'PRIMARY')
        const button2 = button.replace('tertiary', 'secondary').replace('TERTIARY', 'SECONDARY')
        const button3 = button
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    }
}

function explanations(element){
    const verifyClass = element.classList

    const div = document.getElementById('explanations')

    if(verifyClass.contains('tester')){
        div.innerText = 'Escolha um botão ao lado para testar.'
    } 
    else if(verifyClass.contains('default')){
        div.innerText = 'Este é um botão simples!'
    } 
    else if(verifyClass.contains('hover')){
        div.innerText = 'Este botão tem um efeito hover!'
    } 
    else if(verifyClass.contains('focus')){
        div.innerText = 'Este botão tem foco!'
    } 
    else if(verifyClass.contains('disabled')){
        div.innerText = 'Este botão está desabilitado!'
    } 
    else if(verifyClass.contains('loading')){
        div.innerText = 'Este botão está carregando!'
    } 
    else if(verifyClass.contains('movable')){
        div.innerText = 'Este botão pode ser movido!'
    }
}

