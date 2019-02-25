import { SUBFIELD_DELIMITER } from './MarcUtils';
import { ACTION } from '../../../redux/helpers/Action';
import { ENDPOINT } from './Constant';

// MARC action creator

/**
 *
 * @param {*} payload
 */
export const headingAction = (payload) => {
  return {
    type: ACTION.CREATE,
    data: {
      path: ENDPOINT.CREATE_HEADING_URL,
      type: `${payload.id}-${payload.tag}-` + Date.now(),
      params: ENDPOINT.DEFAULT_LANG_VIEW,
    },
    payload
  };
};
/**
 *
 * @param {*} id
 * @param {*} payload
 */
export const deleteRecordAction = (id, payload) => {
  return {
    type: ACTION.DELETE,
    data: {
      path: ENDPOINT.BIBLIOGRAPHIC_RECORD + '/' + id,
      type: `deleteRecord-${id}-` + Date.now(),
      params: 'view=1',
      id,
      payload
    }
  };
};

/**
 *
 * @param {*} item
 * @param {*} props
 */
export const createNewHeading = (item, props) => {
  const { dispatch } = props;
  const heading = {
    indicator1: item.ind1 || '',
    indicator2: item.ind2 || '',
    stringText: SUBFIELD_DELIMITER + item.displayValue,
    tag: item.code
  };
  dispatch(headingAction(heading));
};
