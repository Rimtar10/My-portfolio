export function Badge({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium"
      style={{ backgroundColor: "rgba(184,107,119,0.14)", color: "#8A4B54" }}
    >
      {children}
    </span>
  );
}
