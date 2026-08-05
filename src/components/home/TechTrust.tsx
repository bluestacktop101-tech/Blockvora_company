import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";

const technologies = [
  "Ethereum",
  "Solana",
  "AWS",
  "OpenAI",
  "Anthropic",
  "React",
  "Node.js",
  "Python",
  "Go",
  "Rust",
];

export function TechTrust() {
  return (
    <section
      aria-labelledby="tech-trust-heading"
      className="border-border/60 relative border-y py-16"
    >
      <Container>
        <Reveal className="text-center">
          <h2
            id="tech-trust-heading"
            className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.28em] uppercase"
          >
            Engineered on the technologies enterprises trust
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/40 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <li key={tech}>
                <div className="group bg-background hover:bg-card relative flex h-20 items-center justify-center px-4 transition-colors duration-500 sm:h-24">
                  <span className="text-muted-foreground group-hover:text-foreground text-base font-medium tracking-tight transition-colors duration-500 sm:text-lg">
                    {tech}
                  </span>
                  <span
                    className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-center scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
