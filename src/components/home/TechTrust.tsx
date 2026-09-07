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
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => (
              <li key={tech}>
                <div className="bg-background hover:bg-card relative flex h-16 items-center justify-center px-4 transition-colors sm:h-20">
                  <span className="text-muted-foreground hover:text-foreground text-sm font-medium tracking-tight sm:text-base">
                    {tech}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
