export function DuckMark() {
  return (
    <svg viewBox="25 15 100 92" fill="none" aria-hidden="true" shapeRendering="crispEdges">
      <DuckHead />
    </svg>
  );
}

function DuckHead() {
  return <>
    <path d="M48 14h48v8h16v16h8v48h-8v16H40V94h-8V46h8V30h8z" fill="#082d23" />
    <path d="M52 22h40v8h16v16h8v40h-12V50h-8V38H56v8H44v46h-8V46h8V30h8z" fill="#628347" />
    <path d="M56 38h32v8h12v16h8v32H88v8H52V86H40V62h8V46h8z" fill="#fff3c3" />
    <path d="M60 62h8v12h-8zm28 0h8v12h-8z" fill="#102b21" />
    <path d="M48 78h32v8h12v8H72v8H32V90h16z" fill="#ffbd35" />
    <path d="M32 94h40v8H32z" fill="#ea8430" />
  </>;
}

export default function Freddy({ pose = 'coding' }) {
  const label = pose === 'wave' ? 'waving hello' : pose === 'note' ? 'planning the hackathon' : 'coding on a laptop';
  return (
    <svg viewBox="0 0 160 170" fill="none" role="img" aria-label={`Freddy, the QuHacks duck, ${label}`} shapeRendering="crispEdges">
      <path d="M48 88h56v14h16v16h8v32H32v-32h8v-16h8z" fill="#173f2c" />
      <path d="M50 104h54v40H46v-28h4z" fill="#3d633b" />
      <DuckHead />
      {pose === 'coding' ? <>
        <path d="M92 106h24v8h12v28H88z" fill="#21503a" />
        <path d="M26 110h68l10 40H36z" fill="#0a211c" stroke="#91a46e" strokeWidth="4" />
        <path d="M60 127h12v4H60zm4-4h4v12h-4z" fill="#d3de91" />
        <path d="M28 150h108v6H28z" fill="#e0b95a" />
        <path d="M108 138h16v10h-20v-6h4z" fill="#fff3c3" />
      </> : <>
        <path d="M42 148h24v12H30v-6h12zm48 0h24v6h12v6H90z" fill="#f3b43c" />
        {pose === 'wave' ? <>
          <path d="M110 108h14V96h8V82h12v30h-8v12h-20z" fill="#4f7944" />
          <path d="M132 68h12v8h8v12h-20z" fill="#fff3c3" />
          <path d="M35 112h12v28H35z" fill="#628347" />
          <path d="M62 120h24v4H62zm8-8h8v20h-8z" fill="#c8d890" />
        </> : <>
          <path d="M34 110h72v43H34z" fill="#f5dc91" stroke="#a38748" strokeWidth="3" />
          <path d="M49 122h38v4H49zm0 10h29v4H49zm0 10h34v4H49z" fill="#74844e" />
          <path d="M108 120h8v20h-12v-8h4z" fill="#fff3c3" />
        </>}
      </>}
    </svg>
  );
}
