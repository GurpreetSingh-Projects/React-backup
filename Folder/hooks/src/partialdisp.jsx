export default function Partialdisp()
{
  const disp = "name";
  return (
    <>
      <div>
        <label for="name" name="name">Hello</label>
        <input type="text" name="id" /> 
        <output>{disp}</output>
        <button></button>
      </div>
    </>
  );
}