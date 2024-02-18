const config = {
  logo: () => {
    return (
      <>
        <img
          style={{ height: "var(--nextra-navbar-height)" }}
          src={"https://anastasialabs.com/assets/img/logo/logo.png"}
        />
      </>
    );
  },
  head: (
    <>
        <link rel="icon" type="image/svg+xml" sizes="any" href="/icon.png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Expletus+Sans:wght@700&display=swap" />
        <meta name="twitter:image" content="https://anastasialabs.com/assets/img/logo/logo.png" />
        <meta name="twitter:site:domain" content="https://anastasialabs.com/" />
        <style>{`
        .nextra-nav-container > nav > a:nth-child(3) > span {
          background-image: linear-gradient(90deg, black 0%, black 90%, #ab31e4 86%, #620df8 92%, #ab31e4 96%);
          background-repeat: repeat;
          background-clip: text;
          -webkit-background-clip: text;
          background-size: 200% auto;
          color: transparent;
          animation: textclip 5s linear infinite;
        }
        html[class~="dark"] .nextra-nav-container > nav > a:nth-child(3) > span {
          background-image: linear-gradient(90deg, rgba(243,244,246) 0%, rgba(243,244,246) 90%, #ab31e4 86%, #620df8 92%, #ab31e4 96%);
        }
        @keyframes textclip {
          0% { background-position: 0% center; }
          30% { background-position: 200% center; }
          100% { background-position: 200% center; }
        }`}</style>
    </>
  ),
  project: {
    link: "https://github.com/Anastasia-Labs/production-grade-dapps",
  },
  chat: {
    link: "https://discord.gg/M5zaz3wX",
  },
  toc: {
    extraContent: <></>,
  },
  useNextSeoProps() {
    const description = "Cardano Development Auditing Firm Your clients are depending on you to deliver safe and reliable applications. Anastasia Labs is a Haskell consultancy specialized in developing mission-critical blockchain applications";
    return {
      titleTemplate: "Anastasia Labs | %s",
      description,
      canonical: "https://anastasialabs.com",
      openGraph: {
        url: "https://anastasialabs.com",
        description,
        images: [
          {
            url: "https://anastasialabs.com/assets/img/logo/logo.png",
            width: 800,
            height: 418,
            alt: "Anastasia Labs - Where open-source meets impact. Cardano Smart Contracts Audit & Development company",
            type: "image/png",
          },
        ],
      },
      siteName: "Anastasia Labs",
      twitter: {
        handle: "@AnastasiaLabs",
        site: "https://anastasialabs.com/",
        cardType: "summary_large_image",
      },
    };
  },
  toc: {
    extraContent: <></>,
  },
  editLink:{
    component: null,
  },
  docsRepositoryBase: "https://github.com/Anastasia-Labs/production-grade-dapps",
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://anastasialabs.com/" target="_blank">
          Anastasia Labs
        </a>
        .
      </span>
    )
  }
};

export default config;
