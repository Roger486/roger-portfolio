export default function About() {
  return (
    <section id="about" className="min-h-screen p-8">
      <div
        className=" bg-no-repeat bg-bottom-right min-h-150 bg-[length:400px]"
        style={{ backgroundImage: "url('/src/assets/bg-about.png')" }}
      >
        <div>
          <h2 className="text-3xl font-bold pt-40 mb-12">About Me</h2>
          <p className="text-xl font-semibold mb-8">Hola, soy Roger.</p>
          <div className="p-6 bg-white/50 border-1">
            <p className="mb-6">
              Soy un apasionado del desarrollo web reinventado. Me encanta crear
              experiencias digitales que sean funcionales, intuitivas y que
              realmente aporten valor a los usuarios. Para lograrlo, he
              construido una base sólida en tecnologías como HTML, CSS,
              JavaScript, SQL, MongoDB, PHP y Java, además de frameworks como
              Angular, React y Laravel. Durante mi formación y proyectos
              personales, he creado aplicaciones web completas, poniendo
              especial atención en la experiencia del usuario y la optimización,
              aplicando principios de UI/UX. Uno de mis proyectos favoritos fue
              desarrollar una API en Laravel para reservas de alojamientos, que
              puedes ver en mi GitHub.
            </p>
            <p>
              Antes de dedicarme al desarrollo, trabajé en atención al cliente y
              análisis de procesos, lo que me ayudó a entender mejor las
              necesidades reales de los usuarios y a aportar un enfoque
              analítico a mis proyectos. Ahora, busco mi primer reto profesional
              en desarrollo web, con ganas de aportar lo que sé, seguir
              aprendiendo y crecer en un entorno colaborativo donde la mejora
              continua sea parte del día a día.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
