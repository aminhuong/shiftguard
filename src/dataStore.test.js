import { getData, setData, clear } from './dataStore';

describe('dataStore', () => {
  test('clear resets all data arrays', () => {
    clear();

    expect(getData()).toStrictEqual({
      employees: [],
      shifts: [],
      breaks: [],
      leaves: [],
      alerts: []
    });
  });

  test('clear returns an empty object', () => {
    expect(clear()).toStrictEqual({});
  });

  test('setData replaces the current data', () => {
    const newData = {
      employees: [
        {
          employeeId: 1,
          name: 'Amin Tran',
          role: 'DEALER'
        }
      ],
      shifts: [],
      breaks: [],
      leaves: [],
      alerts: []
    };

    setData(newData);

    expect(getData()).toStrictEqual(newData);
  });
});