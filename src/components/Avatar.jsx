export default function Avatar() {
  return (
    <div className="w-64 h-64 rounded-full p-6 box-border">
      <div className="w-full h-full rounded-full overflow-hidden">
        <img
          src="/src/assets/avatar.jpg"
          alt="Tu nombre"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}