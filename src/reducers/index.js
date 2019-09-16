// 全Reducerを1つに結合する

import {combineReducers} from "redux";
import events from './events';

export default combineReducers({events});