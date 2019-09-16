// 全Reducerを1つに結合する

import {combineReducers} from "redux";
import count from './count';

export default combineReducers({count});