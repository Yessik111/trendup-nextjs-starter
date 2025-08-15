export default function Home() {
  return (
    <div>
      <h1>Prueba de Variables</h1>
      <p>Variable: {process.env.NEXT_PUBLIC_CLIENT}</p>
    </div>
  );
}
