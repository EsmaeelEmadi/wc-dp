
import { expect } from '@open-wc/testing'; //  fixture
import { Manager } from '../../src/utils/manager';
import { Calendars } from '../../src/types';

// DONE: test default values
// DONE: add calendar and test if calendar is added
// DONE: add locale and check if locale is added
// TODO: test values in dayjs after adding calendar and locale

describe('Manager', () => {
  let manager : Manager;

  beforeEach(async () => {
    manager = new Manager();
  });

  it('should initialize with default calendars and locales', () => {
    // Assuming at least one member is in calendars
    expect(manager.calendars.size).to.equal(1);
    // Assuming Calendars.Gregory is added by default
    expect(manager.calendars.has(Calendars.Gregory)).to.equal(true);
    // Assuming 'en' locale is added by default
    expect(manager.locales.size).to.equal(1);
    // Assuming "en" locale is added by default
    expect(manager.locales.has("en")).to.equal(true);
  });

  it('should add a calendar to the set', async () => {
    const initialSize = manager.calendars.size;
    await manager.calendars.asyncAdd(Calendars.Jalali);
    expect(manager.calendars.size).to.equal(initialSize + 1);
    expect(manager.calendars.has(Calendars.Jalali)).to.equal(true);
  });

  it('should add a locale to the set', async () => {
    const initialSize = manager.locales.size;
    await manager.locales.asyncAdd('fr');
    expect(manager.locales.size).to.equal(initialSize + 1);
    expect(manager.locales.has("fr")).to.equal(true);
  });

  //
  // it('should load Jalali calendar', async () => {
  //   await manager.addCalendar('Jalali');
  //   // Perform assertions to verify that the Jalali calendar is loaded correctly
  // });
  //
  //
  // it('should load a locale', async () => {
  //   await manager.addLocale('fr');
  //   // Perform assertions to verify that the 'fr' locale is loaded correctly
  // });

  // Add more tests as needed
});
