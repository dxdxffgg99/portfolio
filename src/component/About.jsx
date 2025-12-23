import './About/About.css'

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__card">
          <div className="about__top">
            <div>
              <h5 className="about__title">About</h5>
            </div>
            <div className='about__text'>
              <p>안녕하세요, 프론트부터 서버까지 직접 만지는 광기의 개발자입니다.</p>
              <p>병목을 찾고 지우는 걸 좋아해서, 렌더링·번들·네트워크까지 끝까지 파고듭니다.</p>
            </div>
            <div className="about__badge">
              <span className="about__dot" />
              Available
            </div>
          </div>

          <div className="about__grid">
            <div className="about__item">
              <div className="about__k">Focus</div>
              <div className="about__v">Frontend • Performance</div>
            </div>
            <div className="about__item">
              <div className="about__k">Interests</div>
              <div className="about__v">WebGL • Shader • WASM</div>
            </div>
            <div className="about__item">
              <div className="about__k">Style</div>
              <div className="about__v">Clean structure • Fast UI • Stable API</div>
            </div>
            <div className="about__item">
              <div className="about__k">Tools</div>
              <div className="about__v">React • Emcc • Vscode • Git • GitHub</div>
            </div>
          </div>

          <div className="about__chips">
            <span className="about__chip">React</span>
            <span className="about__chip">TypeScript</span>
            <span className="about__chip">Node.js</span>
            <span className="about__chip">REST API</span>
            <span className="about__chip">WebGL</span>
            <span className="about__chip">WASM</span>
            <span className="about__chip">Optimization</span>
          </div>
        </div>
      </div>
    </section>
  )
}
