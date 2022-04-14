import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from './logo.svg'
import './App.css'
import { RootState } from './rootReduser';
import { fetchBoard } from './appSlice';
import LeaderBoard from './Board';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const board = useSelector((state: RootState) => state.app.board);

  useEffect(() => {
    dispatch(fetchBoard());
  }, [dispatch]);

  return board ? <LeaderBoard board={board} /> : <h2>Select a board</h2>;
}

export default App
