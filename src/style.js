import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 14px;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body,html {
      line-height: 1;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        height: 100%;
  }
  @media screen and (min-width: 1300px) {
    body {
        font-size: 16px;
    }
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  .Jump,.Jump:focus,.Jump:hover {
      color: #fff;
      text-decoration: none;
  }
  .JumpNav {
      color: #999;
  }
  .JumpNav:focus, .JumpNavActive {
      color: #1890ff;
      text-decoration: none;
  }
`;
export const Rootwapper = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    &.show {
        padding-right: 320px;
        transition: all 0.3s;
    }
    &.hide {
        padding-right: 320px;
        transition: all 0.3s;
    }
`;