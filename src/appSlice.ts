import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, getBoard } from "./api/leaderboard-api";
import { AppThunk } from './store';

export interface State {
    board: Board | undefined;
}

const initialState : State = {
    board: undefined,
};

const appSlice = createSlice({
    name: "appSlice",
    initialState: initialState,
    reducers: {
        getBoardSuccess(state: State, action: PayloadAction<Board>) {
            state.board = action.payload;
        }
    }
});

export const { getBoardSuccess } = appSlice.actions;
export default appSlice.reducer;

export const fetchBoard = (): AppThunk => async (dispatch): Promise<void> => {
    const board = await getBoard();
    dispatch(getBoardSuccess(board));
};