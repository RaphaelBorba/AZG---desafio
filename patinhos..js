
function patinhos(n) {

    for (let i = n; i > 0; i--) {

        if (i === 1) {

            console.log(`\n ${i} patinho \n Foi passear \n Além das montanhas \n Para brincar `)
        } else {

            console.log(`\n ${i} patinhos \n Foram passear \n Além das montanhas \n Para brincar `)
        }

        if (i - 1 === 0) {

            console.log(`\n A mamãe gritou \n Quá, quá, quá, quá! \n Mas nenhum patinho \n Voltou de lá`)
        } else {

            console.log(`\n A mamãe gritou \n Quá, quá, quá, quá! \n Mas só ${i - 1} patinhos \n Voltaram de lá`)
        }

    }

    console.log(`\n A mamãe patinha \n Foi procurar \n Além das montanhas \n Na beira do mar`)
    console.log(`\n A mamãe gritou \n Quá, quá, quá, quá! \n E os ${n} patinhos \n Voltaram de lá`)
}

patinhos(4)





