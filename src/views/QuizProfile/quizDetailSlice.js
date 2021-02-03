import {
  createSlice,
  createAsyncThunk,
  isPending,
  isFulfilled,
  isRejected,
} from '@reduxjs/toolkit';
import { QUIZ_INFO_ENDPOINT } from 'utils/endpoints';
import { status } from 'utils/helpers';
import axios from 'axios';

const initialState_QuizDetail = {
  status: status.idle,
  idHistory: [],
  detail: {},
};

export const getQuizDetailAsync = createAsyncThunk(
  'quizDetail/getQuizDetailAsync',
  async (payload, thunkApi) => {
    const detail_response = await axios.get(QUIZ_INFO_ENDPOINT + '/' + payload);
    return detail_response.data;
  },
  {
    condition: (payload, { getState }) => {
      const { quizDetail } = getState();
      const { idHistory } = quizDetail;
      if (idHistory.includes(payload)) {
        console.log(
          `detail for ${payload} Memoized, will only refetch after 5min`
        );
        return false;
      }
    },
  }
);
const isPendingAction = isPending(getQuizDetailAsync);
const isFulfilledAction = isFulfilled(getQuizDetailAsync);
const isRejectedAction = isRejected(getQuizDetailAsync);

const quizDetailSlice = createSlice({
  name: 'quizDetail',
  initialState: initialState_QuizDetail,
  reducers: {},
  extraReducers: (b) => {
    b.addMatcher(isPendingAction, (state, { payload }) => {
      state.status = status.pending;
    });
    b.addMatcher(isRejectedAction, (state, { payload }) => {
      state.status = status.error;
      state.error = payload;
    });
    b.addMatcher(isFulfilledAction, (state, { payload }) => {
      state.status = status.success;
      state.detail[payload.id] = payload;
      state.idHistory.push(payload.id);
    });
  },
});
export default quizDetailSlice;
