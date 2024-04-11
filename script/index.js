class Produto {
    constructor() {
        this.dados = 0
        this.listaProduto = []
    }

    salvar() {
         let produto = this.lerDados()
         this.validacao(produto)

         console.log(produto)
    }

    lerDados() {
        let produto = {}

        produto.nome = document.getElementById('txtproduto').value,
        produto.preco = document.getElementById('txtpreco').value
        
        return produto
       
    }

    validacao(produto) {
        let mensagem = ""
        if(produto.nome.length > 0) {
            mensagem = 'acertou'
        } else {
            mensagem = 'erro'
        }

        alert(mensagem)
    }

    cancelar() {
       
    }
}

var produto = new Produto()