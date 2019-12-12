import React, { useState } from 'react';
//import { usePieceState } from './Pieces';
import './GameBoard.css';
import {GameContext} from '../Views/Game';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { PlacingPiecesContext } from '../Views/PlacingPieces';


const GameBoradPlayer2 = () => {

  //importando contesto
  const {dataPlayer2, setdataPlayer2} = React.useContext(GameContext);
  // creando la tabla
  const createTablePlayer1=()=>{
    // fijar tamaño de tabla
    let tableHeight = 10;
    let tableWidth =10;
    let table = [];

    for (let h = 0; h < tableHeight; h++) {
      let row = [];
      for (let w = 0; w < tableWidth; w++) {
       row[w] = { state:false, x: h, y: w};
      }
      table[h] = row;
    }
    
    //llenar la tabla
    for (let index = 0; index < dataPlayer2.pieces.length; index++) {
      let piece = dataPlayer2.pieces[index];
      for (let i=piece.x; i< piece.x + piece.sizeH; i++){
        for (let j=piece.y; j< piece.y + piece.sizeV; j++){
          table [i][j].state = true; 
        }
      }  
      
    }


    return table;
  }
  const [tableState, setTableState] = useState(createTablePlayer1());
  
  const copyTable = (table) =>{
    return table.map( x => {
      return x.map( y => {
        return { ...y} 
       })
     });
  }


    return (
      <div id='gameBoard'>
        <Paper>
          <Table id='boardPlayer1'>
            <TableBody>
              {tableState.map(row => (
                <TableRow>
                  {row.map(position => (
                    <TableCell
                      data={[position.x, position.y]}
                      className={(tableState[position.x][position.y].state ? "occupiedCell" : "emptyCell")}
                      onClick={() =>
                        console.log("clic")
                      }
                    >
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  
  
};

export default GameBoradPlayer2;