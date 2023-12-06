import Curso from "./Curso";

function GrillaCursos() {
  return (
    <div className="main-content">
      <Curso
        imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/662ba6d8-9458-489e-bb3a-5ee98183ae6d.png"
        titulo="Backend con Javascript"
        subtitulo="Conviértete en programador fullstack aprendiendo JavaScript del lado del servidor"
      />
      <Curso
        imagen="https://edteam-media.s3.amazonaws.com/specialities/medium/8bb0963a-04a0-4a75-b930-7cf163ed57e5.png"
        titulo="Gestión de liderazgo"
        subtitulo="Empresas"
      />
    </div>
  );
}
export default GrillaCursos;
