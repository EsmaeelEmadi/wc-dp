import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// TYPES
import { Calendars } from './types';

export class WcDp extends LitElement {
  /**
   * STYLES
   */
  static override styles = css`
    :host ::slotted(open-datepicker-input) {
      display: flex;
    }
  `;

  /**
   * PROPERTIES
   */
  @property({ attribute: true })
  public calendar: Calendars = Calendars.Gregory;

  @property({ type: String, attribute: true })
  public locale: string = '';

  @property({ type: Number, attribute: true })
  public timestamp: number = new Date().getTime();

  /**
   * LISTENERS
   */
  // private onCalendarLoad() {}

  /**
   * HANDLERS
   */
  // private handleCalendarChange(calendar: Calendars): void {
  //   // if (!config.calendars.has(this.calendar)) {
  //   //   config.calendars.asyncAdd(this.calendar);
  //   //   eventBus.on('on-calendar-load', this.onCalendarLoad);
  //   // } else {
  //   //   if (config.calendars.has(this.calendar)) {
  //   //     this.config();
  //   //   }
  //   // }
  //   // if (Object.values(Calendars).includes(calendar)) {
  //   //   this.calendar = Calendars[calendar];
  //   // }
  // }

  /**
   * LIFE CYCLE
   */
  override attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null,
  ): void {
    switch (name) {
      case 'calendar':
        // this.handleCalendarChange(value as unknown as Calendars);
        break;
      case 'locale':
        console.log('locale', value);
        break;
      case 'timestamp':
        console.log('timestamp', value);
        break;
      default:
        break;
    }
  }

  override render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
