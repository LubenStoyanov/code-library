export default function List({ anwsers }) {
  // console.log(anwsers[0].fields.title);
  const listAnwsers = anwsers.map((anwser) => (
    <li key={anwser.sys.id}>anwser: {anwser.fields.title}</li>
  ));
  return (
    <div>
      <ol>{listAnwsers}</ol>
    </div>
  );
}
