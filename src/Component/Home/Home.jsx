import { useState, useEffect  } from 'react'
import "./Home.css";
import Select from 'react-select'
import Card from "../Card1/cardss.jsx";
import logoescudo from './logoescudo.png'; 
import atletismo from './atletismo2.jpg';
import ajedrez from './ajedrez2.jpg';
import Bádminton from './Bádminton2.jpg';
import Baloncestofemenino from './Baloncestofemenino2.jpg';
import Baloncestomasculino from './Baloncestomasculino2.jpg';
import Béisbol from './Béisbol2.jpg';
import Esgrima from './esgrima2.jpg';
import FútbolCampo from './FútbolCampo2.jpg';
import FútbolSala from './FútbolSala2.jpg';
import karate from './karate2.jpg';
import natacion from './natacion2.jpg';
import pentatlonm from './pentatlonm2.jpg';
import Sóftbol from './Sóftbol2.jpg';
import TiroFusil from './TiroFusil2.jpg';
import TiroPistola from './TiroPistola2.jpg';
import VoleibolFem from './VoleibolFem2.jpg';
import voleibolM from './voleibolM2.jpg';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
  import.meta.env.VITE_APP_SUPABASE_ANON_KEY);

const Home = () => {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [option, setOption] = useState('');
const [FutbolC, setFutbolC] = useState([]);

const options = [
    { value: 'Ajedrez', label: 'Ajedrez' },
    { value: 'Atletismo', label: 'Atletismo' },
    { value: 'Bádminton', label: 'Bádminton' },
    { value: 'BaloncestoF', label: 'Baloncesto  femenino' },
    { value: 'BaloncestoM', label: 'Baloncesto  masculino' },
    { value: 'Béisbol', label: 'Béisbol' },
    { value: 'Esgrima', label: 'Esgrima' },
    { value: 'FutbolC', label: 'Fútbol Campo' },
    { value: 'FutbolS', label: 'Fútbol Sala' },
    { value: 'Karate', label: 'Karate'},
    { value: 'Natación', label: 'Natación' },
    {value: 'OrientaciónM', label: 'Orientación Militar' ,
   },
   { value: 'PentatlónM', label: 'Pentatlón Militar'},
   { value: 'Sóftbol', label: 'Sóftbol'},
   { value: 'TiroFusil', label: 'Tiro de Fusil'},
   { value: 'TiroPistola', label: 'Tiro de Pistola'},
   { value: 'VoleibolF', label: 'Voleibol Femenino'},
   { value: 'VoleibolM', label: 'Voleibol Masculino'}
  ]


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (option==="Ajedrez") {
      window.location.href = "/ajedrez";
        
      } else if (option==="Atletismo") {
        window.location.href = '/Atletismo';
        
        
      }  else if (option==="Bádminton") {
        window.location.href = '/Badminton';
         
      }else if (option==="BaloncestoF") {
        window.location.href = '/BaloncestoF';
         
      }else if (option==="BaloncestoM") {
        window.location.href = '/BaloncestoM';
         
      }else if (option==="Béisbol") {
        window.location.href = '/Beisbol';
         
      }else if (option==="Esgrima") {
        window.location.href = '/Esgrima';
         
      }else if (option==="FutbolC") {
        window.location.href = '/FutbolC';
         
      }else if (option==="FutbolS") {
        window.location.href = '/FutbolS';

      }  else if (option==="Karate") {
        window.location.href = '/Karate';

      }else if (option==="Natación") {
          window.location.href = '/Natacion';

        }else if (option==="OrientaciónM") {
          window.location.href = '/OrientacionM';

        }else if (option==="PentatlónM") {
          window.location.href = '/PentatlonM';

        }else if (option==="Sóftbol") {
          window.location.href = '/Softbol';

        }else if (option==="TiroFusil") {
          window.location.href = '/TiroFusil';

        }else if (option==="TiroPistola") {
          window.location.href = '/TiroPistola';

        }else if (option==="VoleibolF") {
          window.location.href = '/VoleibolF';

        }else if (option==="VoleibolM") {
          window.location.href = '/VoleibolM';
         
      }else {
        
        alert("No selecciono ninguna de las alternativas");
      }


  };

  useEffect(() => {
    
    
  }, []);


     // sacar dato del selector para enviarlo con el boton que es la otra funcion 
    const find = ({ value }) => {
    
    console.log(value);
    setOption(value);
  };

  const TextoSubTitulo = "JUEGOS INTER ACADEMIAS MILITARES 2024"


  const cards = [
    {
      id: 1,
      title: "Ajedrez",
      text: "Juego estratégico en batalla táctica sobre tablero.",
      image: ajedrez,
      
    },
    {
      id: 2,
      title: "Atletismo",
      text: ""+"Competición atlética que abarca velocidad, resistencia y habilidades.",
      image: atletismo,
      
    },
    {
      id: 3,
      title: "Bádminton",
      text: "Juego de raqueta en cancha, buscando puntuar con precisión estratégica." ,
      image: Bádminton,
      
    },
  ];

  const cards2 = [
    {
      id: 1,
      title: "Baloncesto masculino",
      text: "Partido frenético masculino con encestes, pases y defensa en cancha rectangular delimitada.",
      image: Baloncestomasculino,
      
    },
    {
      id: 2,
      title: "Baloncesto  femenino",
      text: ""+"Partido frenético femenino con encestes, pases y defensa en cancha rectangular delimitada.",
      image: Baloncestofemenino,
      
    },
    {
      id: 3,
      title: "Béisbol",
      text: " Deporte con bate y pelota y mucha estrategia en bases y lanzamientos." ,
      image: Béisbol,
      
    },
  ];

  const cards3 = [
    {
      id: 1,
      title: "Esgrima",
      text: "Combate deportivo con espadas, sables o floretes para ganar puntos.",
      image: Esgrima,
      
    },
    {
      id: 2,
      title: "Fútbol Campo",
      text: ""+"Intenso juego colectivo de 11 vs 11 con goles, habilidades tácticas y rivalidad en cancha.",
      image: FútbolCampo,
      
    },
    {
      id: 3,
      title: "Fútbol Sala",
      text: " Partido vibrante de 5 vs 5 con regates, tiros al gol y rivalidad en campo de suelo duro." ,
      image: FútbolSala,
      
    },
  ];

  const cards4 = [
    {
      id: 1,
      title: "Karate",
      text: "Arte marcial, golpes precisos y técnicas defensivas en combate disciplinado.",
      image: karate,
      
    },
    {
      id: 2,
      title: "Natación ",
      text: ""+"Competición acuática, estilos variados, velocidad y resistencia en piscina.",
      image: natacion,
      
    },
    {
      id: 3,
      title: "Orientación Militar",
      text: " Entrenamiento táctico y estrategias en terreno desafiante. " ,
      image: pentatlonm,
      
    },
  ];

  const cards5 = [
    {
      id: 1,
      title: "Pentatlón Militar",
      text: "Exigente competencia militar: correr, disparar, nadar, saltos, lanzamiento de granada, entre otros.",
      image: pentatlonm,
      
    },
    {
      id: 2,
      title: "Sóftbol",
      text: ""+"Variante de béisbol, lanzamiento bajo, bateo y jugadas en diamante.",
      image: Sóftbol,
      
    },
    {
      id: 3,
      title: "Tiro de Fusil",
      text: " Disciplina de precisión con fusiles, objetivos distantes, puntería y concentración." ,
      image: TiroFusil,
      
    },
  ];

  const cards6 = [
    {
      id: 1,
      title: "Tiro de Pistola",
      text: "Disciplina de precisión con pistolas, objetivos distantes, puntería y concentración.",
      image: TiroPistola,
      
    },
    {
      id: 2,
      title: "Voleibol Femenino",
      text: ""+"Deporte de equipo versión femenino con red divisoria, toques, remates y estrategias coordinadas.",
      image: VoleibolFem,
      
    },
    {
      id: 3,
      title: "Voleibol Masculino",
      text: "Deporte de equipo versión masculino con red divisoria, toques, remates y estrategias coordinadas." ,
      image: voleibolM,
      
    },
  ];


  
  return (

    <form onSubmit={handleSubmit}>
    <div>
     
    <div className="card10">
    <h5>{"DEPORTE DE LA ACADEMIA MILITAR 2024"}</h5>

    </div>

    <div className="logo-container2">
        <img src={logoescudo} className="App-logo" alt="logo" />
        
        </div>

      

        <div className="card3">
        
          <h5>{TextoSubTitulo}</h5>

        </div>
        
        <main>

          

          <section id="listaE"> 

            <div className="card">
            
            <h4>{"Selecciona el deporte que quieres consultar"}</h4>
            

            <div className="card6">
            <h6>{"Disciplinas:"}</h6>

            <div className="selector">

            <Select options={options} 
             onChange={(e) => find(e)}/>
            </div>

            </div>

            <div className="card5">
            <button className="boton" type="submit">Consultar juego</button  >
            </div>

            <div className="card9">
            <h4>{"Jóvenes valientes con honor y espíritu de equipo para alcanzar la victoria."}</h4>
            </div>

          </div>

          <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards2.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards3.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards4.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards5.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center h-100">
              <div className="row">
                {cards6.map(({ title, image, text, id }) => (
                  <div className="col-md-4" key={id}>
                    <Card imageSource={image} title={title} text={text}  />
                  </div>
                ))}
              </div>
            </div>

            

          </section>

    
      </main>

      
      </div>
    
    </form>
  );
};

export default Home;