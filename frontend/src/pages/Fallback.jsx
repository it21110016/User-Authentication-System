const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg">It seems like you are lost.</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to the homepage
      </a>
    </div>
  );
}

export default Fallback;