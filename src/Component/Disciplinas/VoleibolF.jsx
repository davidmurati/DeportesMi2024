import React from "react";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import "./Disciplinas.css";
import logoN from '../Home/VoleibolF.jpeg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Navbar,
  Nav,
} from "reactstrap";

const supabase = createClient(import.meta.env.VITE_APP_SUPABASE_URL, 
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY);



const data = [
  { id: 1,  Dia: "lunes", Hora: "4 pm", CompetidorA: "A", CompetidorB: "B", Resultado: "", Ganador: "" },
  
];

const clave="12345"

class VoleibolF extends React.Component {
    
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Data: "",
      Hora: "",
      CompetidorA: "",
      CompetidorB: "",
      Resultado: "",
      Ganador: "",
    },
  };


  componentDidMount() {
    this.getFutbolC();
  }

  async getFutbolC() {
    try {
      const { data, error } = await supabase.from("VoleibolF").select("*");
      if (error) throw error;
      this.setState({ data });
    } catch (error) {
      console.error("Error al obtener datos de VoleibolF:", error.message);
    }
  }

  async updateFutbolC() {
    try {
      const { data, error } = await supabase
        .from("VoleibolF")
        .update({
          Dia: this.state.form.Dia,
          Hora: this.state.form.Hora,
          CompetidorA: this.state.form.CompetidorA,
          CompetidorB: this.state.form.CompetidorB,
          Resultado: this.state.form.Resultado,
          Ganador: this.state.form.Ganador,
        })
        .eq('id', this.state.form.id);

      if (error) throw error;
      this.getFutbolC();
      this.setState({ modalActualizar: false });
    } catch (error) {
      console.error("Error al actualizar datos de VoleibolF:", error.message);
    }
  }

  async crearFutbolC() {
    try {
      const nuevoDato = {
        Dia: this.state.form.Dia,
        Hora: this.state.form.Hora,
        CompetidorA: this.state.form.CompetidorA,
        CompetidorB: this.state.form.CompetidorB,
        Resultado: this.state.form.Resultado,
        Ganador: this.state.form.Ganador,
      };


      // Enviar el dato insertado a Supabase
      const { data, error } = await supabase.from("VoleibolF").insert([nuevoDato]);

      if (error) throw error;
      
      // Enviar la actualización a Supabase
      await this.updateFutbolC(nuevoDato);
    } catch (error) {
      console.error("Error al crear datos en VoleibolF:", error.message);
    }
  }


  async deleteFutbolC(dato) {
    try {
      const { data, error } = await supabase
        .from("VoleibolF")
        .delete()
        .eq('id', dato.id);
  
      if (error) throw error;
  
      // Actualizar el estado local eliminando el dato
      const newData = this.state.data.filter(item => item.id !== dato.id);
      this.setState({ data: newData, modalActualizar: false });
    } catch (error) {
      console.error("Error al eliminar datos de VoleibolF:", error.message);
    }
  }


  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = async (dato) => {
    const claveIngresada = prompt("Ingrese la clave:");
    if (claveIngresada === clave) {

    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].Dia = dato.Dia;
        arreglo[contador].Hora = dato.Hora;
        arreglo[contador].CompetidorA = dato.CompetidorA;
        arreglo[contador].CompetidorB = dato.CompetidorB;
        arreglo[contador].Resultado = dato.Resultado;
        arreglo[contador].Ganador = dato.Ganador;
      }
      contador++;
    });
    // Actualizar el estado local
    this.setState({ data: arreglo, modalActualizar: false });

    // Enviar la actualización a Supabase
    await this.updateFutbolC(dato);

    } else {
        alert("Clave incorrecta. Operación cancelada.");
    }
    
  };

  eliminar = async (dato) => {
    const claveIngresada = prompt("Ingrese la clave:");
    if (claveIngresada === clave) {
      

    try {
      var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
      if (opcion == true) {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo.splice(contador, 1);
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
  
        // Enviar la actualización a Supabase
        await this.deleteFutbolC(dato);
      }
    } catch (error) {
      console.error("Error al eliminar datos de VoleibolF:", error.message);
    }

    } else {
        alert("Clave incorrecta. Operación cancelada.");
    }
  };

  insertar= async(dato)=>{
    const claveIngresada = prompt("Ingrese la clave:");
    if (claveIngresada === clave) {

    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });

    // Enviar la actualización a Supabase
    await this.crearFutbolC(dato);
    this.getFutbolC();

    } else {
        alert("Clave incorrecta. Operación cancelada.");
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  navigateToHome = () => {
    window.location.href="/"
  };

  navigateTo1 = () => {
    window.location.href="/ajedrez"
  };
  navigateTo2 = () => {
    window.location.href="/Atletismo"
  };
  navigateTo3 = () => {
    window.location.href="/Badminton"
  };
  navigateTo4 = () => {
    window.location.href="/BaloncestoF"
  };
  navigateTo5 = () => {
    window.location.href="/BaloncestoM"
  };
  navigateTo6 = () => {
    window.location.href="/Beisbol"
  };
  navigateTo7 = () => {
    window.location.href="/Esgrima"
  };
  navigateTo8 = () => {
    window.location.href="/FutbolC"
  };
  navigateTo9 = () => {
    window.location.href="/FutbolS"
  };
  navigateTo10 = () => {
    window.location.href="/Karate"
  };
  navigateTo11 = () => {
    window.location.href="/Natacion"
  };
  navigateTo12 = () => {
    window.location.href="/OrientacionM"
  };
  navigateTo13 = () => {
    window.location.href="/PentatlonM"
  };
  navigateTo14 = () => {
    window.location.href="/Softbol"
  };
  navigateTo15 = () => {
    window.location.href="/TiroFusil"
  };
  navigateTo16 = () => {
    window.location.href="/TiroPistola"
  };
  navigateTo17 = () => {
    window.location.href="/VoleibolF"
  };
  navigateTo18 = () => {
    window.location.href="/VoleibolM"
  };

  render() {


    
    
    return (
      <>
      <div className="card">

      <Navbar >
          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateToHome}>Home</span>
          </Container>
        </Navbar>

      <div className="card10">
    <h5>{"VOLEIBOL FEMENINO"}</h5>
    </div>

        <div className="card3">
        <div className="logo-container">
            <img src={logoN} className="App-logo" alt="logo" />
            </div>
            </div>

        <Container>
        
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Dia</th>
                <th>Hora</th>
                <th>CompetidorA</th>
                <th>CompetidorB</th>
                <th>Resultado</th>
                <th>Ganador</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Dia}</td>
                  <td>{dato.Hora}</td>
                  <td>{dato.CompetidorA}</td>
                  <td>{dato.CompetidorB}</td>
                  <td>{dato.Resultado}</td>
                  <td>{dato.Ganador}</td>
                  <td>
                    <Button
                      color="primary" className="Button1"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button  className="Button1" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Dia: 
              </label>
              <input
                className="form-control"
                name="Dia"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Dia}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Hora: 
              </label>
              <input
                className="form-control"
                name="Hora"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Hora}
              />
            </FormGroup>

            <FormGroup>
              <label>
                CompetidorA: 
              </label>
              <input
                className="form-control"
                name="CompetidorA"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CompetidorA}
              />
            </FormGroup>

            <FormGroup>
              <label>
                CompetidorB: 
              </label>
              <input
                className="form-control"
                name="CompetidorB"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.CompetidorB}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Resultado: 
              </label>
              <input
                className="form-control"
                name="Resultado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Resultado}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ganador: 
              </label>
              <input
                className="form-control"
                name="Ganador"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Ganador}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Dia: 
              </label>
              <input
                className="form-control"
                name="Dia"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Hora: 
              </label>
              <input
                className="form-control"
                name="Hora"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                CompetidorA: 
              </label>
              <input
                className="form-control"
                name="CompetidorA"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
              CompetidorB: 
              </label>
              <input
                className="form-control"
                name="CompetidorB"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Resultado: 
              </label>
              <input
                className="form-control"
                name="Resultado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Ganador: 
              </label>
              <input
                className="form-control"
                name="Ganador"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

          <br />
          <Button className="custom-button" color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />

          <div className="card10">
            <h5>{"DISCIPLINAS"}</h5>
          </div>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo1}>Ajedrez</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo2}>Atletismo</span>
          
          </Container>

          <Container>
        
          <span className="navbar-brand whiteLink" onClick={this.navigateTo3}>Bádminton</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo4}>Baloncesto F</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo5}>Baloncesto M</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo6}>Béisbol</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo7}>Esgrima</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo8}>Futbol Campo</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo9}>Fútbol Sala</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo10}>Karate</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo11}>Natación</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo12}>Orientación</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo13}>Pentatlón</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo14}>Sóftbol</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo15}>Tiro con Fusil</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo16}>Tiro con Pistola</span>
          </Container>

          <Container>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo17}>Voleibol F</span>
          <span className="navbar-brand whiteLink" onClick={this.navigateTo18}>Voleibol M</span>
          </Container>

          </div>
      </>
      

      
    );
  }
}
export default VoleibolF;