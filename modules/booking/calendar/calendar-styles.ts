export const calendarStyle = `
  .react-datepicker__month-container{
    float: none
  }

  .react-datepicker__navigation {
    align-items: center;
    background: none;
    display: flex;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 9px;
    padding: 0;
    border: none;
    z-index: 1;
    height: 32px;
    width: 32px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation--previous {
    left: 80px;
  }

  .react-datepicker__navigation--next {
    right: 80px;
  }

  .react-datepicker__navigation-icon--previous {
    right: 0;
  }

  .react-datepicker__navigation-icon {
    position: relative;
    top: -1px;
    font-size: 20px;
    width: 0;
  }

  .react-datepicker__navigation-icon--previous::before {
    transform: rotate(225deg);
    right: -7px;
  }

  .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    border-color: #912829;
    border-style: solid;
    border-width: 2px 2px 0 0;
    content: "";
    display: block;
    height: 9px;
    position: absolute;
    top: 6px;
    width: 9px;
  }

  .react-datepicker__navigation-icon--next {
    left: 0;
  }

  .react-datepicker__navigation-icon--next::before {
    transform: rotate(45deg);
    left: -7px;
  }

  .react-datepicker__header {
    text-align: center;
    position: relative;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    color: #1E2022;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 14px;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    white-space: nowrap;
  }

  .react-datepicker__day-names{
    margin-top: 30px;
  }

  .react-datepicker__month {
    text-align: center;
  }

  .react-datepicker__day,
  .react-datepicker__month-text,
  .react-datepicker__quarter-text,
  .react-datepicker__year-text {
    cursor: pointer;
  }

  .react-datepicker__day-name{
    margin: 0;
    color: #B53133;
    letter-spacing: 1px;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3.3rem;
    line-height: 2.3rem;
  }

  .react-datepicker__day--range-start,
  .react-datepicker__day--range-end{
    position: relative;
    color: #fff;
  }

  
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__day--in-range.react-datepicker__day--disabled{
    background-color: #B8B8B8;
    color: #fff;
  }

  .react-datepicker__day--range-start{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .react-datepicker__day--range-end{
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .react-datepicker__day--range-start:after,
  .react-datepicker__day--range-end:after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    color: #fff;
    border-radius: 10px;
  }

  .react-datepicker__day--range-start:not(.react-datepicker__day--range-end):after{
    background-color: #EB8D4C;
    mix-blend-mode: color;
  }

  .react-datepicker__day--range-end:not(.react-datepicker__day--range-start):after{
    background-color: #31AA52;
    mix-blend-mode: color-burn;
  }

  .react-datepicker__day--selected:not(.react-datepicker__day--range-start):not(.react-datepicker__day--today){
    background-color: #EB8D4C;
    color: #fff;
    mix-blend-mode: color;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  
  .react-datepicker__day--keyboard-selected:focus-visible{
    border-radius: 10px;
  }

  .react-datepicker__day--in-range.react-datepicker__day--disabled,
  .react-datepicker__day--disabled,
  .react-datepicker__day--weekend:last-of-type{
    color: #F2F1F0;
    cursor: default;
  }
  
  .react-datepicker__day--today{
    background-color: transparent !important;
    color: rgb(181 49 51 / 40%) !important;
  }

  @media (max-width: 450px) {
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      width: 2.4rem;
      line-height: 2.4rem;
    }
  }

`;
