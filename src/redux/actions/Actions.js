// @flow
export const prefix = '@@ui-marccat/';

export const REQUEST_MAKE = `${prefix}REQUEST_MAKE`;
export const REQUEST_REDUCE = `${prefix}REQUEST_REDUCE`;
export const REQUEST_RESOLVE = `${prefix}REQUEST_RESOLVE`;
export const REQUEST_REJECT = `${prefix}REQUEST_REJECT`;
export const REQUEST_CLEAR = 'RESET_STORE';
export const GET = `${prefix}GET`;
export const QUERY = `${prefix}QUERY`;
export const FIND = `${prefix}FIND`;
export const SAVE = `${prefix}SAVE`;
export const CREATE = `${prefix}CREATE`;
export const UPDATE = `${prefix}UPDATE`;
export const DELETE = `${prefix}DELETE`;
export const RESOLVE = `${prefix}RESOLVE`;
export const REJECT = `${prefix}REJECT`;
export const FILTERS = `${prefix}FILTER`;
export const LOCK = `${prefix}LOCK`;
export const UNLOCK = `${prefix}UNLOCK`;
export const SETTINGS = `${prefix}SETTINGS`;
export const HISTORY = `${prefix}REQUEST_HISTORY`;
export const HISTORY_CLEAR = `${prefix}REQUEST_HISTORY_CLEAR`;
export const EXECUTE_CALLBACK = `${prefix}EXECUTE_CALLBACK`;
export const EXECUTE_CALLBACK_FIRED = `${prefix}EXECUTE_CALLBACK_FIRED!!!!!`;
export const SEARCH = `${prefix}SEARCH`;
export const SCAN = `${prefix}SCAN`;
export const DETAILS = `${prefix}DETAILS`;
export const DETAILS_BY_TITLE = `${prefix}DETAILS_BY_TITLE`;
export const ASSOCIATED_BIB_REC = `${prefix}ASSOCIATED_BIBS_REC`;
export const ASSOCIATED_BIB_REC_SUCCESS = `${prefix}ASSOCIATED_BIB_REC_SUCCESS`;
export const CLOSE_ASSOCIATED_DETAILS = `${prefix}CLOSE_ASSOCIATED_DETAILS`;
export const ASSOCIATED_DETAILS = `${prefix}ASSOCIATED_DETAILS`;
export const ASSOCIATED_DETAILS_SUCCESS = `${prefix}ASSOCIATED_DETAILS_SUCCESS`;
export const FETCH_SEARCH_REQUESTED = `${prefix}FETCH_SEARCH_REQUESTED`;
export const FETCH_DETAILS_REQUESTED = `${prefix}FETCH_DETAILS_REQUESTED`;
export const RECORD_SUCCESS = `${prefix}RECORD_SUCCESS`;
export const COUNT_DOC = `${prefix}COUNT_DOC`;
export const COUNT_DOC_SUCCESS = `${prefix}COUNT_DOC_SUCCESS`;
export const FETCH_COUNTER_REQUESTED = `${prefix}FETCH_COUNTER_REQUESTED`;
export const FETCH_ASSOCIATED_REQUESTED = `${prefix}FETCH_ASSOCIATED_REQUESTED`;
export const FETCH_DETAILS_ASSOCIATED_REQUESTED = `${prefix}FETCH_DETAILS_ASSOCIATED_REQUESTED`;
export const BROWSE_FIRST_PAGE = `${prefix}BROWSE_FIRST_PAGE`;
export const FETCH_BROWSE_FIRST_PAGE = `${prefix}FETCH_BROWSE_FIRST_PAGE`;
export const BROWSE_FIRST_PAGE_SUCCESS = `${prefix}BROWSE_FIRST_PAGE_SUCCESS`;
export const DETAILS_BROWSE_SUCCESS = `${prefix}DETAILS_BROWSE_SUCCESS`;
export const FETCH_DETAILS_BROWSE_REQUESTED = `${prefix}FETCH_DETAILS_BROWSE_REQUESTED`;
export const DETAILS_BROWSE = `${prefix}DETAILS_BROWSE`;
export const AUTH_DETAILS_BROWSE = `${prefix}AUTH_DETAILS_BROWSE`;
export const AUTH_DETAILS_BROWSE_SUCCESS = `${prefix}AUTH_DETAILS_BROWSE_SUCCESS`;
export const BROWSE_ASSOCIATED_DETAILS = `${prefix}BROWSE_ASSOCIATED_DETAILS`;
export const FETCH_BROWSE_DETAILS_ASSOCIATED_REQUESTED = `${prefix}FETCH_BROWSE_DETAILS_ASSOCIATED_REQUESTED`;
export const BROWSE_ASSOCIATED_DETAILS_SUCCESS = `${prefix}BROWSE_ASSOCIATED_DETAILS_SUCCESS`;
export const CLOSE_BROWSE_ASSOCIATED_DETAILS = `${prefix}CLOSE_BROWSE_ASSOCIATED_DETAILS`;
export const FETCH_TEMPLATE_GET_BY_ID = `${prefix}FETCH_TEMPLATE_GET_BY_ID`;
export const TEMPLATE_GET_BY_ID_SUCCESS = `${prefix}TEMPLATE_GET_BY_ID_SUCCESS`;
export const CLOSE_PANELS = `${prefix}CLOSE_PANELS`;
export const CUSTOM_COLUMN_VIEW = `${prefix}CUSTOM_COLUMN_VIEW`;
export const RECORD_DETAIL = `${prefix}RECORD_DETAIL`;
export const RECORD_DETAIL_REQUESTED = `${prefix}RECORD_DETAIL_REQUESTED`;
export const RECORD_DETAIL_SUCCESS = `${prefix}RECORD_DETAIL_SUCCESS`;
export const TOTAL_BIB_COUNT = `${prefix}TOTAL_BIB_COUNT`;
export const TOTAL_AUTH_COUNT = `${prefix}TOTAL_AUTH_COUNT`;
export const TOTAL_BIB_COUNT_SUCCESS = `${prefix}TOTAL_BIB_COUNT_SUCCESS`;
export const TOTAL_AUTH_COUNT_SUCCESS = `${prefix}TOTAL_AUTH_COUNT_SUCCESS`;

