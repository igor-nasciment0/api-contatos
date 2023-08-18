import conexao from "./conexao.js";

export async function listarContatos(){
    let sql = 'select * from tb_contatos'
    let [dados] = await conexao.query(sql)

    return dados
}

export async function inserirContato(contato){
    let sql = 'insert into tb_contatos (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro) values (?, ?, ?, ?, ?)'
    let [dados] = await conexao.query(sql, [contato.nome, contato.telefone, contato.email, contato.favorito, contato.cadastro])

    return dados;
}

export async function buscarPornome(nome){
    let sql = 'select * from tb_contatos where nm_contato like ?'

    let [dados] = await conexao.query(sql, ['%' + nome + '%'])

    return dados;
}




