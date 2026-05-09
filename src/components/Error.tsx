type TError = {
  message: string;
};
const ErrorPage = (props: TError) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorPage;
