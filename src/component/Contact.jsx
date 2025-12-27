import "./Contact/Contact.css"

export default function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="contact__inner">
        <div className="contact__card">
          <div className="contact__top">
            <h5 className="contact__title">Contact</h5>
            <p className="contact__sub">
              같이 만들 거 있으면 편하게 던져주세요.
            </p>
          </div>

          <div className="contact__grid">
            <a className="contact__item" href="mailto:dxdxffgg99@gmail.com">
              <div className="contact__k">Email</div>
              <div className="contact__v">dxdxffgg99@gmail.com</div>
            </a>

            <a className="contact__item" href="https://github.com/dxdxffgg99" target="_blank" rel="noreferrer">
              <div className="contact__k">GitHub</div>
              <div className="contact__v">dxdxffgg99</div>
            </a>

            <a className="contact__item" href="https://dxdxffg.com" target="_blank" rel="noreferrer">
              <div className="contact__k">Site</div>
              <div className="contact__v">https://dxdxffg.com</div>
            </a>
          </div>

          <div className="contact__cta">
            <a className="contact__btn" href="mailto:dxdxffgg99@gmail.com">
              Send Email
            </a>
            <a className="contact__btn contact__btn--ghost" href="https://github.com/dxdxffgg99" target="_blank" rel="noreferrer">
              Open GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
