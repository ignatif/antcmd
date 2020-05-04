import Header from './Header'

const Layout = props => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
    <style jsx>{`
      .layout {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
      }
    `}</style>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        background: rgba(0, 0, 0, 0.02);
      }

      input,
      textarea {
        font-size: 16px;
      }

      button {
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default Layout