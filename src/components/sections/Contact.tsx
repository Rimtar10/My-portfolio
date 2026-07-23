import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { site } from "../../data/site";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { Reveal } from "../ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        return;
      }

      const payload = await res.json().catch(() => null);
      const message =
        payload?.errors?.map((err: { message: string }) => err.message).join(", ") ||
        "Something went wrong sending that. Please try again or email me directly.";
      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage(
        "Couldn't reach the server. Check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <footer
      id="contact"
      className="bg-deep-teal pb-10 pt-16 text-bg-alt sm:pb-12 sm:pt-20"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal className="text-center">
          <p className="eyebrow mb-4" style={{ color: "#9FB4BE" }}>
            Contact
          </p>
          <h2 className="font-serif text-[32px] font-semibold text-bg-alt sm:text-[40px]">
            Let's build something worth making.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex justify-center gap-6">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bg-alt/25 text-bg-alt transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Mail size={19} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bg-alt/25 text-bg-alt transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-bg-alt/25 text-bg-alt transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <GithubIcon size={18} />
          </a>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-14 max-w-md">
          {status === "sent" ? (
            <p className="text-center text-[15px] text-bg-alt">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  placeholder="Your name"
                  className="rounded-lg border border-bg-alt/25 bg-transparent px-4 py-3 text-[14px] text-bg-alt placeholder:text-bg-alt/50 outline-none focus:border-terracotta"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="rounded-lg border border-bg-alt/25 bg-transparent px-4 py-3 text-[14px] text-bg-alt placeholder:text-bg-alt/50 outline-none focus:border-terracotta"
                />
              </div>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-lg border border-bg-alt/25 bg-transparent px-4 py-3 text-[14px] text-bg-alt placeholder:text-bg-alt/50 outline-none focus:border-terracotta"
              />

              {status === "error" && errorMessage && (
                <p className="text-[13px] text-terracotta">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-5 py-3 text-[14px] font-medium text-bg-base transition-colors hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>

        <p className="mt-8 text-center text-[13px] text-bg-alt/50">
          © {new Date().getFullYear()} {site.name}.
        </p>
      </div>
    </footer>
  );
}
