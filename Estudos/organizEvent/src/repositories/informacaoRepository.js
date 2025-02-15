const {db} = require('../app')


const createInformacoes = (informacoes) => {
    db.firestore().collection('informacoes').add(informacoes).then(() => {
      console.log('informacoes salvo?')
    }).catch(() => {
      console.log('evento não salvo')
    })
  }


  const getInformacoes = () => {
    db.collection('informacoes').get().then(snapshot => {
      snapshot.docs.forEach(evento => {
        console.log(evento.data())
      })
    })
  }


  const atualizarInformacoes = (id, informacoes) => {
    db.collection('informacoes').doc(id).update(informacoes).then(() => {
      console.log('Atualizado com sucesso')
    }).catch(() => {
      console.log('erro ao atualizar')
    })
  }
  
  //atualizarEvento('7Yip40CmtxgVHvs3BKKr', 'qualquer coisa')
  
  const deletar = (id) => {
    db.collection('informacoes').doc(id).delete().then(() => {
      console.log('deletado')
    }).catch(() => {
      console.log('deu erro')
    })
  }

  

  const findSubDocument = (documentId, nomeCollection) => {
    db.collection('informacoes').doc(documentId).collection(nomeCollection).get().then((snapshot) => {
      snapshot.forEach(doc => {
        console.log(doc.data())
      })
    }).catch(() => {
      console.log('error')
    })
  }
  
  //findSubDocument()
  
  
  const findById = (id) => {
    db.collection('informacoes').doc(id).get().then((document) => {
      console.log(document.data())
    }).catch(() => {
      console.log('deu erro')
    })
  }

module.exports = {
  createInformacoes, 
  getInformacoes, 
  atualizarInformacoes, 
  deletar,
  findSubDocument, 
  findById
}