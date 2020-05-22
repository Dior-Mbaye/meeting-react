import React from 'react';

const ListItem = (props) => {
    return <tr>
        <b>Sujet: </b>{props.item.subject} <b>Heure: </b>{props.item.clock}
        <details>
            <summary>Détails</summary>
            <p><b>Salle: </b>{props.item.place}</p>
            <p><b>Participants: </b>{props.item.list}</p>
        </details>
        <button className="btn-sm btn  ml-4 btn-info px-8 "
            onClick={props.editProduct} style={{ margin: 5,backgroundColor:'#2a7dd6',borderRadius:5,border:0,paddingBottom:5,paddingTop:5 }}
        >Modifier</button>
        <button className="btn-sm btn px-8 ml-4 btn-danger"
            onClick={props.deleteProduct} style={{ margin: 5,backgroundColor:'#e05050',borderRadius:5,border:0,paddingBottom:5,paddingTop:5 }}
        >Supprimer</button>
    </tr>

}

export default ListItem;