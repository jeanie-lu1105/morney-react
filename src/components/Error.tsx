function ErrorPage(error) {
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPage;
