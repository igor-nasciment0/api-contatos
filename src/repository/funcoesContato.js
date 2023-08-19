import conexao from "./conexao.js";

export async function listarContatos(){
    let sql = `SELECT * FROM TB_CONTATOS`
    let [dados] = await conexao.query(sql)

    return dados
}

export async function inserirContato(contato){
    let sql = `INSERT INTO TB_CONTATOS (NM_CONTATO, DS_TELEFONE, DS_EMAIL, BT_FAVORITO, DT_CADASTRO) 
                                VALUES (?, ?, ?, ?, ?)`
                                
    let [dados] = await conexao.query(sql, [contato.nome, contato.telefone, contato.email, contato.favorito, contato.dataCadastro])

    return dados;
}

export async function buscarPorNome(nome){
    let sql = `SELECT * FROM TB_CONTATOS 
                WHERE NM_CONTATO LIKE ?`

    let [dados] = await conexao.query(sql, ['%' + nome + '%'])

    return dados;
}

export async function buscarFavoritos()
{
    let sql = `SELECT * FROM TB_CONTATOS
                WHERE BT_FAVORITO = TRUE`

    let [dados] = await conexao.query(sql);

    return dados;
}

export async function buscarPorData(dataInicio, dataFim)
{
    let sql = `SELECT * FROM TB_CONTATOS
                WHERE DT_CADASTRO BETWEEN ? AND ?`
    
    let [dados] = await conexao.query(sql, [dataInicio, dataFim]);
    
    return dados;
}

export async function alterarContato(newData, contatoID)
{
    let sql = `UPDATE TB_CONTATOS
                  SET NM_CONTATO = ?,
                      DS_TELEFONE = ?,
                      DS_EMAIL = ?,
                      BT_FAVORITO = ?,
                      DT_CADASTRO = ?
                WHERE ID_AGENDA = ?`

    let [dados] = await conexao.query(sql, [newData.nome, newData.telefone, newData.email, newData.favorito, newData.dataCadastro, contatoID]);
    return dados;
}

export async function deletarContato(contatoID)
{
    let sql = `DELETE FROM TB_CONTATOS
                WHERE ID_AGENDA = ?`;

    let [dados] = await conexao.query(sql, [contatoID]);

    return dados;
}




