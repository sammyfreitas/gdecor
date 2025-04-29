function calcularTotal() {
    const precos = {
        Boleira: 80.00,
        BomboniereMedia: 30.00,
        JarradeSuco: 50.00,
        Molheira: 20.00,
        VasoCristal: 30.00,
        CapadeAlmofada01: 20.00,
        CapadeAlmofada02: 20.00,
        CapadeAlmofada03: 20.00,
    };

    let total = 0;
    let resumo = "Itens Pedidos:\n";

    // Boleira
    if (document.getElementById("BoleiraQtde").value) {
        let quantidade = parseInt(document.getElementById("BoleiraQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Boleira;
            resumo += `Boleira: ${quantidade} x R${precos.Boleira} = R${(quantidade * precos.Boleira).toFixed(2)}\n`;
        }
    }


    // BomboniereMédia
    if (document.getElementById("BomboniereMediaQtde").value) {
        let quantidade = parseInt(document.getElementById("BomboniereMediaQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Bomboniere Média;
            resumo += `BomboniereMedia: ${quantidade} x R${precos.BomboniereMedia} = R${(quantidade * precos.BomboniereMedia).toFixed(2)}\n`;
        }

    }
    // Molheira
    if (document.getElementById("MolheiraQtde").value) {
        let quantidade = parseInt(document.getElementById("MolheiraQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Molheira;
            resumo += `Molheira: ${quantidade} x R${precos.Molheira} = R${(quantidade * precos.Molheira).toFixed(2)}\n`;
        }

    }
    // capaAlmofada
    if (document.getElementById("capaAlmofada01Qtde").value) {
        let quantidade = parseInt(document.getElementById("capaAlmofada_01Qtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.capaAlmofada01;
            resumo += `capaAlmofada01: ${quantidade} x R${precos.capaAlmofada_01} = R${(quantidade * precos.capaAlmofada_01).toFixed(2)}\n`;
        }

    }
     // capacapaAlmofada02
     if (document.getElementById("capacapaAlmofada02Qtde").value) {
        let quantidade = parseInt(document.getElementById("capacapaAlmofada02Qtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.capaAlmofada01;
            resumo += `capaAlmofada02: ${quantidade} x R${precos.capacapaAlmofada02} = R${(quantidade * precos.capacapaAlmofada02).toFixed(2)}\n`;
        }
    }

}
// ccapaAlmofada03
if (document.getElementById("capacapaAlmofada03Qtde").value) {
   let quantidade = parseInt(document.getElementById("capaAlmofada_03Qtde").value) || 0;
   if (quantidade > 0) {
       total += quantidade * precos.capacapaAlmofada03;
       resumo += `capacapaAlmofada03: ${quantidade} x R${precos.capacapaAlmofada03} = R${(quantidade * precos.ccapacapaAlmofada03).toFixed(2)}\n`;
   }
}


}

    resumo += `\nTotal: R$${total.toFixed(2)}`;
    document.getElementById("resumoPedido").innerText = resumo;
}

