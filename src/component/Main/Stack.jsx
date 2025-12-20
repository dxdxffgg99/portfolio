const rstack = [
  { name: "HTML5" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "WASM" },
  { name: "React" },
  { name: "Python" },
  { name: "C++" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Cloudflare" },
];

export default function Stack() {
  const listItems = rstack.map(stack =>
    <div key={stack.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }} className="LcpStaff">
      <img 
        src={`https://cdn.simpleicons.org/${stack.name == "WASM" ? (
          "webassembly"
        ) : (
          stack.name.toLowerCase()
        )}`} 
        alt={`${stack.name} icon`}
        width="24"
        fetchPriority="VeryHigh"
      />
      {stack.name}
    </div>
  );

  return (
    <div className="StackGridContainer">
      {listItems}
    </div>
  );
}