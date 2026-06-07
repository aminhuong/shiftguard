// In-memory data store for the ShiftGuard application.
let data = {
  employees: [],
  shifts: [],
  breaks: [],
  leaves: [],
  alerts: []
};

/**
 * Returns the current application data.
 *
 * @returns {object} The current data store.
 */
function getData() {
  return data;
}

/**
 * Replaces the current application data with new data.
 *
 * @param {object} newData - The new data store.
 */
function setData(newData) {
  data = newData;
}

/**
 * Resets all application data to an empty state.
 *
 * @returns {object} Empty object to indicate success.
 */
function clear() {
  data = {
    employees: [],
    shifts: [],
    breaks: [],
    leaves: [],
    alerts: []
  };

  return {};
}

export {
  getData,
  setData,
  clear
};