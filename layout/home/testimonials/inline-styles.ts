export const defaultSlickStyles = `.slick-slider{position:relative;display:block;box-sizing:border-box;user-select:none;-webkit-touch-callout:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}`;

export const customSlickStyles = `
  .slick-slider{
    margin-right: -100%;
  }
  .slick-list{
    min-height: 500px;
  }
  .slick-track{
    display: flex;
    gap: 17px;
  }
  .slick-slide{
    max-width: 335px;
    width: 100% !important;

  }
  .slick-slide > div{
    width: inherit
  }
  @media (min-width: 1600px){
    .slick-slider{
      margin-right: -60%;
    }
  }
`;