export const ACTION = {
  REQUEST_MAKE,
  REQUEST_REDUCE,
  REQUEST_RESOLVE,
  REQUEST_REJECT,
  REQUEST_CLEAR,
  GET,
  QUERY,
  FIND,
  SAVE,
  CREATE,
  UPDATE,
  DELETE,
  RESOLVE,
  REJECT,
  FILTERS,
  LOCK,
  UNLOCK,
  SETTINGS,
  HISTORY,
  HISTORY_CLEAR,
  EXECUTE_CALLBACK,
  EXECUTE_CALLBACK_FIRED,
  SEARCH,
  SCAN,
  DETAILS,
  DETAILS_BY_TITLE,
  ASSOCIATED_BIB_REC,
  ASSOCIATED_BIB_REC_SUCCESS,
  CLOSE_ASSOCIATED_DETAILS,
  ASSOCIATED_DETAILS,
  ASSOCIATED_DETAILS_SUCCESS,
  FETCH_SEARCH_REQUESTED,
  FETCH_DETAILS_REQUESTED,
  RECORD_SUCCESS,
  COUNT_DOC,
  COUNT_DOC_SUCCESS,
  FETCH_COUNTER_REQUESTED,
  FETCH_ASSOCIATED_REQUESTED,
  FETCH_DETAILS_ASSOCIATED_REQUESTED,
  BROWSE_FIRST_PAGE,
  FETCH_BROWSE_FIRST_PAGE,
  BROWSE_FIRST_PAGE_SUCCESS,
  DETAILS_BROWSE_SUCCESS,
  FETCH_DETAILS_BROWSE_REQUESTED,
  DETAILS_BROWSE,
  AUTH_DETAILS_BROWSE,
  AUTH_DETAILS_BROWSE_SUCCESS,
  BROWSE_ASSOCIATED_DETAILS,
  FETCH_BROWSE_DETAILS_ASSOCIATED_REQUESTED,
  BROWSE_ASSOCIATED_DETAILS_SUCCESS,
  CLOSE_BROWSE_ASSOCIATED_DETAILS,
  FETCH_TEMPLATE_GET_BY_ID,
  TEMPLATE_GET_BY_ID_SUCCESS,
  CLOSE_PANELS,
  CUSTOM_COLUMN_VIEW,
  RECORD_DETAIL,
  RECORD_DETAIL_REQUESTED,
  RECORD_DETAIL_SUCCESS,
  TOTAL_BIB_COUNT,
  TOTAL_AUTH_COUNT,
  TOTAL_BIB_COUNT_SUCCESS,
  TOTAL_AUTH_COUNT_SUCCESS,
};
