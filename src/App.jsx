
import { css, globalCss } from "@stitches/react"
import Logo from './assets/logo.png'

const Main = globalCss({
  '*': { margin: 0, padding: 0 },
});

const Header = css({
  height: 80,
  padding: '0px 200px',
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: 'Black',
})

const Wrapper = css({
  width: '100%',
  maxWidth: 1250,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
})

const LogoSpotFy = css({
  width: 140,
})

const uLSections = css({
  color: 'White',
  display: "flex",
  gap: 40,
  fontFamily: "system-ui",
  fontWeight: '800',
  listStyle: 'none'
})

const SessionMeddle = css({
  backgroundImage: 'url("https://www-growth.scdn.co/static/home/bursts.svg")',
  backgroundSize: '175%',
  backgroundPosition: '46% 4%',
  justifyContent: 'center',
  minHeight: '946px',
  backgroundColor: '#2941AB',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: 50,

  'h1': {
    fontSize: 189,
    textAlign: 'center',
    fontFamily: 'JetBrains Mono, Bold',
    fontWeight: '900',
    color: '#1ed760'
  },

  'p': {
    color: '#1ed760',
    fontSize: 18,
    fontFamily: 'JetBrains Mono, Bold',
    fontWeight: '800',
  },
  'button': {
    backgroundColor: '#1ed760',
    width: 280,
    height: 70,
    borderRadius: 30,
    border: 'none',
    color: '#2941AB',
    fontWeight: 'bold',
    fontSize: 18,
  }
})


const assing = 'Pemium';

let validation = true;

const nAssing = 'Free';


function App() {
  return (
    <div className={Main()}>
      <header className={Header()}>
        <div className={Wrapper()}>
          <ul>
            <li><img className={LogoSpotFy()} src={Logo} alt="Logo Spotfy" /></li>
          </ul>
          <ul className={uLSections()}>
            <li>
              {validation === true ? assing : nAssing}
            </li>
            <li>
              Suporte
            </li>
            <li>
              Baixar
            </li>
            <li>
              |
            </li>
            <li>
              Inscrever-se
            </li>
            <li>
              Entrar
            </li>
          </ul>
        </div>
      </header>
      <div className={SessionMeddle()}>
        <h1>Escutar Muda Tudo</h1>
        <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>
        <button>BAIXE O SPOTFY FREE</button>
      </div>
    </div>
  );
}

export default App;
