import "./Projects/Projects.css"
const PROJECTS = [
  {
    title: "Devtool",
    desc: "각종 프로그래밍 언어와 개발에 도움이 되는 작품.",
    tags: ["Wasm", "js", "design"],
    links: { demo: "https://devtool.co.kr", github: "https://github.com/dxdxffgg99/Devtool" },
  },
  {
    title: "lmstudio-python-sandbox",
    desc: "내가 쓸려고 만들었지만 생각보다 잘 뽑힌 ai툴",
    tags: ["typescript", "Ai", "lmstudio","python"],
    links: { github: "https://github.com/dxdxffgg99/lmstudio-python-code-sandbox" },
  }
]
export default function Projects() {
  return (
    <section className="projects" id="Projects">
      <div className="projects__inner">
        <div className="projects__top">
          <h5 className="projects__title">Projects</h5>
          <p className="projects__subtitle">
            직접 만든것들.
          </p>
        </div>
        <div className="projects__grid">
          {PROJECTS.map((p) => (
            <article className="projects__card" key={p.title}>
              <div className="projects__head">
                <h6 className="projects__name">{p.title}</h6>
                <p className="projects__desc">{p.desc}</p>
              </div>
              <div className="projects__tags">
                {p.tags.map((t) => (
                  <span className="projects__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="projects__actions">
                {p.links && p.links.demo ? (
                  <a className="projects__btn" href={p.links.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : null}
                <a className="projects__btn projects__btn--ghost" href={p.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
