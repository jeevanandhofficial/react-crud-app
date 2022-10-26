import { Component } from "react";
//import Table from 'react-bootstrap/Table';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
const TableHeader =()=>
{
    return(
        
          <MDBTableHead dark>
          <tr>
            <th>Name</th>
            <th>Job Title</th>
            <th>Action</th>
          </tr>

          </MDBTableHead>
          
        

    )
}
const TableBody =(props)=>
{
  const {charactersData,removeCharacter}=props
  const rows=charactersData.map((character,index)=>
  {
    return(<tr key={index}><td>{character.name}</td><td>{character.job}</td><td><button type="button" class="btn btn-dark" onClick={()=>removeCharacter(index)}>Remove</button></td></tr>)

  })


    return(
      <MDBTableBody>
          {rows}
      </MDBTableBody>

    )
}
class Table extends Component {
  render() {
    const {charactersData ,removeCharacter}=this.props
    return (
      <MDBTable  className="table-xl table-hover table-fixed .table-responsive">
        
      
        <TableHeader/>
        <TableBody removeCharacter={removeCharacter} charactersData={charactersData}/>
        
        
      
      </MDBTable>
    );
  }
}
 export default Table;
